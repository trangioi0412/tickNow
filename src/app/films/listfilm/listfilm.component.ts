import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { FilmItemComponent } from '../film-item/film-item.component';
import { FilmService } from '../film-item/film.service';
import { FilmInterface } from '../film-item/film.interface';

import { register } from 'swiper/element/bundle';
register();
import 'swiper/element/bundle';
import { TrailerComponent } from '../film-item/trailer/trailer.component';

@Component({
  selector: 'app-listfilm',
  standalone: true,
  imports: [FilmItemComponent],
  templateUrl: './listfilm.component.html',
  styleUrl: './listfilm.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListfilmComponent{
  data = input.required<FilmInterface[]>()
  title = input.required<string>()
}
