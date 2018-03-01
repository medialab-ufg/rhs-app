webpackJsonp([8],{

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(641);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */])],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase_analytics__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_api__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authentication, storage, inAppBrowser, settings, api, analytics) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authentication = authentication;
        this.storage = storage;
        this.inAppBrowser = inAppBrowser;
        this.settings = settings;
        this.api = api;
        this.analytics = analytics;
        this.isRegistered = false;
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        // Tells analytics that user accessed this screen.
        this.analytics.setCurrentScreen("Login")
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authentication.getTemporaryCredentials().subscribe(function (temporaryCredentials) {
            if (temporaryCredentials.oauthToken !== null && temporaryCredentials.oauthTokenSecret !== null) {
                var browser_1 = _this.inAppBrowser.create(_this.settings.apiURL + '/oauth1/authorize?oauth_token=' + temporaryCredentials.oauthToken + '&oauth_token_secret=' + temporaryCredentials.oauthTokenSecret + '&device=mobile-app', '_blank', { zoom: 'no', location: 'no', toolbarposition: 'top' });
                browser_1.on("loadstop").subscribe(function (event) {
                    // The 3 lines above only work for Android 4.4.4 above...
                    //let url = new URL(event.url);
                    //let oauth_verifier = url.searchParams.get('oauth_verifier');
                    //let oauth_token = url.searchParams.get('oauth_token'); 
                    // So we use a custom function
                    var url = event.url;
                    var oauth_verifier = _this.getParameterByName('oauth_verifier', url);
                    var oauth_token = _this.getParameterByName('oauth_token', url);
                    if (oauth_verifier !== null && oauth_verifier !== undefined) {
                        browser_1.close();
                        _this.authentication.getAccessCredentials(temporaryCredentials.oauthToken, temporaryCredentials.oauthTokenSecret, oauth_verifier).subscribe(function (finalCredentials) {
                            if (finalCredentials.oauthToken !== null && finalCredentials.oauthTokenSecret !== null) {
                                // Saves in local storage, for obtaining on app load.
                                _this.storage.set('oauth_token', { key: finalCredentials.oauthToken, secret: finalCredentials.oauthTokenSecret });
                                _this.storage.set('is_user_logged', true);
                                // Saves in Api Service, for using during requests.
                                _this.api.setLogged(true);
                                _this.api.setTokenKey(finalCredentials.oauthToken);
                                _this.api.setTokenSecret(finalCredentials.oauthTokenSecret);
                                // Informs the subscribed components (as the sidemenu) that use has logged.
                                _this.authentication.userLogged.emit(true);
                                // Sends the push notification ID to server
                                if (_this.settings.pushDeviceId !== '') {
                                    _this.api.sendPushDeviceID(_this.settings.pushDeviceId).subscribe(function (response) {
                                        console.log(response);
                                    }, function (err) {
                                        console.log('Error ' + err + ' - Sending User Device Push ID.');
                                    });
                                }
                                // Return user to home page.
                                _this.navCtrl.setRoot('PostsPage');
                            }
                        }, function (err) {
                            console.log('Error ' + err + ' - Final Credentials Request: ');
                            _this.api.setLogged(false);
                        }, function () { });
                    }
                    else {
                        if (oauth_token === null) {
                            _this.api.setLogged(false);
                        }
                    }
                });
            }
        }, function (err) {
            console.log('Error ' + err + ' - Temporary Credentials Request: ');
            _this.api.setLogged(false);
        }, function () { });
    };
    LoginPage.prototype.register = function () {
        var _this = this;
        var browser = this.inAppBrowser.create(this.settings.apiURL + '/registrar?device=mobile-app', '_blank', { zoom: 'no', location: 'no', toolbarposition: 'top' });
        browser.on("loadstop").subscribe(function (event) {
            var url = event.url;
            // If User enters the website, go back to the App.
            if (url == _this.settings.apiURL || url == _this.settings.apiURL.slice(0, -1)) {
                browser.close();
                _this.isRegistered = true;
            }
        });
    };
    LoginPage.prototype.getParameterByName = function (name, url) {
        url = decodeURIComponent(url);
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/orpheus/rhs-app/src/pages/login/login.html"*/'<ion-header no-border>\n  <ion-navbar color="secondary">\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen padding>\n  <img alt="RHS"  src="./assets/logo-rhs.svg"/>\n  <h3 text-center>Para entrar no app, você será redirecionado para sua página de Login na RHS.</h3>\n  <h5 *ngIf="!isRegistered" text-center>Caso ainda não seja um usuário da RHS, é preciso fazer seu cadastro externamente, para depois logar no app.</h5>\n  <h5 *ngIf="isRegistered" text-center>Você fez seu registro, agora já pode entrar na rede.</h5>\n\n  <ion-buttons position>\n    <!--<a ion-button clear color="primary" href="{{ settings.apiURL + \'registrar\' }}">Me cadastrar</a>--> \n    <button *ngIf="!isRegistered" ion-button clear color="primary" (click)="register()">Me cadastrar</button>  \n    <button ion-button round color="primary" (click)="login()">Fazer Login</button>  \n  </ion-buttons> \n</ion-content>\n'/*ion-inline-end:"/home/orpheus/rhs-app/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__["a" /* AuthenticationProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=8.js.map