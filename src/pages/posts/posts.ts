import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { ApiProvider } from './../../providers/api/api';
import { UpdateProvider } from './../../providers/update/update';

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {
  postsView: string = 'home';

  homePostList: Array<any> = new Array<any>();
  queuePostList: Array<any> = new Array<any>();
  followingPostList: Array<any> = new Array<any>();

  homePostQueries: { [query: string]: String } = {};
  queuePostQueries: { [query: string]: String } = {'status': 'voting-queue'}
  followingPostQueries: { [query: string]: String } = {};

  noMoreResultsOnHome: boolean = false;
  noMoreResultsOnQueue: boolean = false;
  noMoreResultsOnFollowing: boolean = false;
  noMoreResults: boolean = false;

  showSpinner = false;
  isUserLogged: boolean = false;

  unreadNotifications: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: ApiProvider,
              public authentication: AuthenticationProvider,
              public update: UpdateProvider) {

    this.isUserLogged = this.api.isLogged();
    this.authentication.userLogged.subscribe(value => {
      if (value === true) {
        this.isUserLogged = this.api.isLogged();
        if (this.postsView !== 'home') {
          this.loadPosts(this.postsView, false);
        }
      }
    });
  }

  ionViewDidLoad() {
    
    this.showSpinner = true;
    this.loadPosts(this.postsView, false);

    // Uses update service to re-load after a time period without loading.
    this.update.homePostsOutdated.subscribe(() => {
      if (this.postsView === 'home') {
        this.showSpinner = true;
        this.loadPosts(this.postsView, false);
      }
    });
    this.update.queuePostsOutdated.subscribe(() => {
      if (this.postsView === 'queue') {
        this.showSpinner = true;
        this.loadPosts(this.postsView, false);
      }
    });
    this.update.followingPostsOutdated.subscribe(() => {
      if (this.postsView === 'following') {
        this.showSpinner = true;
        this.loadPosts(this.postsView, false);
      }
    });

  }

  ionViewWillEnter(){
    this.api.getUnreadNotificationsNumber().subscribe(
      response => this.unreadNotifications = response,
      err => console.log('Error ' + err +  ' - On Getting Number of Unread Notifications.')
    );
  }

  goToPostPage(id: number) {
    this.navCtrl.push('PostPage', {'postId': id, 'returnFromPostFunction': this.returnFromPostPage });
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
            this.homePostList = new Array<any>();
            this.homePostQueries['page'] = '1';
          } 
          //  Infinite scroll calls
          else if (isLoadingMore === true) {
            this.homePostQueries['page'] = Number(this.homePostQueries['page']) + 1 + '';
          } 
          //  Switching segment controller calls
          else {
            if (this.homePostList.length === 0) {
              this.showSpinner = true;
              this.homePostQueries['page'] = '1';
            }     
          }
          
          // Perform the request to the api service
          this.api.getPostList(this.api.isLogged(), this.homePostQueries).subscribe(
            postList => {
            this.homePostList = this.homePostList.concat(postList);
            console.log(this.homePostList);
            console.log(this.homePostList[0]['_embedded']['author'][0]);
            this.noMoreResultsOnHome = false;     
          },
          err => {
            if (err === 400) {
              this.noMoreResultsOnHome = true;
            }
            console.log('Error ' + err +  ' - On User Data Request.');
          },
          () => { this.showSpinner = false; resolve() });
        break;

        case 'queue':
          if (this.api.isLogged()){
            // Informs the update service that this has been checked
            this.update.checkedHomePosts(Date.now());

            // Sets page query load more or refresh posts
            //  Pull to refresh or update service calls.
            if (isLoadingMore === false) {
              this.queuePostList = new Array<any>();
              this.queuePostQueries['page'] = '1';
            } 
            //  Infinite scroll calls
            else if (isLoadingMore === true) {
              this.queuePostQueries['page'] = Number(this.queuePostQueries['page']) + 1 + '';
            } 
            //  Switching segment controller calls
            else {
              if (this.queuePostList.length === 0) {
                this.showSpinner = true;
                this.queuePostQueries['page'] = '1';
              }     
            }
            // Perform the request to the api service
            this.api.getPostList(true, this.queuePostQueries).subscribe(
              postList => {
              this.queuePostList = this.queuePostList.concat(postList);
              this.noMoreResultsOnQueue = false;
            },
            err => {
              if (err === 400) {
                this.noMoreResultsOnQueue = true;
              }
              console.log('Error ' + err +  ' - On User Data Request.');
            },
            () => { this.showSpinner = false; resolve() });
          } else {
            this.authentication.userLogged.subscribe(value => {
              if (value === true) {
                this.isUserLogged = this.api.isLogged();
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
              this.followingPostList = new Array<any>();
              this.followingPostQueries['page'] = '1';
            } 
            //  Infinite scroll calls
            else if (isLoadingMore === true) {
              this.followingPostQueries['page'] = Number(this.followingPostQueries['page']) + 1 + '';
            } 
            //  Switching segment controller calls
            else {
              if (this.followingPostList.length === 0) {
                this.showSpinner = true;
                this.followingPostQueries['page'] = '1';
              }     
            }
            // Adds array of following posts to query
            if (this.api.followingUsers.length > 0) {

              this.followingPostQueries['author'] = String(this.api.followingUsers.join(','));

              // Perform the request to the api service
              this.api.getPostList(true, this.followingPostQueries).subscribe(
                postList => {
                this.followingPostList = this.followingPostList.concat(postList);
                this.noMoreResultsOnFollowing = false;
              },
              err => {
                if (err === 400) {
                  this.noMoreResultsOnFollowing = true;
                }
                console.log('Error ' + err +  ' - On User Data Request.');
              },
              () => { this.showSpinner = false; resolve() });
            } else {
              this.authentication.userLogged.subscribe(value => {
                if (value === true) {
                  this.isUserLogged = true;
                  this.loadPosts('queue', isLoadingMore);
                }
              });
            }
          }
        break;
      }

    });
 
  }

  doRefresh(refresher) {
    this.showSpinner = false;
    this.loadPosts(this.postsView, false).then(() => refresher.complete());
  }

  doInfinite(): Promise<any> {
    return new Promise((resolve) => {
      this.loadPosts(this.postsView, true).then(() => resolve());
    });
  }

  returnFromPostPage = (_params) => {
    return new Promise((resolve, reject) => {
      console.log(_params);

      if (_params !== null) {
        for(let post of this.homePostList) {
          if (post['id'] == _params.id) {
            post['comment_count'] = _params.commentCount;
            post['total_votes'] = _params.totalVotes;
          }
        }
        for(let post of this.queuePostList) {
          if (post['id'] == _params.id) {
            post['comment_count'] = _params.commentCount;
            post['total_votes'] = _params.totalVotes;
          }
        }
        for(let post of this.followingPostList) {
          if (post['id'] == _params.id) {
            post['comment_count'] = _params.commentCount;
            post['total_votes'] = _params.totalVotes;
          }
        }
      }
      resolve();
    });
  }

}
