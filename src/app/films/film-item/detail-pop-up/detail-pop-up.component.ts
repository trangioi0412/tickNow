import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FilmInterface } from '../film.interface';
import { FilmService } from '../film.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-pop-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-pop-up.component.html',
  styleUrl: './detail-pop-up.component.css'
})
export class DetailPopUpComponent implements OnInit{

  filmDetail!:FilmInterface | undefined;
  check: true| false = false;

  private FilmService = inject(FilmService);

  ngOnInit(): void {
    this.FilmService.selectedFilm$.subscribe({
      next: (data) => {
        if(data?.data !== "detail"){
          return;
        }
        if(data){
          this.check = data.check
          this.filmDetail = data.Film;
        }
      }
    })
  }

  closeTrailer(){
    this.check = false;
  }

}
