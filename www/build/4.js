webpackJsonp([4],{

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPageModule", function() { return PostsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_information_information_module__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_post_card_post_card_module__ = __webpack_require__(635);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PostsPageModule = (function () {
    function PostsPageModule() {
    }
    return PostsPageModule;
}());
PostsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__posts__["a" /* PostsPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__posts__["a" /* PostsPage */]), __WEBPACK_IMPORTED_MODULE_4__components_post_card_post_card_module__["a" /* PostsCardComponentModule */], __WEBPACK_IMPORTED_MODULE_3__components_information_information_module__["a" /* InformationComponentModule */]],
    })
], PostsPageModule);

//# sourceMappingURL=posts.module.js.map

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

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsCardComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_post_card_post_card__ = __webpack_require__(636);
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

/***/ 636:
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
        selector: 'post-card',template:/*ion-inline-start:"/home/orpheus/rhs-app/src/components/post-card/post-card.html"*/'<ion-card>   \n  <img  *ngIf="this.post[\'_embedded\'][\'wp:featuredmedia\'] !== undefined" [src]="this.post[\'_embedded\'][\'wp:featuredmedia\'][0][\'source_url\']">\n  <ion-card-header text-wrap [innerHtml]="post[\'title\'][\'rendered\']"></ion-card-header>\n  <ion-card-content *ngIf="post[\'excerpt\'][\'rendered\'] != \'\' && post[\'excerpt\'][\'rendered\'] != null" [innerHtml]="post[\'excerpt\'][\'rendered\']"></ion-card-content>\n  <ion-item color="light">\n    <ion-avatar item-start (click)="goToAuthorPage($event, post[\'_embedded\'][\'author\'][0][\'id\'])">\n      <img src="{{ post[\'_embedded\'][\'author\'][0][\'avatar_urls\'][48] }}">\n    </ion-avatar>\n    <ion-grid>\n      <ion-row align-items-baseline>\n        <ion-col col-8>\n          <h2 (click)="goToAuthorPage($event, post[\'_embedded\'][\'author\'][0][\'id\'])">{{ post[\'_embedded\'][\'author\'][0][\'name\'] }}</h2>\n          <p class="data">{{ post[\'date\'] | date: \'dd/MM/yyyy\' }}</p>\n        </ion-col>\n        <ion-col col-4 class="votos_comentarios">\n          <strong>{{ post[\'total_votes\'] }}</strong> votos<br>\n          <strong>{{ post[\'comment_count\'] }}</strong>{{ post[\'comment_count\'] == 1 ? \' comentário\' : \' comentários\' }}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-card>\n'/*ion-inline-end:"/home/orpheus/rhs-app/src/components/post-card/post-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavController */]])
], PostCardComponent);

//# sourceMappingURL=post-card.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase_analytics__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_update_update__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostsPage = (function () {
    function PostsPage(navCtrl, navParams, api, authentication, update, platform, analytics) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.authentication = authentication;
        this.update = update;
        this.platform = platform;
        this.analytics = analytics;
        this.postsView = 'home';
        // Results from API calls
        this.homePostList = new Array();
        this.queuePostList = new Array();
        this.followingPostList = new Array();
        // Queris to be passed to API calls
        this.homePostQueries = {};
        this.queuePostQueries = { 'status': 'voting-queue' };
        this.followingPostQueries = {};
        // Flags to controll infinite scroll calls
        this.noMoreResultsOnHome = false;
        this.noMoreResultsOnQueue = false;
        this.noMoreResultsOnFollowing = false;
        // Flag to controll loading spinner
        this.showSpinnerOnHome = false;
        this.showSpinnerOnQueue = false;
        this.showSpinnerOnFollowing = false;
        this.loadingFromRefresher = false;
        this.isUserLogged = false;
        this.returnFromPostPage = function (_params) {
            return new Promise(function (resolve, reject) {
                console.log(_params);
                if (_params !== null) {
                    for (var _i = 0, _a = _this.homePostList; _i < _a.length; _i++) {
                        var post = _a[_i];
                        if (post['id'] == _params.id) {
                            post['comment_count'] = _params.commentCount;
                            post['total_votes'] = _params.totalVotes;
                        }
                    }
                    for (var _b = 0, _c = _this.queuePostList; _b < _c.length; _b++) {
                        var post = _c[_b];
                        if (post['id'] == _params.id) {
                            post['comment_count'] = _params.commentCount;
                            post['total_votes'] = _params.totalVotes;
                        }
                    }
                    for (var _d = 0, _e = _this.followingPostList; _d < _e.length; _d++) {
                        var post = _e[_d];
                        if (post['id'] == _params.id) {
                            post['comment_count'] = _params.commentCount;
                            post['total_votes'] = _params.totalVotes;
                        }
                    }
                }
                resolve();
            });
        };
        this.isUserLogged = this.api.isLogged();
        this.authentication.userLogged.subscribe(function (value) {
            if (value === true) {
                _this.isUserLogged = _this.api.isLogged();
                if (_this.postsView !== 'home') {
                    _this.loadPosts(_this.postsView, false);
                }
            }
        });
    }
    PostsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadPosts(this.postsView, false);
        // Uses update service to re-load after a time period without loading.
        this.update.homePostsOutdated.subscribe(function () {
            if (_this.postsView === 'home') {
                _this.loadPosts(_this.postsView, false);
                _this.getUnreadNotifications();
            }
        });
        this.update.queuePostsOutdated.subscribe(function () {
            if (_this.postsView === 'queue') {
                _this.loadPosts(_this.postsView, false);
                _this.getUnreadNotifications();
            }
        });
        this.update.followingPostsOutdated.subscribe(function () {
            if (_this.postsView === 'following') {
                _this.loadPosts(_this.postsView, false);
                _this.getUnreadNotifications();
            }
        });
    };
    PostsPage.prototype.ionViewWillEnter = function () {
        this.getUnreadNotifications();
        // Tells analytics that user accessed this screen.
        this.analytics.setCurrentScreen("Posts ")
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
    };
    PostsPage.prototype.getUnreadNotifications = function () {
        var _this = this;
        this.api.getUnreadNotificationsNumber().subscribe(function (response) { return _this.unreadNotifications = response; }, function (err) { return console.log('Error ' + err + ' - On Getting Number of Unread Notifications.'); });
    };
    PostsPage.prototype.goToPostPage = function (id) {
        this.navCtrl.push('PostPage', { 'postId': id, 'returnFromPostFunction': this.returnFromPostPage });
    };
    PostsPage.prototype.goToSearchPage = function () {
        this.navCtrl.push('SearchPage');
    };
    PostsPage.prototype.goToNotificationsPage = function () {
        this.navCtrl.push('NotificationsPage');
    };
    PostsPage.prototype.changeSegment = function (postView) {
        this.postsView = postView;
        this.list.scrollToTop();
        this.loadPosts(postView, null);
    };
    PostsPage.prototype.loadPosts = function (postView, isLoadingMore) {
        var _this = this;
        this.postsView = postView;
        return new Promise(function (resolve) {
            switch (_this.postsView) {
                case 'home':
                    _this.showSpinnerOnHome = true;
                    // Informs the update service that this has been checked
                    _this.update.checkedHomePosts(Date.now());
                    // Sets page query load more or refresh posts
                    //  Pull to refresh or update service calls.
                    if (isLoadingMore === false) {
                        _this.homePostQueries['page'] = '1';
                    }
                    else if (isLoadingMore === true) {
                        _this.showSpinnerOnHome = false;
                        _this.homePostQueries['page'] = Number(_this.homePostQueries['page']) + 1 + '';
                    }
                    else {
                        if (_this.homePostList.length === 0) {
                            _this.homePostQueries['page'] = '1';
                        }
                        else {
                            _this.showSpinnerOnHome = false;
                            break;
                        }
                    }
                    // Perform the request to the api service
                    _this.api.getPostList(_this.api.isLogged(), _this.homePostQueries).subscribe(function (postList) {
                        if (isLoadingMore === false) {
                            _this.homePostList = new Array();
                        }
                        _this.homePostList = _this.homePostList.concat(postList);
                        _this.noMoreResultsOnHome = false;
                        console.log(_this.homePostList);
                    }, function (err) {
                        if (err === 400) {
                            _this.noMoreResultsOnHome = true;
                        }
                        console.log('Error ' + err + ' - On User Data Request.');
                    }, function () { _this.showSpinnerOnHome = false; _this.loadingFromRefresher = false; resolve(); });
                    break;
                case 'queue':
                    if (_this.api.isLogged()) {
                        _this.showSpinnerOnQueue = true;
                        // Informs the update service that this has been checked
                        _this.update.checkedHomePosts(Date.now());
                        // Sets page query load more or refresh posts
                        //  Pull to refresh or update service calls.
                        if (isLoadingMore === false) {
                            _this.queuePostQueries['page'] = '1';
                        }
                        else if (isLoadingMore === true) {
                            _this.showSpinnerOnQueue = false;
                            _this.queuePostQueries['page'] = Number(_this.queuePostQueries['page']) + 1 + '';
                        }
                        else {
                            if (_this.queuePostList.length === 0) {
                                _this.queuePostQueries['page'] = '1';
                            }
                            else {
                                _this.showSpinnerOnQueue = false;
                                break;
                            }
                        }
                        // Perform the request to the api service
                        _this.api.getPostList(true, _this.queuePostQueries).subscribe(function (postList) {
                            if (isLoadingMore === false) {
                                _this.queuePostList = new Array();
                            }
                            _this.queuePostList = _this.queuePostList.concat(postList);
                            console.log(_this.queuePostList);
                            _this.noMoreResultsOnQueue = false;
                        }, function (err) {
                            if (err === 400) {
                                _this.noMoreResultsOnQueue = true;
                            }
                            console.log('Error ' + err + ' - On User Data Request.');
                        }, function () { _this.showSpinnerOnQueue = false; _this.loadingFromRefresher = false; resolve(); });
                    }
                    else {
                        _this.authentication.userLogged.subscribe(function (value) {
                            if (value === true) {
                                _this.isUserLogged = _this.api.isLogged();
                                _this.loadPosts('queue', isLoadingMore);
                            }
                        });
                    }
                    break;
                case 'following':
                    if (_this.api.isLogged()) {
                        _this.showSpinnerOnFollowing = true;
                        // Informs the update service that this has been checked
                        _this.update.checkedFollowingPosts(Date.now());
                        // Sets page query load more or refresh posts
                        //  Pull to refresh or update service calls.
                        if (isLoadingMore === false) {
                            _this.followingPostQueries['page'] = '1';
                        }
                        else if (isLoadingMore === true) {
                            _this.showSpinnerOnFollowing = false;
                            _this.followingPostQueries['page'] = Number(_this.followingPostQueries['page']) + 1 + '';
                        }
                        else {
                            if (_this.followingPostList.length === 0) {
                                _this.followingPostQueries['page'] = '1';
                            }
                            else {
                                _this.showSpinnerOnFollowing = false;
                                break;
                            }
                        }
                        // Adds array of following posts to query
                        if (_this.api.followingUsers.length > 0) {
                            _this.followingPostQueries['author'] = String(_this.api.followingUsers.join(','));
                            // Perform the request to the api service
                            _this.api.getPostList(true, _this.followingPostQueries).subscribe(function (postList) {
                                if (isLoadingMore === false) {
                                    _this.followingPostList = new Array();
                                }
                                _this.followingPostList = _this.followingPostList.concat(postList);
                                _this.noMoreResultsOnFollowing = false;
                            }, function (err) {
                                if (err === 400) {
                                    _this.noMoreResultsOnFollowing = true;
                                }
                                console.log('Error ' + err + ' - On User Data Request.');
                            }, function () { _this.showSpinnerOnFollowing = false; _this.loadingFromRefresher = false; resolve(); });
                        }
                    }
                    else {
                        _this.authentication.userLogged.subscribe(function (value) {
                            if (value === true) {
                                _this.isUserLogged = true;
                                _this.loadPosts('queue', isLoadingMore);
                            }
                        });
                    }
                    break;
            }
        });
    };
    PostsPage.prototype.doRefresh = function (refresher) {
        this.loadingFromRefresher = true;
        this.loadPosts(this.postsView, false).then(function () { return refresher.complete(); });
    };
    PostsPage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.loadPosts(_this.postsView, true).then(function () { return resolve(); });
        });
    };
    return PostsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], PostsPage.prototype, "list", void 0);
PostsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-posts',template:/*ion-inline-start:"/home/orpheus/rhs-app/src/pages/posts/posts.html"*/'<ion-header>\n  \n  <ion-navbar align-title="center" color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img *ngIf="platform.is(\'tablet\') || platform.is(\'ipad\')" alt="RHS" height="36" src="./assets/logo-rhs-full.svg"/>\n      <img *ngIf="!platform.is(\'tablet\') && !platform.is(\'ipad\')" alt="RHS" height="36" src="./assets/logo-rhs.svg"/>      \n    </ion-title>\n    <ion-buttons end>\n      <button ion-button class="notification-button" icon-only (click)="goToNotificationsPage()">\n        <ion-icon name="notifications">\n          <ion-badge *ngIf="unreadNotifications > 0" item-start>{{ unreadNotifications }}</ion-badge>\n        </ion-icon>\n      </button>\n      <button ion-button class="search-button" icon-only (click)="goToSearchPage()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar class="toolbar-rhs" color="primary">\n    <ion-segment [(ngModel)]="postsView" color="secondary">\n      <ion-segment-button value="home" (ionSelect)="changeSegment(\'home\')">\n        Principal\n      </ion-segment-button>\n      <ion-segment-button value="queue" (ionSelect)="changeSegment(\'queue\')">\n        Fila de Votação\n      </ion-segment-button>\n      <ion-segment-button value="following" (ionSelect)="changeSegment(\'following\')">\n        Seguindo\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher pullMin="100" \n                (ionRefresh)="doRefresh($event)"\n                [enabled]="postsView === \'home\' ? true : postsView === \'queue\' ? isUserLogged : isUserLogged">\n    <ion-refresher-content\n      pullingText="Puxe e solte para atualizar."\n      refreshingText="Buscando novos posts...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid no-padding [ngSwitch]="postsView">\n    \n    <ion-row #list *ngSwitchCase="\'home\'">\n      <ion-col col-md-6 push-md-3 col-sm-8 push-sm-2 col-12>\n        <div *ngIf="showSpinnerOnHome && !loadingFromRefresher && !noMoreResultsOnHome"><ion-spinner class="center-spinner"></ion-spinner></div>     \n        <post-card ion-stop-event="click" [post-data]="post" *ngFor="let post of homePostList" (click)="goToPostPage(post[\'id\'])"></post-card>           \n        <ion-item-divider *ngIf="noMoreResultsOnHome && !loadingFromRefresher">\n          Não foram encontrados mais resultados.  \n        </ion-item-divider>\n      </ion-col>\n    </ion-row>\n    <ion-row #list *ngSwitchCase="\'queue\'">\n      <ion-col col-md-6 push-md-3 col-sm-8 push-sm-2 col-12>\n        <div *ngIf="!isUserLogged">\n          <information [message]="\'Somente para usuários da RHS\'" [detail]="\'É preciso estar logado para acessar essa sessão.\'"></information>\n        </div>\n        <div *ngIf="isUserLogged">\n          <div *ngIf="showSpinnerOnQueue && !loadingFromRefresher && !noMoreResultsOnQueue"><ion-spinner class="center-spinner"></ion-spinner></div>\n            <post-card ion-stop-event="click" [post-data]="post" *ngFor="let post of queuePostList" (click)="goToPostPage(post[\'id\'])"></post-card>   \n            <ion-item-divider *ngIf="noMoreResultsOnQueue && !loadingFromRefresher">\n              Não foram encontrados mais resultados.  \n            </ion-item-divider>\n            <div *ngIf="queuePostList.length == 0 && !showSpinnerOnQueue">\n              <information [message]="\'Ainda não encontramos nenhum post na fila de votação.\'"></information>\n            </div>\n          </div>\n      </ion-col>\n    </ion-row>\n    <ion-row #list *ngSwitchCase="\'following\'">\n      <ion-col col-md-6 push-md-3 col-sm-8 push-sm-2 col-12>\n        <div *ngIf="!isUserLogged">\n          <information [message]="\'Somente para usuários da RHS\'" [detail]="\'É preciso estar logado para acessar essa sessão.\'"></information>\n        </div> \n        <div *ngIf="isUserLogged">\n          <div *ngIf="showSpinnerOnFollowing && !loadingFromRefresher && !noMoreResultsOnFollowing"><ion-spinner class="center-spinner"></ion-spinner></div>\n          <post-card ion-stop-event="click" [post-data]="post" *ngFor="let post of followingPostList" (click)="goToPostPage(post[\'id\'])"></post-card>   \n          <ion-item-divider *ngIf="noMoreResultsOnFollowing && !loadingFromRefresher">\n            Não foram encontrados mais resultados.  \n          </ion-item-divider>\n          <div *ngIf="followingPostList.length == 0 && !showSpinnerOnFollowing">\n            <information [message]="\'Ainda encontramos não há nenhum post sendo seguido.\'"></information>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-infinite-scroll \n        [enabled]="postsView === \'home\' ? !noMoreResultsOnHome : postsView === \'queue\' ? isUserLogged && !noMoreResultsOnQueue : isUserLogged && !noMoreResultsOnFollowing" \n        (ionInfinite)="$event.waitFor(doInfinite())">\n      <ion-infinite-scroll-content\n        loadingText="Buscando mais posts...">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    \n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/orpheus/rhs-app/src/pages/posts/posts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__["a" /* AuthenticationProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_update_update__["a" /* UpdateProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]])
], PostsPage);

//# sourceMappingURL=posts.js.map

/***/ })

});
//# sourceMappingURL=4.js.map