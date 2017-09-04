import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

import { SettingsProvider } from './../settings/settings';
import { UserModel, PostModel, CommentModel, TagModel, CategoryModel } from './../models/models';

import oauthSignature from 'oauth-signature';

@Injectable()
export class ApiProvider {

  // Wordpress settings provided by Authentication Service
  private tokenKey: string = null;
  private tokenSecret: string = null;
  
  // Status and info provided by Authentication Service
  private logged: boolean = false;
  private userId: number = 0;

  JSON: any = JSON;

  constructor(public http: Http,
              public settings: SettingsProvider) {
  }

  // == GETTERS AND SETTERS FOR LOCAL VARIABLES ==========================================
  setTokenKey(tokenKey: string) { this.tokenKey = tokenKey;}

  setTokenSecret(tokenSecret: string) { this.tokenSecret = tokenSecret; }

  setLogged(value: boolean) { this.logged = value; }

  isLogged(): boolean { return this.logged }

  setUserId(userId: number) { this.userId = userId; }

  // == API REQUESTS ====================================================================
  // Obtain user info
  getUserInfo():
      Observable<UserModel> {

        let queries = {
          oauth_consumer_key: this.settings.consumerKey,
          oauth_token: this.tokenKey,
          oauth_signature_method: 'HMAC-SHA1',
          oauth_timestamp: new String(new Date().getTime()).substr(0,10),
          oauth_nonce: this.generateNonce(),
          oauth_version: '1.0' 
        };

        let signature = oauthSignature.generate('GET', this.settings.apiURL + 'wp-json/wp/v2/users/me', queries, this.settings.consumerSecret, this.tokenSecret);
        let headers = new Headers();
        headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries.oauth_timestamp + '",oauth_nonce="' + queries.oauth_nonce + '",oauth_version="1.0",oauth_signature="' + signature + '"');

    return this.http.get(this.settings.apiURL + 'wp-json/wp/v2/users/me', {headers: headers})
      .map((res: Response) => {
        
        let userInfo = JSON.parse(res['_body']);
        return userInfo;
      })
      .catch((error: any) => this.handleError(error));
  }
  
  // Obtain list of posts
  getPostList(authenticated: boolean, queries: { [query: string]: String } ):
    Observable<Array<PostModel>> {

    // This ensures we receive a response without the whole content of the post
    queries['context'] = 'embed';
    queries['_embed'] = 'true';

    let headers = new Headers();
    let search = this.serializeQueries(queries);

    if (authenticated) {

      queries['oauth_consumer_key'] = this.settings.consumerKey;
      queries['oauth_token'] = this.tokenKey;
      queries['oauth_signature_method'] = 'HMAC-SHA1';
      queries['oauth_timestamp'] = new String(new Date().getTime()).substr(0,10);
      queries['oauth_nonce'] = this.generateNonce();
      queries['oauth_version'] = '1.0'; 

      let signature = oauthSignature.generate('GET', this.settings.apiURL + 'wp-json/wp/v2/posts?' + search.toString(), queries, this.settings.consumerSecret, this.tokenSecret);
      headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
    }
    
    return this.http.get(this.settings.apiURL + 'wp-json/wp/v2/posts?' + search.toString(), {headers: headers})
      .map((res: Response) => {
        
        let postList = JSON.parse(res['_body']);
 
        return postList;
      })
      .catch((error: any) => this.handleError(error));
  }

    
  // Obtain post info
  getPostInfo(postId: number, authenticated: boolean ):
    Observable<PostModel> {

    let headers = new Headers();

    if (authenticated) {

      let queries = {
        oauth_consumer_key: this.settings.consumerKey,
        oauth_token: this.tokenKey,
        oauth_signature_method: 'HMAC-SHA1',
        oauth_timestamp: new String(new Date().getTime()).substr(0,10),
        oauth_nonce: this.generateNonce(),
        oauth_version: '1.0' 
      };

      let signature = oauthSignature.generate('GET', this.settings.apiURL + 'wp-json/wp/v2/posts/' + postId, queries, this.settings.consumerSecret, this.tokenSecret);
      headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
    }
    
    return this.http.get(this.settings.apiURL + 'wp-json/wp/v2/posts/' + postId, {headers: headers})
      .map((res: Response) => {

        let postInfo = JSON.parse(res['_body']);
 
        return postInfo;
      })
      .catch((error: any) => this.handleError(error));
  }

    // Obtain post info
  getAuthorInfo(authorId: number, authenticated: boolean ):
    Observable<UserModel> {

    let headers = new Headers();

    if (authenticated) {

      let queries = {
        oauth_consumer_key: this.settings.consumerKey,
        oauth_token: this.tokenKey,
        oauth_signature_method: 'HMAC-SHA1',
        oauth_timestamp: new String(new Date().getTime()).substr(0,10),
        oauth_nonce: this.generateNonce(),
        oauth_version: '1.0' 
      };

      let signature = oauthSignature.generate('GET', this.settings.apiURL + 'wp-json/wp/v2/users/' + authorId, queries, this.settings.consumerSecret, this.tokenSecret);
      headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
    }
    
    return this.http.get(this.settings.apiURL + 'wp-json/wp/v2/users/' + authorId, {headers: headers})
      .map((res: Response) => {

        let authorInfo = JSON.parse(res['_body']);
 
        return authorInfo;
      })
      .catch((error: any) => this.handleError(error));
  }


  // Obtain list of comments in post
  getPostComments(postId: number, offset: number, authenticated: boolean ):
    Observable<[CommentModel]> {

    let headers = new Headers();

    let queries = new URLSearchParams();
    queries['post'] = postId;
    //queries['post'] = 63578;
    queries['offset'] = '' + offset;
    queries['per_page'] = this.settings.commentsPerPage;

    let search = this.serializeQueries(queries);

    if (authenticated) {

      queries['oauth_consumer_key'] = this.settings.consumerKey;
      queries['oauth_token'] = this.tokenKey;
      queries['oauth_signature_method'] = 'HMAC-SHA1';
      queries['oauth_timestamp'] = new String(new Date().getTime()).substr(0,10);
      queries['oauth_nonce'] = this.generateNonce();
      queries['oauth_version'] = '1.0'; 

      let signature = oauthSignature.generate('GET', this.settings.apiURL + 'wp-json/wp/v2/comments?' + search.toString(), queries, this.settings.consumerSecret, this.tokenSecret);
      headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
    }
    
    return this.http.get(this.settings.apiURL + 'wp-json/wp/v2/comments?' + search.toString(), {headers: headers})
      .map((res: Response) => {

        let commentList = JSON.parse(res['_body']);
 
        return commentList;
      })
      .catch((error: any) => this.handleError(error));
  }

  // Obtain list of tags in post
  getPostTags(postId: number, authenticated: boolean ):
    Observable<[TagModel]> {

    let headers = new Headers();

    let queries = new URLSearchParams();
    queries['post'] = postId;
    let search = this.serializeQueries(queries);

    if (authenticated) {

      queries['oauth_consumer_key'] = this.settings.consumerKey;
      queries['oauth_token'] = this.tokenKey;
      queries['oauth_signature_method'] = 'HMAC-SHA1';
      queries['oauth_timestamp'] = new String(new Date().getTime()).substr(0,10);
      queries['oauth_nonce'] = this.generateNonce();
      queries['oauth_version'] = '1.0'; 

      let signature = oauthSignature.generate('GET', this.settings.apiURL + 'wp-json/wp/v2/tags?' + search.toString(), queries, this.settings.consumerSecret, this.tokenSecret);
      headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
    }
    
    return this.http.get(this.settings.apiURL + 'wp-json/wp/v2/tags?' + search.toString(), {headers: headers})
      .map((res: Response) => {

        let tagList = JSON.parse(res['_body']);
 
        return tagList;
      })
      .catch((error: any) => this.handleError(error));
  }

    // Obtain list of tags in post
  getPostCategories(postId: number, authenticated: boolean ):
    Observable<[CategoryModel]> {

    let headers = new Headers();

    let queries = new URLSearchParams();
    queries['post'] = postId;
    let search = this.serializeQueries(queries);

    if (authenticated) {

      queries['oauth_consumer_key'] = this.settings.consumerKey;
      queries['oauth_token'] = this.tokenKey;
      queries['oauth_signature_method'] = 'HMAC-SHA1';
      queries['oauth_timestamp'] = new String(new Date().getTime()).substr(0,10);
      queries['oauth_nonce'] = this.generateNonce();
      queries['oauth_version'] = '1.0'; 

      let signature = oauthSignature.generate('GET', this.settings.apiURL + 'wp-json/wp/v2/categories?' + search.toString(), queries, this.settings.consumerSecret, this.tokenSecret);
      headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
    }
    
    return this.http.get(this.settings.apiURL + 'wp-json/wp/v2/categories?' + search.toString(), {headers: headers})
      .map((res: Response) => {

        let categoryList = JSON.parse(res['_body']);
 
        return categoryList;
      })
      .catch((error: any) => this.handleError(error));
  }

  commentOnPost(postId: number, commentContent: string, parent: number):
    Observable<CommentModel> {
    
    let headers = new Headers();

    let queries = new URLSearchParams();
    queries['post'] = postId;
    queries['author'] = this.userId;
    queries['content'] = commentContent;
    if (parent !== 0) { queries['parent'] = parent };

    let search = this.serializeQueries(queries);
    queries['oauth_consumer_key'] = this.settings.consumerKey;
    queries['oauth_token'] = this.tokenKey;
    queries['oauth_signature_method'] = 'HMAC-SHA1';
    queries['oauth_timestamp'] = new String(new Date().getTime()).substr(0,10);
    queries['oauth_nonce'] = this.generateNonce();
    queries['oauth_version'] = '1.0'; 

    let signature = oauthSignature.generate('POST', this.settings.apiURL + 'wp-json/wp/v2/comments?' + search.toString(), queries, this.settings.consumerSecret, this.tokenSecret);
    headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
  

    return this.http.post(this.settings.apiURL + 'wp-json/wp/v2/comments?' + search.toString(), {}, {headers: headers})
    .map((res: Response) => {

      let commentResponse = JSON.parse(res['_body']);

      return commentResponse;
    })
    .catch((error: any) => { 
      console.log(error);
      return this.handleError(error);
    }
    );
  }

  voteOnPost(postId: number):
    Observable<any> {

    let headers = new Headers();

    if (this.isLogged()) {   

      let queries = {
        oauth_consumer_key: this.settings.consumerKey,
        oauth_token: this.tokenKey,
        oauth_signature_method: 'HMAC-SHA1',
        oauth_timestamp: new String(new Date().getTime()).substr(0,10),
        oauth_nonce: this.generateNonce(),
        oauth_version: '1.0' 
      };

      let signature = oauthSignature.generate('POST', this.settings.apiURL + 'wp-json/rhs/v1/votes/' + postId, queries, this.settings.consumerSecret, this.tokenSecret);
      headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries.oauth_timestamp + '",oauth_nonce="' + queries.oauth_nonce + '",oauth_version="1.0",oauth_signature="' + signature + '"');
    }
    return this.http.post(this.settings.apiURL + 'wp-json/rhs/v1/votes/' + postId, {}, {headers: headers})
    .map((res: Response) => {

      let voteResponse = JSON.parse(res['_body']);

      return voteResponse;
    })
    .catch((error: any) => { 
      return Observable.throw(JSON.parse(error['_body']));
    }
    );
  }


  // ==== UTILITIES  ======================================================================
  // Fowards error status.
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.status);
  }

  // Converte queries de uma hash de parâmetros em uma URLSearchParam
  private serializeQueries(obj: any): URLSearchParams {
    const params: URLSearchParams = new URLSearchParams();

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            params.set(key, element);
        }
    }

    return params;
  }

  public queryToObject(query: string) {
    return JSON.parse('{"' + decodeURI(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
  }
  
  // Generates radom nonce
  public generateNonce() {
    var text = "";
    let length = 32;
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return btoa(text);
  }

}
