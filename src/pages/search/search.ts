import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage, Searchbar, Platform } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { StatusBar } from '@ionic-native/status-bar';

import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  @ViewChild('searchBar') searchBar: Searchbar;

  postList: Array<any> = new Array<any>();
  postQueries: { [query: string]: String } = {};

  searchTerm = '';
  searchControl: FormControl;
  
  showSpinner = false;
  noMoreResults = false;

  categoryFiltering = false;
  tagFiltering = false;
  filterName = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: ApiProvider,
              public platform: Platform,
              public statusBar: StatusBar) {
      
    this.searchControl = new FormControl();
    
    if (this.navParams.get('tagId')) { 
      this.postQueries['tags'] = this.navParams.get('tagId'); 
      this.filterName = this.navParams.get('tagName'); 
      this.tagFiltering = true;

      this.searchPosts(false);
    }
    if (this.navParams.get('categoryId')) {
      this.postQueries['categories'] = this.navParams.get('categoryId'); 
      this.filterName = this.navParams.get('categoryName'); 
      this.categoryFiltering = true;
      this.searchPosts(false);
    }
  }

  ionViewDidLoad() {
    this.searchControl.valueChanges
                          .debounceTime(600)
                          .distinctUntilChanged()
                          .subscribe(search => this.searchPosts(false));
  }

  ionViewDidEnter(){
    this.statusBar.backgroundColorByHexString('008884');
    this.searchBar.setFocus();
  }

  ionViewDidLeave(){
    this.statusBar.backgroundColorByHexString('042830');
  }


  goToPostPage(id: number) {
    this.navCtrl.push('PostPage', {'postId': id});
  }

  searchPosts(isLoadingMore: boolean): Promise<any> {

    return new Promise((resolve) => {

      if ((this.searchTerm && this.searchTerm.trim()) || this.categoryFiltering || this.tagFiltering) {

        // New search begins
        if (isLoadingMore === false) {
          this.postList = new Array<any>();
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
          console.log('Error ' + err +  ' - On Search Data Request.');
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

  deleteFilter(filterChip: Element) {
    this.postQueries['tags'] = null;
    this.postQueries['categories'] = null;
    this.categoryFiltering = false;
    this.tagFiltering = false;
    filterChip.remove();
    this.searchPosts(false);
  }

}
