import { Component, inject, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { FilmInterface } from '../film.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trailer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trailer.component.html',
  styleUrl: './trailer.component.css',
  animations: [
      trigger('sliderOpen', [
        transition(':enter', [
          style({ transform: 'scale(0)', opacity: 0 }),
          animate('0.5s ease-out', style({ transform: 'scale(1)', opacity: 1 }))
        ])
      ])
  ]
})
export class TrailerComponent implements OnInit{
  filmTrailer!:FilmInterface | undefined;
  check: true| false = false;

  private filmService = inject(FilmService);
  private santizer = inject(DomSanitizer);

  safeTrailerUrl?: SafeResourceUrl;

  ngOnInit(): void {
    this.filmService.selectedFilm$.subscribe({
      next: (data) => {
        if(data?.data !== "trailer"){
          return;
        }

        if(data){
          this.filmTrailer = data?.Film
          this.check = data.check;

          if(data.Film?.trailer){
            this.safeTrailerUrl = this.santizer.bypassSecurityTrustResourceUrl(data.Film?.trailer);
          }
        }
      },
    })
  }

  closeTrailer(){
    this.check = false;
    this.filmService.setSelectedFilm({check: this.check, Film:undefined, data: ""})
  }
}
