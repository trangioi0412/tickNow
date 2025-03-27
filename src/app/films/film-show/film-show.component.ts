import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FilmItemComponent } from '../film-item/film-item.component';

import { register } from 'swiper/element/bundle';
register();
import 'swiper/element/bundle';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-film-show',
  standalone: true,
  imports: [FilmItemComponent, CommonModule],
  templateUrl: './film-show.component.html',
  styleUrl: './film-show.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FilmShowComponent implements AfterViewInit {

  films = [
    {
      id: 1,
      img: 'https://banhangvnpt.vn/Uploads/images/2021/2020012001.jpg',
    },
    {
      id: 2,
      img: 'https://dep.com.vn/wp-content/uploads/2019/12/phim-dien-anh-avengers-endgame.jpg',
    },
    {
      id: 3,
      img: 'https://genk.mediacdn.vn/2019/8/12/anh-2-15655805281641592033330.png',
    },
    {
      id: 4,
      img: 'https://upload.wikimedia.org/wikipedia/vi/a/a3/Venom_The_Last_Dance_Poster.jpg',
    },
    {
      id: 5,
      img: 'https://tailieutienganh.edu.vn/public/files/upload/default/images/dien-anh-marvel-khong-lam-ban-that-vong-dau.jpg',
    },
    {
      id: 6,
      img: 'https://upload.wikimedia.org/wikipedia/vi/4/42/%C3%81p_ph%C3%ADch_phim_M%E1%BA%AFt_bi%E1%BA%BFc.jpg',
    },
  ]

  filmcenter = () =>{
    return Math.floor(this.films.length / 2);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const swiperEl = document.getElementById('mySwiper') as any;
      if (swiperEl && swiperEl.swiper) {
        swiperEl.swiper.slideTo(2);
      }
    }, 100);
    console.log(this.films.length);
  }
}
