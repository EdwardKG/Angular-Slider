import {Directive, ElementRef} from '@angular/core';
 
@Directive({
    selector: '[arrow]'
})
export class ArrowStyle{
     
    constructor(private elementRef: ElementRef){
         
        this.elementRef.nativeElement.style.height = "20px";
		  this.elementRef.nativeElement.style.weigth = "20px";
    }
}
