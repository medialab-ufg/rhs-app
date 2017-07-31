import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ApiProvider } from './../../providers/api/api';
import { PostModel } from './../../providers/models/models';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  postList: Array<PostModel> = new Array<PostModel>();
  postQueries: { [query: string]: String } = {};

  searchTerm = '';
  searchControl: FormControl;
  
  showSpinner = false;
  noMoreResults = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: ApiProvider) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.searchControl.valueChanges
                          .debounceTime(600)
                          .distinctUntilChanged()
                          .subscribe(search => this.searchPosts(false));
  }

  goToPostPage(id: number) {
    this.navCtrl.push('PostPage', {'postId': id});
  }

  searchPosts(isLoadingMore: boolean): Promise<any> {

    return new Promise((resolve) => {

      if (this.searchTerm && this.searchTerm.trim()) {

        // New search begins
        if (isLoadingMore === false) {
          this.postList = new Array<PostModel>();
          this.postQueries['page'] = '1';
          this.postQueries['search'] = this.searchTerm;

          this.showSpinner = true;
        } 
        //  Infinite scroll calls
        else if (isLoadingMore === true) {
          this.postQueries['page'] = Number(this.postQueries['page']) + 1 + '';
        } 

        // Perform the request to the api service
        this.api.getPostList(this.api.isLogged(), this.postQueries).subscribe(
          postList => {
          this.postList = this.postList.concat(postList);     
          this.noMoreResults = false;
        },
        err => {
          if (err === 400) {
            this.noMoreResults = true;
          }
          console.log('Error ' + err +  ' - On User Data Request.');
        },
        () => { this.showSpinner = false; resolve() });

      }
      // Empty string or whitespace only 
      else {
        this.showSpinner = false;

        resolve();
      }
    });
  }

  doInfinite(): Promise<any> {
    return new Promise((resolve) => {
      this.searchPosts(true).then(() => resolve());
    });
  }

  onCancel(event) {
    this.navCtrl.pop();
  }

}
