import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { OnMount } from 'ng-dynamic';

@Component({
  selector: 'comment-box',
  templateUrl: 'comment-box.html'
})
export class CommentBoxComponent implements OnMount, OnInit{

  @Input() author: string;
  @ViewChild('authorContent') authorContent: ElementRef;

  @Input() message: string;
  @ViewChild('messageContent') messageContent: ElementRef;

  @Input() depth: string;
  depthValue: number = 0;
  
  constructor() {
  }

  dynamicOnMount(attr: Map<string, string>, content: string) {

    this.author = attr.get('author');
    this.authorContent.nativeElement.innerHTML = this.author;

    this.message = attr.get('message');
    this.messageContent.nativeElement.innerHTML = this.message;

    this.depth = attr.get('depth');
    this.depthValue = Number(this.depth);
    console.log(this.depth + ' -> ' + this.message);

  }

  ngOnInit() {
  }

}
