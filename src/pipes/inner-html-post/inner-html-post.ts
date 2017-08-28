import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'innerHtmlPost',
})
export class InnerHtmlPostPipe implements PipeTransform {

  constructor(private dom: DomSanitizer) { }

  transform(value: string, ...args) {
    return this.dom.bypassSecurityTrustHtml(value);
  }
}
