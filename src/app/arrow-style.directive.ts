import {Directive, ElementRef} from '@angular/core';
 
@Directive({
	selector: '[app-arrow]'
})

export class ArrowStyleDirective{
   constructor(private elementRef: ElementRef){ 
   	this.elementRef.nativeElement.style.height = "20px";
		this.elementRef.nativeElement.style.weigth = "20px";
   }
}
