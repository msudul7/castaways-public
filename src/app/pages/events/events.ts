declare global {
  interface Window {
    baguetteBox: any;
  }
}

import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.html',
  styleUrls: ['./events.scss']
})
export class EventsComponent implements AfterViewInit {
  ngAfterViewInit() {
    // @ts-ignore
    if (window.baguetteBox) {
      window.baguetteBox.run('.gallery');
    }
  }
}