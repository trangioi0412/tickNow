import { Component, inject, input, output } from '@angular/core';
import { FilmInterface } from './film.interface';
import { RouterModule } from '@angular/router';
import { FilmService } from './film.service';

@Component({
  selector: 'app-film-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './film-item.component.html',
  styleUrl: './film-item.component.css'
})
export class FilmItemComponent{
    movie = output<FilmInterface>()
    film = input.required<FilmInterface>();

    filmService = inject(FilmService);
    filmClick: {check: true| false, Film?: FilmInterface, data: "" | "trailer" | "detail"} = {check: false, data: ""}

    watchTrailer(){
      this.filmClick = {check: true, Film: this.film(), data: "trailer"}

      this.filmService.setSelectedFilm(this.filmClick);
    }

    watchDetail() {
      this.filmClick = {check: true, Film: this.film(), data: "detail"}

      this.filmService.setSelectedFilm(this.filmClick);
    }
}
