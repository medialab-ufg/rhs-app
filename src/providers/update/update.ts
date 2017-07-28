import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UpdateProvider {

  private maxOutdatePeriod: number = 300000; // 5 minutos

  private timerHomePosts;
  private timerQueuePosts;
  private timerFollowingPosts;
  
  public homePostsOutdated = new EventEmitter();
  public queuePostsOutdated = new EventEmitter();
  public followingPostsOutdated = new EventEmitter();

  constructor() { }

  checkedHomePosts(timestamp: number) {

    clearInterval(this.timerHomePosts);

    this.timerHomePosts = setInterval(()=> {
      if (Date.now() - timestamp > this.maxOutdatePeriod ) {
        this.homePostsOutdated.emit();
      }
    }, this.maxOutdatePeriod);

  }

  checkedQueuePosts(timestamp: number) {

    clearInterval(this.timerQueuePosts);
    
    this.timerQueuePosts = setInterval(()=> {
      if (Date.now() - timestamp > this.maxOutdatePeriod ) {
        this.queuePostsOutdated.emit();
      }
    }, this.maxOutdatePeriod);

  }

  checkedFollowingPosts(timestamp: number) {

    clearInterval(this.timerFollowingPosts);
    
    this.timerFollowingPosts = setInterval(()=> {
      if (Date.now() - timestamp > this.maxOutdatePeriod ) {
        this.followingPostsOutdated.emit();
      }
    }, this.maxOutdatePeriod);

  }

}
