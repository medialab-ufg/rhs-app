webpackJsonp([3],{

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_information_information_module__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_post_card_post_card_module__ = __webpack_require__(630);
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
        declarations: [__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]), __WEBPACK_IMPORTED_MODULE_4__components_post_card_post_card_module__["a" /* PostsCardComponentModule */], __WEBPACK_IMPORTED_MODULE_3__components_information_information_module__["a" /* InformationComponentModule */]],
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

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

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsCardComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_post_card_post_card__ = __webpack_require__(631);
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

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(140);
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
        selector: 'post-card',template:/*ion-inline-start:"/home/orpheus/Documents/MediaLab/RHS/rhs-app/src/components/post-card/post-card.html"*/'<ion-card>   \n  <img  *ngIf="this.post[\'_embedded\'][\'wp:featuredmedia\'] !== undefined" [src]="this.post[\'_embedded\'][\'wp:featuredmedia\'][0][\'source_url\']">\n  <ion-card-header text-wrap [innerHtml]="post[\'title\'][\'rendered\']"></ion-card-header>\n  <ion-card-content *ngIf="post[\'excerpt\'][\'rendered\'] != \'\' && post[\'excerpt\'][\'rendered\'] != null" [innerHtml]="post[\'excerpt\'][\'rendered\']"></ion-card-content>\n  <ion-item color="light">\n    <ion-avatar item-start (click)="goToAuthorPage($event, post[\'_embedded\'][\'author\'][0][\'id\'])">\n      <img src="{{ post[\'_embedded\'][\'author\'][0][\'avatar_urls\'][48] }}">\n    </ion-avatar>\n    <ion-grid>\n      <ion-row align-items-baseline>\n        <ion-col col-8>\n          <h2 (click)="goToAuthorPage($event, post[\'_embedded\'][\'author\'][0][\'id\'])">{{ post[\'_embedded\'][\'author\'][0][\'name\'] }}</h2>\n          <p class="data">{{ post[\'date\'] | date: \'dd/MM/yyyy\' }}</p>\n        </ion-col>\n        <ion-col col-4 class="votos_comentarios">\n          <strong>{{ post[\'total_votes\'] }}</strong> votos<br>\n          <strong>{{ post[\'comment_count\'] }}</strong>{{ post[\'comment_count\'] == 1 ? \' comentário\' : \' comentários\' }}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-card>\n'/*ion-inline-end:"/home/orpheus/Documents/MediaLab/RHS/rhs-app/src/components/post-card/post-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavController */]])
], PostCardComponent);

//# sourceMappingURL=post-card.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase_analytics__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, 
        //public modalCtrl: ModalController,
        alertCtrl, api, analytics) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.analytics = analytics;
        this.isUserLogged = false;
        this.userPostsList = new Array();
        this.postQueries = {};
        this.isLoadingUser = true;
        this.isLoadingUserPosts = true;
        this.noMoreResults = false;
        this.userInfoView = 'posts';
        this.isUserLogged = this.api.isLogged();
        if (this.isUserLogged) {
            this.loadUser();
        }
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        // Tells analytics that user accessed this screen.
        this.analytics.setCurrentScreen("Posts ")
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
    };
    ProfilePage.prototype.loadUser = function () {
        var _this = this;
        this.isLoadingUser = true;
        this.api.getUserInfo().subscribe(function (userInfo) {
            _this.user = userInfo;
            _this.loadUserPosts(false);
        }, function (err) {
            console.log('Error ' + err + ' - On User Data Request.');
        }, function () { return _this.isLoadingUser = false; });
    };
    ProfilePage.prototype.loadUserPosts = function (isLoadingMore) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.postQueries['author'] = String(_this.user['id']);
            _this.postQueries['status'] = 'publish,voting-queue';
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
    ProfilePage.prototype.goToPostPage = function (postId) {
        this.navCtrl.push('PostPage', { 'postId': postId });
    };
    /*
      openEditProfileModal(){
    
        if (this.isUserLogged) {
    
          // Passar um objeto com dados atuais do usuário como segundo parâmetro do modalCtrl.create.
          let profileModal = this.modalCtrl.create('ProfileEditModal');
          profileModal.onDidDismiss(data => {
            // Tratar dados do usuário passados pelo modal.
          });
          profileModal.present();
    
        } else {
          
          let commentAlert = this.alertCtrl.create({
            title: 'Ops... você não está logado!',
            subTitle: 'Entre na RHS para poder editar seu usuário.',
            buttons: ['OK']
          });
          commentAlert.present();
    
        }
      }
    */
    ProfilePage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.loadUserPosts(true).then(function () { return resolve(); });
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/home/orpheus/Documents/MediaLab/RHS/rhs-app/src/pages/profile/profile.html"*/'<ion-header no-border>\n\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Meu Perfil da RHS</ion-title>\n    <!--<ion-buttons end>\n      <button ion-button icon-only (click)="openEditProfileModal()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons>-->\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  \n  <div *ngIf="!isUserLogged">\n    <information [message]="\'Somente para usuários da RHS\'" [detail]="\'É preciso estar logado para acessar essa sessão.\'"></information>\n  </div>\n  <div *ngIf="isUserLogged">\n\n    <div *ngIf="isLoadingUser"><ion-spinner class="center-spinner"></ion-spinner></div>\n    \n    <div *ngIf="!isLoadingUser">\n      <div class="user-info">\n        <img [src]="user[\'avatar_urls\'][96]"> \n        <h2>{{ user[\'name\'] }}</h2>\n        <ion-grid>\n          <ion-row nowrap>\n            <ion-col>\n              {{ user[\'total_posts\'] }}  \n              <!--<ion-icon color="primary" name="document"></ion-icon>-->\n              <br>\n              Posts\n            </ion-col>\n            <ion-col>\n              {{ user[\'total_votes\'] }}  \n              <br>\n              Votos\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <ion-toolbar class="toolbar-rhs" color="primary">\n        <ion-segment [(ngModel)]="userInfoView" color="secondary">\n          <ion-segment-button value="posts">\n            Publicações\n          </ion-segment-button>\n          <ion-segment-button value="personal">\n            Pessoal\n          </ion-segment-button>\n          <ion-segment-button value="interests">\n            Interesses\n          </ion-segment-button>\n        </ion-segment>\n      </ion-toolbar>\n\n      <div [ngSwitch]="userInfoView">\n        \n        <ion-list *ngSwitchCase="\'posts\'">\n          <div *ngIf="isLoadingUserPosts"><ion-spinner class="center-spinner-relative"></ion-spinner></div>\n          <post-card [post-data]="post" *ngFor="let post of userPostsList" (click)="goToPostPage(post[\'id\'])"></post-card>   \n          <div *ngIf="userPostsList.length == 0 && !isLoadingUserPosts">\n            <information [message]="\'Não possui nenhuma publicação.\'"></information>\n          </div>\n          <ion-item-divider *ngIf="noMoreResults">\n            Não foram encontrados mais resultados.  \n          </ion-item-divider>\n        </ion-list>\n\n        <ion-infinite-scroll [enabled]="userInfoView == \'posts\' && !noMoreResults" (ionInfinite)="$event.waitFor(doInfinite())">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n\n        <ion-list *ngSwitchCase="\'personal\'" padding>\n          <ion-item [innerHtml]="user[\'description\'] !== \'\' ? user[\'description\'] : \'Nenhuma descrição fornecida.\'">\n          </ion-item>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'interests\'">\n          <ion-list>\n            <ion-list-header>Sobre</ion-list-header>\n            <ion-item [innerHtml]="user[\'description\'] !== \'\' ? user[\'description\'] : \'Nenhuma informação encontrada.\'">\n            </ion-item>\n            \n            <ion-list-header>Interesses</ion-list-header>\n            <ion-item [innerHtml]="user[\'interst\'] !== \'\' ? user[\'interst\'] : \'Nenhum interesse informado.\'">\n            </ion-item>\n\n            <ion-list-header>Formação</ion-list-header>\n            <ion-item [innerHtml]="user[\'formation\'] !== \'\' ? user[\'formation\'] : \'Nenhuma formação informada.\'">\n            </ion-item>\n          </ion-list>\n        </ion-list>\n\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/orpheus/Documents/MediaLab/RHS/rhs-app/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=3.js.map