webpackJsonp([1],{

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_information_information_module__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_post_card_post_card_module__ = __webpack_require__(641);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */]), __WEBPACK_IMPORTED_MODULE_4__components_post_card_post_card_module__["a" /* PostsCardComponentModule */], __WEBPACK_IMPORTED_MODULE_3__components_information_information_module__["a" /* InformationComponentModule */]],
    })
], ProfilePageModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information__ = __webpack_require__(640);
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

/***/ 640:
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
        selector: 'information',template:/*ion-inline-start:"/Users/rodrigodeoliveira/code/self/ufg/rhs-app/src/components/information/information.html"*/'<div text-center class="slide-in-animate">\n  <img src="./assets/logo-rhs.svg">\n  <h2>{{ message }}</h2>\n  <h5>{{ detail }}</h5>\n</div>\n'/*ion-inline-end:"/Users/rodrigodeoliveira/code/self/ufg/rhs-app/src/components/information/information.html"*/
    }),
    __metadata("design:paramtypes", [])
], InformationComponent);

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsCardComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_post_card_post_card__ = __webpack_require__(642);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostsCardComponentModule = (function () {
    function PostsCardComponentModule() {
    }
    return PostsCardComponentModule;
}());
PostsCardComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__components_post_card_post_card__["a" /* PostCardComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__components_post_card_post_card__["a" /* PostCardComponent */]]
    })
], PostsCardComponentModule);

//# sourceMappingURL=post-card.module.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostCardComponent = (function () {
    function PostCardComponent(api, navCtrl) {
        this.api = api;
        this.navCtrl = navCtrl;
    }
    PostCardComponent.prototype.goToAuthorPage = function (event, userId) {
        event.stopPropagation(); // Avoids the click event to propagate to the card, and then go to post page.
        if (userId == this.api.getUserId()) {
            this.navCtrl.push('ProfilePage');
        }
        else {
            this.navCtrl.push('UserPage', { 'userId': userId });
        }
    };
    return PostCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('post-data'),
    __metadata("design:type", Object)
], PostCardComponent.prototype, "post", void 0);
PostCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'post-card',template:/*ion-inline-start:"/Users/rodrigodeoliveira/code/self/ufg/rhs-app/src/components/post-card/post-card.html"*/'<ion-card>   \n  <img  *ngIf="this.post[\'_embedded\'][\'wp:featuredmedia\'] !== undefined" [src]="this.post[\'_embedded\'][\'wp:featuredmedia\'][0][\'source_url\']">\n  <ion-card-header text-wrap [innerHtml]="post[\'title\'][\'rendered\']"></ion-card-header>\n  <ion-card-content *ngIf="post[\'excerpt\'][\'rendered\'] != \'\' && post[\'excerpt\'][\'rendered\'] != null" [innerHtml]="post[\'excerpt\'][\'rendered\']"></ion-card-content>\n  <ion-item color="light">\n    <ion-avatar item-start (click)="goToAuthorPage($event, post[\'_embedded\'][\'author\'][0][\'id\'])">\n      <img src="{{ post[\'_embedded\'][\'author\'][0][\'avatar_urls\'][48] }}">\n    </ion-avatar>\n    <ion-grid>\n      <ion-row align-items-baseline>\n        <ion-col col-8>\n          <h2 (click)="goToAuthorPage($event, post[\'_embedded\'][\'author\'][0][\'id\'])">{{ post[\'_embedded\'][\'author\'][0][\'name\'] }}</h2>\n          <p class="data">{{ post[\'date\'] | date: \'dd/MM/yyyy\' }}</p>\n        </ion-col>\n        <ion-col col-4 class="votos_comentarios">\n          <strong>{{ post[\'total_votes\'] }}</strong> votos<br>\n          <strong>{{ post[\'comment_count\'] }}</strong>{{ post[\'comment_count\'] == 1 ? \' comentário\' : \' comentários\' }}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-card>\n'/*ion-inline-end:"/Users/rodrigodeoliveira/code/self/ufg/rhs-app/src/components/post-card/post-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */]])
], PostCardComponent);

//# sourceMappingURL=post-card.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase_analytics__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPage = (function () {
    function UserPage(navCtrl, navParams, api, alertCtrl, toastCtrl, analytics) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.analytics = analytics;
        this.userPostsList = new Array();
        this.isFollowing = false;
        this.isProcessingFollow = false;
        this.postQueries = {};
        this.isLoadingUser = true;
        this.isLoadingUserPosts = true;
        this.noMoreResults = false;
        this.userInfoView = 'posts';
        this.userId = this.navParams.get('userId');
        this.loadUser();
    }
    UserPage.prototype.ionViewDidLoad = function () {
        for (var _i = 0, _a = this.api.followingUsers; _i < _a.length; _i++) {
            var followId = _a[_i];
            if (followId == this.userId) {
                this.isFollowing = true;
            }
        }
    };
    UserPage.prototype.ionViewDidEnter = function () {
        // Tells analytics that user accessed this screen.
        this.analytics.setCurrentScreen("User:" + this.userId)
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
    };
    UserPage.prototype.followUser = function () {
        var _this = this;
        this.isProcessingFollow = true;
        this.api.followUser(this.userId).subscribe(function (response) {
            console.log(response);
            _this.isFollowing = true;
            _this.api.followingUsers.push(response.follow_id);
            var followConfirmToast = _this.toastCtrl.create({
                message: 'Agora você está seguindo este usuário :)',
                duration: 3000
            });
            followConfirmToast.present();
            _this.isProcessingFollow = false;
        }, function (err) {
            console.log('Error ' + err + ' on follow user request.');
            _this.isFollowing = false;
            _this.isProcessingFollow = false;
        });
    };
    UserPage.prototype.unFollowUser = function () {
        var _this = this;
        this.isProcessingFollow = true;
        this.api.unFollowUser(this.userId).subscribe(function (response) {
            console.log(response);
            _this.isFollowing = false;
            _this.api.followingUsers.unshift(response.follow_id);
            var unFollowConfirmToast = _this.toastCtrl.create({
                message: 'Você deixou de seguir este usuário',
                duration: 3000
            });
            unFollowConfirmToast.present();
            _this.isProcessingFollow = false;
        }, function (err) {
            console.log('Error ' + err + ' on follow user request.');
            _this.isFollowing = false;
            _this.isProcessingFollow = false;
        });
    };
    UserPage.prototype.loadUser = function () {
        var _this = this;
        this.isLoadingUser = true;
        this.api.getAuthorInfo(this.userId, false).subscribe(function (userInfo) {
            _this.user = userInfo;
            _this.loadUserPosts(false);
        }, function (err) {
            console.log('Error ' + err + ' - On User Data Request.');
        }, function () { return _this.isLoadingUser = false; });
    };
    UserPage.prototype.loadUserPosts = function (isLoadingMore) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.postQueries['author'] = String(_this.user['id']);
            if (_this.api.isLogged()) {
                _this.postQueries['status'] = 'publish,voting-queue';
            }
            if (isLoadingMore === false) {
                _this.userPostsList = new Array();
                _this.postQueries['page'] = '1';
            }
            else if (isLoadingMore === true) {
                _this.postQueries['page'] = Number(_this.postQueries['page']) + 1 + '';
            }
            _this.api.getPostList(_this.api.isLogged(), _this.postQueries).subscribe(function (postList) {
                _this.userPostsList = _this.userPostsList.concat(postList);
                _this.noMoreResults = false;
            }, function (err) {
                if (err === 400) {
                    _this.noMoreResults = true;
                }
                console.log('Error ' + err + ' - On User Posts List Data Request.');
            }, function () { _this.isLoadingUserPosts = false; resolve(); });
        });
    };
    UserPage.prototype.goToPostPage = function (postId) {
        this.navCtrl.push('PostPage', { 'postId': postId });
    };
    UserPage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.loadUserPosts(true).then(function () { return resolve(); });
        });
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/rodrigodeoliveira/code/self/ufg/rhs-app/src/pages/user/user.html"*/'<ion-header no-border>\n\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Participante</ion-title>\n    <ion-buttons end>\n      <button *ngIf="!isFollowing" [disabled]="isProcessingFollow" ion-button (click)="followUser()">\n        Seguir\n      </button>\n      <button *ngIf="isFollowing" [disabled]="isProcessingFollow" ion-button (click)="unFollowUser()">\n        Seguindo\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div *ngIf="isLoadingUser"><ion-spinner class="center-spinner"></ion-spinner></div>\n  \n  <div *ngIf="!isLoadingUser">\n    <div class="user-info">\n      <img [src]="user[\'avatar_urls\'][96]"> \n      <h2>{{ user[\'name\'] }}</h2>\n      <ion-grid>\n        <ion-row nowrap>\n          <ion-col>\n            {{ user[\'total_posts\'] }}  \n            <!--<ion-icon color="primary" name="document"></ion-icon>-->\n            <br>\n            Posts\n          </ion-col>\n          <ion-col>\n            {{ user[\'total_votes\'] }}  \n            <br>\n            Votos\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <ion-toolbar class="toolbar-rhs" color="primary">\n      <ion-segment [(ngModel)]="userInfoView" color="secondary">\n        <ion-segment-button value="posts">\n          Publicações\n        </ion-segment-button>\n        <ion-segment-button value="personal">\n          Pessoal\n        </ion-segment-button>\n        <ion-segment-button value="interests">\n          Interesses\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n\n    <div [ngSwitch]="userInfoView">\n      \n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-md-6 push-md-3 col-sm-8 push-sm-2 col-12 *ngSwitchCase="\'posts\'">\n            <div *ngIf="isLoadingUserPosts"><ion-spinner class="center-spinner-relative"></ion-spinner></div>\n            <post-card [post-data]="post" *ngFor="let post of userPostsList" (click)="goToPostPage(post[\'id\'])"></post-card>   \n            <div *ngIf="userPostsList.length == 0 && !isLoadingUserPosts">\n              <information [message]="\'Não possui nenhuma publicação.\'"></information>\n            </div>\n            <ion-item-divider *ngIf="noMoreResults">\n              Não foram encontrados mais resultados.  \n            </ion-item-divider>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-infinite-scroll [enabled]="userInfoView == \'posts\' && !noMoreResults" (ionInfinite)="$event.waitFor(doInfinite())">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n      <ion-list *ngSwitchCase="\'personal\'" padding>\n        <ion-item [innerHtml]="user[\'description\'] !== \'\' ? user[\'description\'] : \'Nenhuma descrição fornecida.\'">\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'interests\'">\n        <ion-list>\n          <ion-list-header>Sobre</ion-list-header>\n          <ion-item [innerHtml]="user[\'description\'] !== \'\' ? user[\'description\'] : \'Nenhuma informação encontrada.\'">\n          </ion-item>\n          \n          <ion-list-header>Interesses</ion-list-header>\n          <ion-item [innerHtml]="user[\'interest\'] !== \'\' ? user[\'interest\'] : \'Nenhum interesse informado.\'">\n          </ion-item>\n\n          <ion-list-header>Formação</ion-list-header>\n          <ion-item [innerHtml]="user[\'formation\'] !== \'\' ? user[\'formation\'] : \'Nenhuma formação informada.\'">\n          </ion-item>\n        </ion-list>\n      </ion-list>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rodrigodeoliveira/code/self/ufg/rhs-app/src/pages/user/user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ })

});
//# sourceMappingURL=1.js.map