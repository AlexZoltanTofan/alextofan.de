import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent {
  images = ['code.jpg', 'monitor.jpg', 'artificial-intelligence.jpg'];
  headlines = [
    'Bring engineering to the next level',
    'Born to code',
    'Entwicklung Künstlicher Intelligenz',
  ];

  currentImage = 0;
  showImage = true;
  ngOnInit() {
    // ca si onload
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage & this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
