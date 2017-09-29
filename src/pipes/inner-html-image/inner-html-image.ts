import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'innerHtmlImage',
})
export class InnerHtmlImagePipe implements PipeTransform {


  private imgTagPattern: RegExp = new RegExp(/<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/g);

  constructor(private dom: DomSanitizer) { }

  transform(value: string, ...args) {

    console.log(value.match(this.imgTagPattern))

    if (value.match(this.imgTagPattern)) {
      value = value.match(this.imgTagPattern)[0];
    }

    return this.dom.bypassSecurityTrustHtml(value);
  }
}
