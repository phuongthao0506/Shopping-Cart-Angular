import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input('color') colorDefault:string = 'pink';
  @Input('colorOut') colorDefault2:string = 'pink';
  constructor(private el:ElementRef) {

    
   }
   @HostListener('mouseover') mouseOver() {
    this.el.nativeElement.style.color =this.colorDefault;
    this.el.nativeElement.style.textDecoration ="underline";
  }

  @HostListener('mouseout') mouseOut() {
    this.el.nativeElement.style.color =this.colorDefault2;
    this.el.nativeElement.style.textDecoration ="";
  } }


