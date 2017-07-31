import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

import { SettingsProvider } from './../settings/settings';
import { UserModel, PostModel } from './../models/models';

import oauthSignature from 'oauth-signature';

@Injectable()
export class ApiProvider {

  // Wordpress settings provided by Authentication Service
  private tokenKey: string = null;
  private tokenSecret: string = null;
  
  private logged: boolean = false;

  JSON: any = JSON;

  constructor(public http: Http,
              public settings: SettingsProvider) {
  }

  // == GETTERS AND SETTERS FOR LOCAL VARIABLES ==========================================
  setTokenKey(tokenKey: string) { this.tokenKey = tokenKey;}

  setTokenSecret(tokenSecret: string) { this.tokenSecret = tokenSecret; }

  setLogged(value: boolean) { this.logged = value; }

  isLogged(): boolean { return this.logged }

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

  // ==== UTILITIES  ======================================================================
  // Trata o casos de falha baseado no código de erro
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
