import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FilmInterface } from './film.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private http = inject(HttpClient);

  filmComingSoon(status:number):Observable<FilmInterface[]> {
    return this.http.get<FilmInterface[]>(`http://localhost:3000/movies?status=${status}`)
  }

  filmById(id:number|string):Observable<FilmInterface>{
    return this.http.get<FilmInterface>(`http://localhost:3000/movies/${id}`);
  }

  // Lưu giá trị của phim được click trailer hoặc chi tiết film
  private selectedFilm = new BehaviorSubject< {check: true| false, Film?: FilmInterface, data: "" | "trailer" | "detail" } | null >(null);
  selectedFilm$ = this.selectedFilm.asObservable();

  setSelectedFilm(Film: {check: true| false, Film?: FilmInterface, data: "" | "trailer" | "detail"}){
    this.selectedFilm.next(Film);
  }

}
