import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {

  // Wordpress settings used by Authentication Service 
  public apiURL: string = 'http://rhs.dev.medialab.ufg.br/';
  public callbackURL: string = 'http://rhs.dev.medialab.ufg.br/api-login-callback';
  public consumerSecret: string = 'AwHkgMLqvvkA5IqIvJGyTqYlqxjALt0brjLmGFOK0WlTitGg';
  public consumerKey: string = 'pFJYeefHiIEa';

  // Post Page settings:
  public postContentFontSizeOptions = { 
    'extra-small': '0.8em', 
    'small': '1.0em', 
    'medium': '1.2em', 
    'large': '1.4em', 
    'extra-large': '1.6em' 
  };
  public currentFontSize = 'medium';

  public commentsPerPage = 100; // change later to 20

}
