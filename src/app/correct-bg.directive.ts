import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCorrectBg]'
})
export class CorrectBgDirective {

  constructor(private el: ElementRef, private render: Renderer2) { }


  @Input() isCorrect: Boolean = false;

  @HostListener('click') answer(){
    if(this.isCorrect){
      this.render.setStyle(this.el.nativeElement, 'background', 'green');
      this.render.setStyle(this.el.nativeElement, 'color', 'white');

    }else{
      this.render.setStyle(this.el.nativeElement, 'background', 'red');
      this.render.setStyle(this.el.nativeElement, 'color', 'white');
    }



  }
  

}
