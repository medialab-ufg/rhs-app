import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'innerHtmlNotification',
})
export class InnerHtmlNotificationPipe implements PipeTransform {

  //private aTagPattern: RegExp = new RegExp(/<a[\s]+([^>]+)>((?:.(?!\<\/a\>))*.)<\/a>/g);
  //private contentPattern: RegExp = new RegExp(/<a>(.*?)<\/a>/g);

  constructor(private dom: DomSanitizer) { }
  
  transform(value: string, ...args) {
    //console.log(value);
    //console.log(value.match(this.aTagPattern));

   
      /*
      // Converts to a tag object
      let divTagHtml = document.createElement('div'); 
      divTagHtml.innerHTML = aTagStr;
      let aTagHtml = divTagHtml.firstChild;

      // Gets ID from a tag
      aTagHtml.attributes.removeNamedItem('href');
      */    
    
    //console.log(value);
    return this.dom.bypassSecurityTrustHtml(value);
  }
}
