import { Component, input, OnInit } from '@angular/core';
import { Film } from './film.interface';

@Component({
  selector: 'app-film-item',
  standalone: true,
  imports: [],
  templateUrl: './film-item.component.html',
  styleUrl: './film-item.component.css'
})
export class FilmItemComponent {
    film = input.required<Film>();
}
