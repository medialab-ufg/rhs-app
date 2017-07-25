import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {

  // Wordpress settings provided by Authentication Service
  private tokenKey: string = null;
  private tokenSecret: string = null;
  
  private logged: boolean = false;

  constructor(public http: Http) {
  }

  getTokenKey() {
    return this.tokenKey;
  }

  getTokenSecret() {
    return this.tokenSecret;
  }

  setTokenKey(tokenKey: string) {
    this.tokenKey = tokenKey;
  }

  setTokenSecret(tokenSecret: string) {
    this.tokenSecret = tokenSecret;
  }

  setLogged(value: boolean) {
    this.logged = value;
  }

  isLogged() {
    return this.logged;
  }

}
