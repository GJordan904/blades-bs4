import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as Masonry from 'masonry-layout';
import * as imagesLoaded from 'imagesloaded';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit {
  masonry: Masonry;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    imagesLoaded('.masonry-cards', () => {
      this.masonry = new Masonry('.masonry-cards', {
        gutter: 22,
        itemSelector: '.team-card',
        percentPosition: true
      });
    })
  }
}
