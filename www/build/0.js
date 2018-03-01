webpackJsonp([0],{

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_inner_html_notification_inner_html_notification__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_inner_html_image_inner_html_image__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_information_information_module__ = __webpack_require__(633);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NotificationsPageModule = (function () {
    function NotificationsPageModule() {
    }
    return NotificationsPageModule;
}());
NotificationsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */], __WEBPACK_IMPORTED_MODULE_3__pipes_inner_html_notification_inner_html_notification__["a" /* InnerHtmlNotificationPipe */], __WEBPACK_IMPORTED_MODULE_4__pipes_inner_html_image_inner_html_image__["a" /* InnerHtmlImagePipe */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]), __WEBPACK_IMPORTED_MODULE_5__components_information_information_module__["a" /* InformationComponentModule */]],
    })
], NotificationsPageModule);

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information__ = __webpack_require__(634);
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

/***/ 634:
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
        selector: 'information',template:/*ion-inline-start:"/home/orpheus/rhs-app/src/components/information/information.html"*/'<div text-center class="slide-in-animate">\n  <img src="./assets/logo-rhs.svg">\n  <h2>{{ message }}</h2>\n  <h5>{{ detail }}</h5>\n</div>\n'/*ion-inline-end:"/home/orpheus/rhs-app/src/components/information/information.html"*/
    }),
    __metadata("design:paramtypes", [])
], InformationComponent);

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authentication_authentication__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase_analytics__ = __webpack_require__(141);
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





var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams, api, authentication, analytics) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.authentication = authentication;
        this.analytics = analytics;
        this.notifications = new Array();
        this.queries = {};
        this.isUserLogged = false;
        this.noMoreResults = false;
        this.isLoadingMore = false;
        this.showSpinner = false;
        this.loadingFromRefresher = false;
        this.notifications = new Array();
        this.authentication.userLogged.subscribe(function (value) {
            if (value === true) {
                _this.isUserLogged = _this.api.isLogged();
                _this.loadNotifications(false);
            }
        });
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        this.isUserLogged = this.api.isLogged();
        if (this.isUserLogged === true) {
            this.loadNotifications(false);
        }
        this.api.markNotificationsAsRead().subscribe(function (response) { return console.log('Notifications marked as read for user ' + response); }, function (err) { return console.log('Error ' + err + ' - On Notifications Data Request.'); });
    };
    NotificationsPage.prototype.ionViewDidEnter = function () {
        // Tells analytics that user accessed this screen.
        this.analytics.setCurrentScreen("Notifications")
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
    };
    NotificationsPage.prototype.loadNotifications = function (isLoadingMore) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.showSpinner = true;
            if (isLoadingMore === false) {
                _this.notifications = new Array();
                _this.queries['page'] = '1';
            }
            else if (isLoadingMore === true) {
                _this.showSpinner = false;
                _this.queries['page'] = Number(_this.queries['page']) + 1 + '';
            }
            _this.api.getNotificationList(true, _this.queries['page']).subscribe(function (notificationList) {
                _this.notifications = _this.notifications.concat(notificationList);
                _this.noMoreResults = false;
                console.log(_this.notifications);
                if (notificationList.length == 0) {
                    _this.noMoreResults = true;
                }
            }, function (err) {
                if (err === 400) {
                    _this.noMoreResults = true;
                }
                console.log('Error ' + err + ' - On Notifications Data Request.');
            }, function () { _this.showSpinner = false; _this.loadingFromRefresher = false; resolve(); });
        });
    };
    NotificationsPage.prototype.goToNotificationContent = function (index) {
        if (this.notifications[index]['type'] == 'comments_in_post') {
            this.navCtrl.push('CommentPage', { 'commentId': this.notifications[index]['object_id'] });
        }
        else if (this.notifications[index]['type'] == 'new_community_post' ||
            this.notifications[index]['type'] == 'post_followed' ||
            this.notifications[index]['type'] == 'post_promoted' ||
            this.notifications[index]['type'] == 'replied_ticket' ||
            this.notifications[index]['type'] == 'new_post_from_user') {
            this.navCtrl.push('PostPage', { 'postId': this.notifications[index]['object_id'] });
        }
        else if (this.notifications[index]['type'] == 'user_follow_author') {
            this.navCtrl.push('UserPage', { 'userId': this.notifications[index]['user_id'] });
        }
    };
    NotificationsPage.prototype.doRefresh = function (refresher) {
        this.loadingFromRefresher = true;
        this.loadNotifications(false).then(function () { return refresher.complete(); });
    };
    NotificationsPage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.loadNotifications(true).then(function () { return resolve(); });
        });
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"/home/orpheus/rhs-app/src/pages/notifications/notifications.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Notificações</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div *ngIf="!isUserLogged">\n    <information [message]="\'Somente para usuários da RHS\'" [detail]="\'É preciso estar logado para acessar essa sessão.\'"></information>\n  </div>\n\n  <div *ngIf="isUserLogged">\n\n    <ion-refresher pullMin="100" \n                    (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content\n        pullingText="Puxe e solte para atualizar."\n        refreshingText="Carregando dados...">\n      </ion-refresher-content>\n    </ion-refresher>\n\n    <div *ngIf="!showSpinner && notifications.length == 0">\n      <information [message]="\'Nenhuma notificação.\'"></information>\n    </div>\n\n    <div *ngIf="showSpinner && !isLoadingMore && !loadingFromRefresher"><ion-spinner class="center-spinner"></ion-spinner></div>\n    <div *ngIf="!showSpinner && notifications.length > 0">\n      <div *ngFor="let notification of notifications; let i = index">\n      <ion-item *ngIf="notification[\'type\'] == \'new_post_from_user\' || notification[\'type\'] == \'comments_in_post\' || notification[\'type\'] == \'user_follow_author\'" (click)="goToNotificationContent(i)">\n        <ion-avatar item-start [innerHtml]="notification[\'image\']"> \n        </ion-avatar>\n        <h2 color="secondary" text-wrap [innerHtml]="notification[\'text\'] | innerHtmlNotification"></h2>\n        <p>{{ notification[\'datetime\'].split(" ")[0] | date: \'dd/MM/yyyy\' }}</p>\n      </ion-item>\n      <ion-item *ngIf="notification[\'type\'] != \'comments_in_post\' && notification[\'type\'] != \'user_follow_author\' && notification[\'type\'] != \'new_post_from_user\'" (click)="goToNotificationContent(i)">\n        <ion-thumbnail item-start  [innerHtml]="notification[\'image\']"> \n        </ion-thumbnail>\n        <h2 color="secondary"  text-wrap  [innerHtml]="notification[\'text\'] | innerHtmlNotification">></h2>\n        <p>{{ notification[\'datetime\'].split(" ")[0] | date: \'dd/MM/yyyy\' }}</p>\n      </ion-item>\n      </div>\n      <ion-item-divider *ngIf="noMoreResults">\n        Não foram encontradas mais notificações.\n      </ion-item-divider>\n    </div>\n\n    <ion-infinite-scroll [enabled]="!noMoreResults" (ionInfinite)="$event.waitFor(doInfinite())">\n      <ion-infinite-scroll-content\n      loadingText="Buscando mais notificações...">\n    </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/orpheus/rhs-app/src/pages/notifications/notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_0__providers_authentication_authentication__["a" /* AuthenticationProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnerHtmlNotificationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InnerHtmlNotificationPipe = (function () {
    //private aTagPattern: RegExp = new RegExp(/<a[\s]+([^>]+)>((?:.(?!\<\/a\>))*.)<\/a>/g);
    //private contentPattern: RegExp = new RegExp(/<a>(.*?)<\/a>/g);
    function InnerHtmlNotificationPipe(dom) {
        this.dom = dom;
    }
    InnerHtmlNotificationPipe.prototype.transform = function (value) {
        //console.log(value);
        //console.log(value.match(this.aTagPattern));
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /*
        // Converts to a tag object
        let divTagHtml = document.createElement('div');
        divTagHtml.innerHTML = aTagStr;
        let aTagHtml = divTagHtml.firstChild;
  
        // Gets ID from a tag
        aTagHtml.attributes.removeNamedItem('href');
        */
        //console.log(value);
        return this.dom.bypassSecurityTrustHtml(value);
    };
    return InnerHtmlNotificationPipe;
}());
InnerHtmlNotificationPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'innerHtmlNotification',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], InnerHtmlNotificationPipe);

//# sourceMappingURL=inner-html-notification.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnerHtmlImagePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InnerHtmlImagePipe = (function () {
    function InnerHtmlImagePipe(dom) {
        this.dom = dom;
        this.imgTagPattern = new RegExp(/<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/g);
    }
    InnerHtmlImagePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log(value.match(this.imgTagPattern));
        if (value.match(this.imgTagPattern)) {
            value = value.match(this.imgTagPattern)[0];
        }
        return this.dom.bypassSecurityTrustHtml(value);
    };
    return InnerHtmlImagePipe;
}());
InnerHtmlImagePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'innerHtmlImage',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], InnerHtmlImagePipe);

//# sourceMappingURL=inner-html-image.js.map

/***/ })

});
//# sourceMappingURL=0.js.map