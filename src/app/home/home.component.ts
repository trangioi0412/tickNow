import { Component, inject, OnInit } from '@angular/core';
import { ListfilmComponent } from '../films/listfilm/listfilm.component';
import { FilmService } from '../films/film-item/film.service';
import { FilmInterface } from '../films/film-item/film.interface';
import { RouterModule } from '@angular/router';
import { TrailerComponent } from '../films/film-item/trailer/trailer.component';
import { DetailPopUpComponent } from '../films/film-item/detail-pop-up/detail-pop-up.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListfilmComponent, RouterModule, TrailerComponent, DetailPopUpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  filmService = inject(FilmService)
  filmComingSoon: FilmInterface[] = [];
  filmComing: FilmInterface[] = []
  ngOnInit(): void {
    this.filmService.filmComingSoon(2).subscribe({
      next: data => this.filmComingSoon = data,
    })
    this.filmService.filmComingSoon(1).subscribe({
      next: data => this.filmComing = data,
    })
  }

  trailerClick(data:FilmInterface) {
    console.log(data);
  }
}
