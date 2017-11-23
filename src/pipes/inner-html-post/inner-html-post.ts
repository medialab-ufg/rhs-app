import { SettingsProvider } from './../../providers/settings/settings';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'innerHtmlPost',
})
export class InnerHtmlPostPipe implements PipeTransform {

  constructor(private dom: DomSanitizer, private settings: SettingsProvider) { }

  transform(value: string, ...args) {
    value = value.replace(/(src=")(?!https?:\/\/)\/?([^"]+\.(jpe?g|png|gif|bmp))"/ig, '$1' + this.settings.apiURL + '$2"');
    return this.dom.bypassSecurityTrustHtml(value);
  }
}
