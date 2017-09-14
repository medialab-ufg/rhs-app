import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {

  // Wordpress settings used by Authentication Service 
  // public apiURL: string = 'http://migracao.redehumanizasus.net/';
  // public callbackURL: string = 'http://migracao.redehumanizasus.net/api-login-callback';
  // public consumerKey: string = 'RN5m3gLFoYrs';
  // public consumerSecret: string = 'KP871aQwuMhbSBX4H7WqBGzW9CwwEoFADwTzQt2pfiY4CQG1';

  // Wordpress settings used by Authentication Service 
  public apiURL: string = 'http://redehumanizasus.net/';
  public callbackURL: string = 'http://redehumanizasus.net/api-login-callback';
  public consumerKey: string = 'UNzAxTFPs2Z7';
  public consumerSecret: string = 'CEb2TiTcqE246oWh5qolUbORvjDHiqKEC2CfsHyOrDGtJPsB';
  
  //public apiURL: string = 'http://rhs.dev.medialab.ufg.br/';
  //public callbackURL: string = 'http://rhs.dev.medialab.ufg.br/api-login-callback';
  //public consumerKey: string = 'pFJYeefHiIEa';
  //public consumerSecret: string = 'CR7qi1Nd1RirJAslDzRCV9lmpxM9gxy74NE5heRK1OlkRDhW';

  // Post Page settings:
  public postContentFontSizeOptions = { 
    'extra-small': '0.8em', 
    'small': '1.0em', 
    'medium': '1.12em', 
    'large': '1.25em', 
    'extra-large': '1.4em' 
  };
  public currentFontSize = 'medium';

  public commentsPerPage = 100; // change later to 20

}
