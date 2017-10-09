import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {

  // Wordpress settings used by Authentication Service 
  // public apiURL: string = 'http://migracao.redehumanizasus.net/';
  // public callbackURL: string = 'http://migracao.redehumanizasus.net/api-login-callback';
  // public consumerKey: string = 'pF74Dog1YVvF';
  // public consumerSecret: string = 'EG3BBp4pFdfYuZvRx2bq1XGFPM4CxyGzF64sKxwujCMaaZ3s';

  // Wordpress settings used by Authentication Service 
  public apiURL: string = 'http://redehumanizasus.net/';
  public callbackURL: string = 'http://redehumanizasus.net/api-login-callback';
  public consumerKey: string = 'UNzAxTFPs2Z7';
  public consumerSecret: string = 'CEb2TiTcqE246oWh5qolUbORvjDHiqKEC2CfsHyOrDGtJPsB';
  
  // public apiURL: string = 'http://10.0.2.15/rhs/';
  // public callbackURL: string = 'http://10.0.2.15/rhs/api-login-callback';
  // public consumerKey: string = 'k18tusWAaBeB';
  // public consumerSecret: string = 'VatrIPO0K1tDNjgeSC0GppzM82M5Ksc0skmg4pu2rI3Nbp5E';

  // Post Page settings
  public postContentFontSizeOptions = { 
    'extra-small': '0.8em', 
    'small': '1.0em', 
    'medium': '1.12em', 
    'large': '1.25em', 
    'extra-large': '1.4em' 
  };
  public currentFontSize = 'medium';
  public commentsPerPage = 20; 

  // OneSignal Push Notification settings
  public oneSignalAppId: string = '2ffdc133-6deb-43a1-8179-b8300e0b0f97';
  public googleFCMProjectNumber: string = '185540114749';
  public pushDeviceId: string = ''; // to be loaded from registration step during app initialization
  public desiredNotifications = {};

}
