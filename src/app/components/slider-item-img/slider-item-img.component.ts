import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-item-img',
  templateUrl: './slider-item-img.component.html',
  styleUrls: ['./slider-item-img.component.scss']
})
export class SliderItemComponentImg {
  @Input() slide: string;
}

/*<ng-template #elseBlock>
<p>{{slide}}</p>
</ng-template>   */