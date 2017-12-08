webpackJsonp([6],{

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingPageModule", function() { return FollowingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_information_information_module__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__following__ = __webpack_require__(634);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FollowingPageModule = (function () {
    function FollowingPageModule() {
    }
    return FollowingPageModule;
}());
FollowingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__following__["a" /* FollowingPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__following__["a" /* FollowingPage */]), __WEBPACK_IMPORTED_MODULE_2__components_information_information_module__["a" /* InformationComponentModule */]],
    })
], FollowingPageModule);

//# sourceMappingURL=following.module.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information__ = __webpack_require__(629);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InformationComponentModule = (function () {
    function InformationComponentModule() {
    }
    return InformationComponentModule;
}());
InformationComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__information__["a" /* InformationComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__information__["a" /* InformationComponent */]]
    })
], InformationComponentModule);

//# sourceMappingURL=information.module.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InformationComponent = (function () {
    function InformationComponent() {
    }
    return InformationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('message'),
    __metadata("design:type", String)
], InformationComponent.prototype, "message", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('detail'),
    __metadata("design:type", String)
], InformationComponent.prototype, "detail", void 0);
InformationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'information',template:/*ion-inline-start:"/home/orpheus/Documents/MediaLab/RHS/rhs-app/src/components/information/information.html"*/'<div text-center class="slide-in-animate">\n  <img src="./assets/logo-rhs.svg">\n  <h2>{{ message }}</h2>\n  <h5>{{ detail }}</h5>\n</div>\n'/*ion-inline-end:"/home/orpheus/Documents/MediaLab/RHS/rhs-app/src/components/information/information.html"*/
    }),
    __metadata("design:paramtypes", [])
], InformationComponent);

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase_analytics__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FollowingPage = (function () {
    function FollowingPage(navCtrl, navParams, api, authentication, alertCtrl, toastCtrl, analytics) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.authentication = authentication;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.analytics = analytics;
        this.followingView = 'people';
        this.postList = new Array();
        this.userList = new Array();
        this.postQueries = {};
        this.userQueries = {};
        this.showSpinner = false;
        this.isUserLogged = false;
        this.loadingFromRefresher = false;
        this.noMoreResultsOnPosts = false;
        this.noMoreResultsOnPeople = false;
        this.isUserLogged = this.api.isLogged();
        this.authentication.userLogged.subscribe(function (value) {
            if (value === true) {
                _this.isUserLogged = _this.api.isLogged();
                if (_this.followingView == 'posts') {
                    _this.loadPosts(false);
                }
                else {
                    _this.loadUsers(false);
                }
            }
        });
    }
    FollowingPage.prototype.ionViewDidLoad = function () {
        if (this.api.isLogged() === true) {
            if (this.followingView == 'posts') {
                this.loadPosts(false);
            }
            else {
                this.loadUsers(false);
            }
        }
    };
    FollowingPage.prototype.ionViewDidEnter = function () {
        // Tells analytics that user accessed this screen.
        this.analytics.setCurrentScreen("Following")
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
    };
    FollowingPage.prototype.loadPosts = function (isLoadingMore) { };
    FollowingPage.prototype.loadUsers = function (isLoadingMore) {
        var _this = this;
        this.showSpinner = true;
        return new Promise(function (resolve) {
            //  Pull to refresh or update service calls.
            if (isLoadingMore === false) {
                _this.userList = new Array();
                _this.userQueries['page'] = '1';
            }
            else if (isLoadingMore === true) {
                _this.userQueries['page'] = Number(_this.userQueries['page']) + 1 + '';
            }
            else {
                if (_this.userList.length === 0) {
                    _this.showSpinner = true;
                    _this.userQueries['page'] = '1';
                }
            }
            // Adds array of following posts to query
            if (_this.api.followingUsers.length > 0) {
                var usersIds = String(_this.api.followingUsers.join(','));
                // Perform the request to the api service
                _this.api.getUserList(true, usersIds, _this.userQueries).subscribe(function (userList) {
                    _this.userList = _this.userList.concat(userList);
                    console.log(_this.userList);
                    _this.noMoreResultsOnPeople = false;
                }, function (err) {
                    if (err === 400) {
                        _this.noMoreResultsOnPeople = true;
                    }
                    console.log('Error ' + err + ' - On User Data Request.');
                }, function () { _this.showSpinner = false; _this.loadingFromRefresher = false; resolve(); });
            }
            else {
                _this.showSpinner = false;
                _this.authentication.userLogged.subscribe(function (value) {
                    if (value === true) {
                        _this.isUserLogged = true;
                        _this.loadUsers(isLoadingMore);
                    }
                });
            }
        });
    };
    FollowingPage.prototype.doRefresh = function (refresher) {
        this.loadingFromRefresher = true;
        this.loadUsers(false).then(function () { return refresher.complete(); });
    };
    FollowingPage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.loadUsers(true).then(function () { return resolve(); });
        });
    };
    FollowingPage.prototype.goToUserPage = function (userId) {
        this.navCtrl.push('UserPage', { 'userId': userId });
    };
    FollowingPage.prototype.stopButton = function (event, index) {
        var _this = this;
        event.stopPropagation();
        var prompt = this.alertCtrl.create({
            title: 'Deseja parar de seguir este usuário?',
            message: "Você deixará de receber notificações quando ele publicar um post novo.",
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) { }
                },
                {
                    text: 'Parar',
                    handler: function (data) {
                        _this.unFollowUser(index);
                    }
                }
            ]
        });
        prompt.present();
    };
    FollowingPage.prototype.unFollowUser = function (index) {
        var _this = this;
        this.api.unFollowUser(this.userList[index]['data']['id']).subscribe(function (response) {
            _this.userList.splice(index, 1);
            _this.api.followingUsers.splice(index, 1);
            var unFollowConfirmToast = _this.toastCtrl.create({
                message: 'Você deixou de seguir este usuário',
                duration: 3000
            });
            unFollowConfirmToast.present();
        }, function (err) {
            console.log('Error ' + err + ' on follow user request.');
        });
    };
    return FollowingPage;
}());
FollowingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-following',template:/*ion-inline-start:"/home/orpheus/Documents/MediaLab/RHS/rhs-app/src/pages/following/following.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Seguindo</ion-title>\n  </ion-navbar>\n\n<!--  <ion-toolbar color="primary">\n    <ion-segment [(ngModel)]="followingView" color="secondary">\n      <ion-segment-button value="posts">\n        Posts\n      </ion-segment-button>\n      <ion-segment-button value="people">\n        Pessoas\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>-->\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher pullMin="100" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingText="Puxe e solte para atualizar."\n      refreshingText="Carregando dados...">\n    </ion-refresher-content>\n    </ion-refresher>\n\n <!-- <div [ngSwitch]="followingView">\n   \n    <div *ngSwitchCase="\'posts\'">\n      <information *ngIf="!isUserLogged" [message]="\'Você não está logado na RHS\'" [detail]="\'Use o Menu lateral para entrar na Rede.\'"></information>\n      <div *ngIf="showSpinner"><ion-spinner></ion-spinner></div>\n      <ion-list *ngIf="isUserLogged && followingView == \'posts\'">\n        <div *ngIf="postList.length == 0 && !showSpinner">\n          <information [message]="\'Você ainda não está seguindo nenhum post.\'"></information>\n        </div>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase="\'people\'">-->\n      <information *ngIf="!isUserLogged" [message]="\'Você não está logado na RHS\'" [detail]="\'Use o Menu lateral para entrar na Rede.\'"></information>\n      <div *ngIf="showSpinner && !loadingFromRefresher"><ion-spinner class="center-spinner"></ion-spinner></div>\n      <ion-list *ngIf="isUserLogged && followingView == \'people\'">\n        <div *ngIf="userList.length == 0 && !showSpinner">\n          <information [message]="\'Você ainda não está seguindo nenhum usuário.\'"></information>\n        </div>\n        <div *ngIf="userList.length != 0 && !showSpinner">\n          <ion-item *ngFor="let user of userList; let i = index" (click)="goToUserPage(user[\'data\'][\'id\'])">\n            <ion-avatar item-start>\n              <img src="{{ user[\'data\'][\'avatar_urls\'][\'48\'] }}" >\n            </ion-avatar>\n            <h2 color="secondary">{{ user[\'data\'][\'name\'] }}</h2>\n            <button ion-button item-end color="danger" (click)="stopButton($event, i)">Parar</button>\n          </ion-item>\n          \n        </div>\n      </ion-list>\n\n      <ion-infinite-scroll [enabled]="followingView === \'posts\' ? !noMoreResultsOnHome : !noMoreResultsOnPeople" (ionInfinite)="$event.waitFor(doInfinite())">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      \n  <!--  </div>\n\n  </div>-->\n\n</ion-content>\n'/*ion-inline-end:"/home/orpheus/Documents/MediaLab/RHS/rhs-app/src/pages/following/following.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__["a" /* AuthenticationProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]])
], FollowingPage);

//# sourceMappingURL=following.js.map

/***/ })

});
//# sourceMappingURL=6.js.map