webpackJsonp([7],{

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(655);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    return SettingsPageModule;
}());
SettingsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */])],
    })
], SettingsPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase_analytics__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authentication_authentication__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_api__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, alertCtrl, storage, settings, authentication, api, oneSignal, analytics) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.settings = settings;
        this.authentication = authentication;
        this.api = api;
        this.oneSignal = oneSignal;
        this.analytics = analytics;
        this.isUserLogged = false;
        this.articleFontSizeRange = 3;
        this.notificationTypes = new Array();
        this.authentication.userLogged.subscribe(function (value) {
            _this.isUserLogged = value;
            _this.loadDesiredNotificationsList();
        });
    }
    SettingsPage.prototype.ionViewDidEnter = function () {
        // Tells analytics that user accessed this screen.
        /*
          this.analytics.setCurrentScreen("Settings")
          .then((res: any) => console.log(res))
          .catch((error: any) => console.error(error));
         */
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.isUserLogged = this.api.isLogged();
        console.log("DEVICE ID = " + this.settings.pushDeviceId);
        // Loads post font size to settings service.
        this.storage.get('article_font_size').then(function (result) {
            if (_this.settings.postContentFontSizeOptions[result]) {
                _this.articleFontSizeRange = _this.fontSizeToRange(result);
                _this.settings.currentFontSize = result;
            }
        });
        // Load desired notifications from server
        if (this.isUserLogged) {
            this.loadDesiredNotificationsList();
        }
    };
    SettingsPage.prototype.alertLogout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Atenção!',
            subTitle: 'Se você fazer logout, terá apenas uma visão limitada dos posts da rede!',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) { }
                },
                {
                    text: 'Fazer Logout',
                    handler: function (data) {
                        _this.logout();
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.logout = function () {
        this.api.deletePushDeviceID(this.settings.pushDeviceId).subscribe(function (response) {
            console.log(response);
        }, function (err) {
            console.log('Error ' + err + ' - Deleting User Device Push ID.');
        });
        // Clear list of notification settings
        this.settings.desiredNotifications = {};
        this.notificationTypes = new Array();
        // Saves in local storage, for obtaining on app load.
        this.storage.set('oauth_token', null);
        this.storage.set('is_user_logged', false);
        this.storage.set('desired_notifications', null);
        // Saves in Api Service, for using during requests.
        this.api.setLogged(false);
        this.api.setTokenKey(null);
        this.api.setTokenSecret(null);
        // Informs the subscribed components (as the sidemenu) that use has logged.
        this.authentication.userLogged.emit(false);
        this.isUserLogged = false;
    };
    SettingsPage.prototype.goToLoginPage = function () {
        this.navCtrl.push('LoginPage');
    };
    // Related to Desired Notifications Settings ----------------------------------------
    SettingsPage.prototype.loadDesiredNotificationsList = function () {
        var _this = this;
        this.api.getNotificationTypes(false).subscribe(function (response) {
            var types = response['types'];
            // Passes notification types to the settings notifications type list and updates view array
            for (var key in types) {
                if (types.hasOwnProperty(key)) {
                    _this.settings.desiredNotifications[key] = types[key];
                    _this.notificationTypes.push({ key: key, value: types[key] });
                    // If there is not set value to this type (first-run app or new type created) sets it to true
                    if (_this.settings.desiredNotifications[key]['valueBool'] == undefined || _this.settings.desiredNotifications[key]['valueBool'] == undefined) {
                        _this.settings.desiredNotifications[key]['valueBool'] = true;
                        _this.notificationTypes[_this.notificationTypes.length - 1].value['valueBool'] = true;
                    }
                }
            }
            ;
            // Obtains the current OneSignal tags associated to the user from OneSignal
            _this.oneSignal.getTags().then(function (tags) {
                // Updates the values os desired notifications, based on the obtained tags
                for (var key in tags) {
                    if (tags.hasOwnProperty(key)) {
                        for (var _i = 0, _a = _this.notificationTypes; _i < _a.length; _i++) {
                            var notificationType = _a[_i];
                            if ('notf_type_' + notificationType.key == key) {
                                _this.settings.desiredNotifications[notificationType.key]['valueBool'] = (tags[key] == '1' ? true : false);
                            }
                        }
                    }
                    ;
                }
            });
        }, function (err) {
            console.log('Error ' + err + ' - Getting notifications type list.');
        });
    };
    SettingsPage.prototype.toggleDesiredNotification = function (desiredNotification) {
        if (this.settings.desiredNotifications[desiredNotification.key]['valueBool'] === true) {
            this.oneSignal.sendTag(desiredNotification.value['onesginal_tag'], '1');
            this.analytics.logEvent('notification_enabled', { notification_type: this.settings.desiredNotifications[desiredNotification.key]['onesginal_tag'] })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
        }
        else {
            this.oneSignal.sendTag(desiredNotification.value['onesginal_tag'], '0');
            this.analytics.logEvent('notification_disabled', { notification_type: this.settings.desiredNotifications[desiredNotification.key]['onesginal_tag'] })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
        }
        this.storage.set('desired_notifications', this.settings.desiredNotifications);
    };
    // Related to Font Size Settings ----------------------------------------------------
    SettingsPage.prototype.translateFontSize = function (fontSize) {
        switch (fontSize) {
            case 'extra-small':
                return 'muito pequeno';
            case 'small':
                return 'pequeno';
            case 'medium':
                return 'médio';
            case 'large':
                return 'grande';
            case 'extra-large':
                return 'muito grande';
            default:
                return 'médio';
        }
    };
    SettingsPage.prototype.changePostFontSize = function () {
        this.settings.currentFontSize = this.rangeToFontSize(this.articleFontSizeRange);
        this.storage.set('article_font_size', this.settings.currentFontSize);
        this.analytics.logEvent('font_size_change', { new_font_size: this.settings.currentFontSize })
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
    };
    SettingsPage.prototype.rangeToFontSize = function (range) {
        switch (range) {
            case 1:
                return 'extra-small';
            case 2:
                return 'small';
            case 3:
                return 'medium';
            case 4:
                return 'large';
            case 5:
                return 'extra-large';
            default:
                return 'medium';
        }
    };
    SettingsPage.prototype.fontSizeToRange = function (fontSize) {
        switch (fontSize) {
            case 'extra-small':
                return 1;
            case 'small':
                return 2;
            case 'medium':
                return 3;
            case 'large':
                return 4;
            case 'extra-large':
                return 5;
            default:
                return 3;
        }
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/rodrigodeoliveira/code/self/ufg/rhs-app/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Configurações do App</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!--<ion-list-header>\n      Página de Posts\n    </ion-list-header>\n    <ion-item>\n      <ion-label>Tamanho da fonte dos posts (funcional): </ion-label>  \n      <ion-select #select [(ngModel)]="articleFontSize" (ionChange)="changePostFontSize(select.value)">\n        <ion-option [attr.selected]="articleFontSize == \'extra-small\'" value="extra-small">Muito pequeno</ion-option>\n        <ion-option [attr.selected]="articleFontSize == \'small\'" value="small">Pequeno</ion-option>\n        <ion-option [attr.selected]="articleFontSize == \'medium\'" value="medium">Médio</ion-option>\n        <ion-option [attr.selected]="articleFontSize == \'large\'" value="large">Grande</ion-option>\n        <ion-option [attr.selected]="articleFontSize == \'extra-large\'" value="extra-large">Enorme</ion-option>\n      </ion-select>\n    </ion-item>-->\n    <ion-list-header>\n      Tamanho da fonte nos posts: \n      <ion-note item-end [ngStyle]="{ \'font-size\': settings.postContentFontSizeOptions[rangeToFontSize(articleFontSizeRange)] }">\n        {{ translateFontSize(rangeToFontSize(articleFontSizeRange)) }}\n      </ion-note>\n    </ion-list-header>\n    <ion-item>\n      <ion-range  min="1" max="5" snaps="true" [(ngModel)]="articleFontSizeRange" (ionChange)="changePostFontSize()">\n        <ion-label range-left [ngStyle]="{ \'font-size\': settings.postContentFontSizeOptions[\'extra-small\'] }">A</ion-label>\n        <ion-label range-right [ngStyle]="{ \'font-size\': settings.postContentFontSizeOptions[\'extra-large\'] }">A</ion-label>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n  <br>\n  <ion-list>\n    <ion-list-header>\n      Notificações\n      <ion-note item-end *ngIf="!isUserLogged">somente para usuários da RHS.</ion-note>\n      <ion-note item-end *ngIf="isUserLogged">receber para os seguintes casos:</ion-note>\n    </ion-list-header>\n    <div *ngIf="isUserLogged">\n      <ion-item *ngFor="let notificationType of notificationTypes">\n        <ion-label>{{ notificationType[\'value\'][\'short_description\'] }}</ion-label>\n        <ion-toggle [disabled]="!isUserLogged" [(ngModel)]="settings.desiredNotifications[notificationType.key][\'valueBool\']" (ionChange)="toggleDesiredNotification(notificationType)"></ion-toggle>\n      </ion-item>\n    </div>\n\n  </ion-list>\n  <br>\n  <ion-list>\n    <ion-list-header>\n      Login na RHS\n    </ion-list-header>\n    <ion-item *ngIf="isUserLogged">Você está conectado à RHS <button ion-button item-end color="danger" (click)="alertLogout()">SAIR</button></ion-item>\n    <ion-item *ngIf="!isUserLogged">Você não está conectado à RHS <button ion-button item-end color="primary" (click)="goToLoginPage()">ENTRAR</button></ion-item>\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/rodrigodeoliveira/code/self/ufg/rhs-app/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_authentication_authentication__["a" /* AuthenticationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_authentication_authentication__["a" /* AuthenticationProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_api_api__["a" /* ApiProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__["a" /* OneSignal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__["a" /* OneSignal */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]) === "function" && _j || Object])
], SettingsPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=7.js.map