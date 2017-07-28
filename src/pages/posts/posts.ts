import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { UpdateProvider } from './../../providers/update/update';
import { PostModel } from './../../providers/models/models';

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  postsView: string = 'home';

  homePostList: Array<PostModel> = new Array<PostModel>();
  queuePostList: Array<PostModel> = new Array<PostModel>();
  followingPostList: Array<PostModel> = new Array<PostModel>();

  homePostQueries: { [query: string]: String } = {};
  queuePostQueries: { [query: string]: String } = {};
  followingPostQueries: { [query: string]: String } = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public api: ApiProvider,
              public authentication: AuthenticationProvider,
              public update: UpdateProvider) { }

  ionViewDidLoad() {
    
    this.loadPosts(this.postsView, false);

    // Uses update service to re-load after a time period without loading.
    this.update.homePostsOutdated.subscribe(() => {
      if (this.postsView === 'home') {
        this.loadPosts(this.postsView, false);
      }
    });
    this.update.queuePostsOutdated.subscribe(() => {
      if (this.postsView === 'queue') {
        this.loadPosts(this.postsView, false);
      }
    });
    this.update.followingPostsOutdated.subscribe(() => {
      if (this.postsView === 'following') {
        this.loadPosts(this.postsView, false);
      }
    });

  }

  goToPostPage() {
    this.navCtrl.push('PostPage');
  }

  goToSearchPage() {
    this.navCtrl.push('SearchPage');
  }

  goToNotificationsPage() {
    this.navCtrl.push('NotificationsPage');
  }

  loadPosts(postView: string, isLoadingMore: boolean): Promise<any> {
    
    this.postsView = postView;

    return new Promise((resolve) => {

      switch (this.postsView) {

        case 'home':
          // Informs the update service that this has been checked
          this.update.checkedHomePosts(Date.now());

          // Sets page query load more or refresh posts
          //  Pull to refresh or update service calls.
          if (isLoadingMore === false) {
            this.homePostList = new Array<PostModel>();
            this.homePostQueries['page'] = '1';
          } 
          //  Infinite scroll calls
          else if (isLoadingMore === true) {
            this.homePostQueries['page'] = Number(this.homePostQueries['page']) + 1 + '';
          } 
          //  Switching segment controller calls
          else {
            if (this.homePostList.length === 0) {
              this.homePostQueries['page'] = '1';
            }     
          }
          
          // Perform the request to the api service
          this.api.getPostList(false, this.homePostQueries).subscribe(
            postList => {
            this.homePostList = this.homePostList.concat(postList);     
          },
          err => {
            console.log('Error ' + err +  ' - On User Data Request.');
          },
          () => resolve());
        break;

        case 'queue':
          if (this.api.isLogged()){
            // Informs the update service that this has been checked
            this.update.checkedHomePosts(Date.now());

            // Sets page query load more or refresh posts
            //  Pull to refresh or update service calls.
            if (isLoadingMore === false) {
              this.queuePostList = new Array<PostModel>();
              this.queuePostQueries['page'] = '1';
            } 
            //  Infinite scroll calls
            else if (isLoadingMore === true) {
              this.queuePostQueries['page'] = Number(this.queuePostQueries['page']) + 1 + '';
            } 
            //  Switching segment controller calls
            else {
              if (this.queuePostList.length === 0) {
                this.queuePostQueries['page'] = '1';
              }     
            }

            // Perform the request to the api service
            this.api.getPostList(true, this.queuePostQueries).subscribe(
              postList => {
              this.queuePostList = postList;
            },
            err => {
              console.log('Error ' + err +  ' - On User Data Request.');
            },
            () => resolve());
          } else {
            this.authentication.userLogged.subscribe(value => {
              if (value === true) {
                this.loadPosts('queue', isLoadingMore);
              }
            });
          }
        break;
        
        case 'following':
          if (this.api.isLogged()){
            // Informs the update service that this has been checked
            this.update.checkedFollowingPosts(Date.now());

            // Sets page query load more or refresh posts
            //  Pull to refresh or update service calls.
            if (isLoadingMore === false) {
              this.followingPostList = new Array<PostModel>();
              this.followingPostQueries['page'] = '1';
            } 
            //  Infinite scroll calls
            else if (isLoadingMore === true) {
              this.followingPostQueries['page'] = Number(this.followingPostQueries['page']) + 1 + '';
            } 
            //  Switching segment controller calls
            else {
              if (this.followingPostList.length === 0) {
                this.followingPostQueries['page'] = '1';
              }     
            }

            // Perform the request to the api service
            this.api.getPostList(true, this.followingPostQueries).subscribe(
              postList => {
              this.followingPostList = postList;
            },
            err => {
              console.log('Error ' + err +  ' - On User Data Request.');
            },
            () => resolve());
          } else {
            this.authentication.userLogged.subscribe(value => {
              if (value === true) {
                this.loadPosts('queue', isLoadingMore);
              }
            });
          }
        break;
      }

    });
 
  }

  doRefresh(refresher) {
    this.loadPosts(this.postsView, false).then(() => refresher.complete());
  }

  doInfinite(): Promise<any> {
    return new Promise((resolve) => {
      this.loadPosts(this.postsView, true).then(() => resolve());
    });
  }

}
