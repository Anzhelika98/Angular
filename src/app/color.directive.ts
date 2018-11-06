import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appColor]'
})

export class ColorDirective {

  @Input('appColor') public color: string;

  constructor(public el: ElementRef) {
    this.el.nativeElement.style.color = 'red';
  }


  @HostListener('click') onClick() {
    this.highlight(this.color);
  }

  public highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
