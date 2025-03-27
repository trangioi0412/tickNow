import { Component } from '@angular/core';
import { FilmShowComponent } from '../films/film-show/film-show.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilmShowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
