import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
    @Input('appStyle') colorClick: string | undefined;
    @HostBinding('style.color') color:string | undefined = 'red';
    @HostBinding('style.border') border:string = 'none';
  constructor(private elRef: ElementRef) {
  }
  @HostListener('click') onClick(){
      this.color = this.colorClick;
      this.border = '1px dashed grey';
  }
}
