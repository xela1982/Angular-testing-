import { Subject } from 'rxjs';
import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightDirectiveMouseOver {


  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input('appHighlightMouse') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}