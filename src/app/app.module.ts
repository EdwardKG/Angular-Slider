import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent_1 } from './components/slider_1/slider_1.component';
import { SliderComponent_2 } from './components/slider_2/slider_2.component';
import { SliderComponent_3 } from './components/slider_3/slider_3.component';
import { SliderItemImgComponent } from './components/slider-item-img/slider-item-img.component';
import { SliderItemComponent } from './components/slider-item/slider-item.component';

import { ArrowStyleDirective } from './arrow-style.directive';


@NgModule({
	 declarations: [
		AppComponent,
		SliderComponent_1,
		SliderComponent_2,
		SliderComponent_3,
		SliderItemImgComponent,
		SliderItemComponent,
		ArrowStyleDirective
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
