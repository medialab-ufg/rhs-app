import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { EventEmitter } from '@angular/core';

import { SettingsProvider } from './../settings/settings';

import oauthSignature from 'oauth-signature';

@Injectable()
export class AuthenticationProvider {

  public userLogged = new EventEmitter();

  constructor(public http: Http,
              public settings: SettingsProvider) { }

  // Obtain temporary token credentials
  getTemporaryCredentials():
    Observable<{oauthCallbackConfirmed: string, oauthToken: string, oauthTokenSecret: string}> {

      let parameters = {
        oauth_consumer_key: this.settings.consumerKey,
        oauth_nonce: this.generateNonce(),
        oauth_timestamp: new String(new Date().getTime()).substr(0,10),
        oauth_signature_method: 'HMAC-SHA1',
        oauth_version: '1.0',
        oauth_callback: this.settings.callbackURL 
      };

      let signature = oauthSignature.generate('POST', this.settings.apiURL + 'oauth1/request', parameters, this.settings.consumerSecret);

      let headers = new Headers();
      headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + parameters.oauth_timestamp + '",oauth_nonce="' + parameters.oauth_nonce + '",oauth_version="1.0",oauth_signature="' + signature + '",oauth_callback="' + this.settings.callbackURL + '"');
  
    return this.http.post(this.settings.apiURL + 'oauth1/request', {}, { headers: headers })
      .map((res: Response) => {
        
        let temporaryCredentials = this.queryToObject(res['_body']);

        return { 
          oauthCallbackConfirmed: temporaryCredentials.oauth_callback_confirmed, 
          oauthToken: temporaryCredentials.oauth_token, 
          oauthTokenSecret: temporaryCredentials.oauth_token_secret 
        };
      })
      .catch((error: any) => this.handleError(error));
   }

  // Obtain final token credentials
  getAccessCredentials(oauthToken: string, oauthTokenSecret: string, oauthVerifier: string):
    Observable<{oauthToken: string, oauthTokenSecret: string}> {

      let parameters = {
        oauth_verifier: oauthVerifier,
        oauth_consumer_key: this.settings.consumerKey,
        oauth_token: oauthToken,
        oauth_nonce: this.generateNonce(),
        oauth_timestamp: new String(new Date().getTime()).substr(0,10),
        oauth_signature_method: 'HMAC-SHA1',
        oauth_version: '1.0' 
      };

      let signature = oauthSignature.generate('GET', this.settings.apiURL + 'oauth1/access', parameters, this.settings.consumerSecret, oauthTokenSecret);

      let headers = new Headers();
      headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + 
      '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + parameters.oauth_timestamp + 
      '",oauth_nonce="' + parameters.oauth_nonce + '",oauth_version="1.0",oauth_signature="' + signature + 
      '",oauth_token="' + oauthToken + '"');
console.log(this.settings.pushDeviceId);
    return this.http.get(this.settings.apiURL + 'oauth1/access?oauth_verifier=' + oauthVerifier, {headers: headers})
      .map((res: Response) => {
        
        let finalCredentials = this.queryToObject(res['_body']);

        return { 
          oauthToken: finalCredentials.oauth_token, 
          oauthTokenSecret: finalCredentials.oauth_token_secret 
        };
      })
      .catch((error: any) => this.handleError(error));
  }

  // ==== UTILITIES  ======================================================================
  // Redirects errors in case of failed requests
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.status);
  }

  // Converts query string to object
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
