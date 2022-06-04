import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { EffectCards } from 'swiper';

SwiperCore.use([EffectCards]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', "./home.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logScrollStart() { }

  logScrolling(event: Event) { }

  logScrollEnd() { }

  scrollToTop() { document.querySelector('ion-content')?.scrollToTop(500) }

}
