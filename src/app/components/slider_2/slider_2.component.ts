import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider_2',
  templateUrl: './slider_2.component.html',
  styleUrls: ['./slider_2.component.scss'],
})
export class SliderComponent_2 implements OnInit {
	items : Array<any> = [];
	currentSlideIndex = 0;
	condition: boolean=false;
  slides: string[] = [''];
  startPosition: number;
  lastTranslate: number;
  bodyWidth: number = document.body.offsetWidth - 17;
  translate: number = -0.189 * this.bodyWidth * this.currentSlideIndex;
  isActive = false;
  sliderTrackWidth: number;

  

  ngOnInit(): void {
    const track = document.querySelector('.slider__track') as HTMLElement;
    this.sliderTrackWidth = track.offsetWidth;
	 this.items = [ 'TEXT', 'Hello', 'My name is', 'Edward', 'I am', '18 years', 'And', 'Thats My', 'Image carousel', 'Made with', 'Angular', 'Check', 'Please'];
    for (let i = 0; i < 13; i++) {
        this.slides[i] = this.items[i];
    }
  }

  next(): void {
    if (this.currentSlideIndex < 9) {
      this.currentSlideIndex++;
    }
    if (-0.189 * this.bodyWidth * this.currentSlideIndex < 0.9 * this.bodyWidth - this.sliderTrackWidth) {
      this.translate = 0.9 * this.bodyWidth - this.sliderTrackWidth;
    } else {
      this.translate = -0.189 * this.currentSlideIndex * this.bodyWidth;
    }
  }

  previous(): void {
    if (this.currentSlideIndex) {
      this.currentSlideIndex--;
    }
    this.translate = -0.189 * document.body.offsetWidth * this.currentSlideIndex;
  }

  onDragStart(event: MouseEvent): void {
    this.startPosition = event.clientX;
    this.lastTranslate = this.translate;
    this.isActive = true;
  }

  onDragMove(event: MouseEvent): void {
    if (this.isActive) {
      const translate = this.lastTranslate + event.clientX - this.startPosition;

      if (translate > 0) {
        this.translate = 0;
      } else if (translate < 0.9 * this.bodyWidth - this.sliderTrackWidth) {
        this.translate = 0.9 * this.bodyWidth - this.sliderTrackWidth;
      } else {
        this.translate = translate;
      }
    }
  }

  onDragEnd(): void {
    this.isActive = false;
    this.lastTranslate = this.translate;
    this.currentSlideIndex = Math.ceil(this.translate / (-0.189) / this.bodyWidth);
  }
}
