import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-item-img',
  templateUrl: './slider-item-img.component.html',
  styleUrls: ['./slider-item-img.component.scss']
})
export class SliderItemImgComponent {
  @Input() slide: string;
}
