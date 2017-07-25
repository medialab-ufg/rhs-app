import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {

  // Wordpress settings used by Authentication Service 
  public apiURL: string = 'http://rhs.dev.medialab.ufg.br/';
  public callbackURL: string = 'http://rhs.dev.medialab.ufg.br/api-login-callback';
  public consumerSecret: string = 'AwHkgMLqvvkA5IqIvJGyTqYlqxjALt0brjLmGFOK0WlTitGg';
  public consumerKey: string = 'pFJYeefHiIEa';
  //public apiURL = 'http://10.0.1.242/rhs/';
  //public callbackURL = 'http://10.0.1.242/rhs/api-login-callback'; 
  //public consumerKey = 'c6t7gamHNaaj';
  //public consumerSecret = 'mNhK1MsImOJAeobRDE9Zjc7Qz0thc9rqhzxtAjh6snF8nHcK';

}
