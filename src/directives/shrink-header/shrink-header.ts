import { Directive, ElementRef, Renderer } from '@angular/core';
 
@Directive({
  selector: '[shrink-header]',
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class ShrinkHeader {
 
  header: any;
  headerHeight: any;
  translateAmt: any;
  previousTop: number = 0;

  constructor(public element: ElementRef, public renderer: Renderer) {  }
 
  ngAfterViewInit() {      
    this.header = document.getElementById("shrinkHeader");
    this.headerHeight = this.header.clientHeight;
    this.renderer.setElementStyle(this.header, 'transition', 'transform .2s ease-in');
  }
  
  onContentScroll(ev) {
    ev.domWrite(() => {
      this.updateHeader(ev);
    });   
  }
 
  updateHeader(ev) {

    if (this.previousTop > ev.scrollTop) {  
      if (this.header.style['webkitTransform'] != 'translate3d(0px, 0px, 0px)') {
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + 0 + 'px,0)');
      }
    } else {
      if (ev.scrollTop > 0) {
        this.translateAmt = -ev.scrollTop / 2;    
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0)');
      }  
    }
    
    this.previousTop = ev.scrollTop;

  }
 
 
}