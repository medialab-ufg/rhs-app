import { Component, Input } from '@angular/core';

@Component({
  selector: 'information',
  templateUrl: 'information.html'
})
export class InformationComponent {

  @Input('message') message: string;
  @Input('detail') detail: string;

  constructor() {

  }

}
