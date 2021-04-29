webpackJsonp([2],{

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_post_card_post_card_module__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_information_information_module__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search__ = __webpack_require__(656);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    return SearchPageModule;
}());
SearchPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__search__["a" /* SearchPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__search__["a" /* SearchPage */]), __WEBPACK_IMPORTED_MODULE_2__components_post_card_post_card_module__["a" /* PostsCardComponentModule */], __WEBPACK_IMPORTED_MODULE_3__components_information_information_module__["a" /* InformationComponentModule */]],
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

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

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase_analytics__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, api, platform, statusBar, analytics, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.platform = platform;
        this.statusBar = statusBar;
        this.analytics = analytics;
        this.keyboard = keyboard;
        this.postList = new Array();
        this.postQueries = {};
        this.searchTerm = '';
        this.showSpinner = false;
        this.noMoreResults = false;
        this.categoryFiltering = false;
        this.tagFiltering = false;
        this.filterName = '';
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]();
        if (this.navParams.get('tagId')) {
            this.postQueries['tags'] = this.navParams.get('tagId');
            this.filterName = this.navParams.get('tagName');
            this.tagFiltering = true;
            this.searchPosts(false);
        }
        if (this.navParams.get('categoryId')) {
            this.postQueries['categories'] = this.navParams.get('categoryId');
            this.filterName = this.navParams.get('categoryName');
            this.categoryFiltering = true;
            this.searchPosts(false);
        }
    }
    SearchPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (event) {
            _this.keyboard.hide();
        });
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.searchControl.valueChanges
            .debounceTime(600)
            .distinctUntilChanged()
            .subscribe(function (search) { return _this.searchPosts(false); });
    };
    SearchPage.prototype.ionViewDidEnter = function () {
        this.statusBar.backgroundColorByHexString('008884');
        this.searchBar.setFocus();
        this.keyboard.show();
        this.searchBar.setFocus();
        // Tells analytics that user accessed this screen.
        this.analytics.setCurrentScreen("Posts ")
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
    };
    SearchPage.prototype.ionViewDidLeave = function () {
        this.statusBar.backgroundColorByHexString('042830');
    };
    SearchPage.prototype.goToPostPage = function (id) {
        this.navCtrl.push('PostPage', { 'postId': id });
    };
    SearchPage.prototype.searchPosts = function (isLoadingMore) {
        var _this = this;
        return new Promise(function (resolve) {
            if ((_this.searchTerm && _this.searchTerm.trim()) || _this.categoryFiltering || _this.tagFiltering) {
                // New search begins
                if (isLoadingMore === false) {
                    _this.postList = new Array();
                    _this.postQueries['page'] = '1';
                    _this.postQueries['search'] = _this.searchTerm;
                    _this.showSpinner = true;
                }
                else if (isLoadingMore === true) {
                    _this.postQueries['page'] = Number(_this.postQueries['page']) + 1 + '';
                }
                // Perform the request to the api service
                _this.api.getPostList(_this.api.isLogged(), _this.postQueries).subscribe(function (postList) {
                    _this.postList = _this.postList.concat(postList);
                    _this.noMoreResults = false;
                }, function (err) {
                    if (err === 400) {
                        _this.noMoreResults = true;
                    }
                    console.log('Error ' + err + ' - On Search Data Request.');
                }, function () { _this.showSpinner = false; resolve(); });
            }
            else {
                _this.showSpinner = false;
                resolve();
            }
        });
    };
    SearchPage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.searchPosts(true).then(function () { return resolve(); });
        });
    };
    SearchPage.prototype.onCancel = function (event) {
        this.navCtrl.pop();
    };
    SearchPage.prototype.deleteFilter = function (filterChip) {
        this.postQueries['tags'] = null;
        this.postQueries['categories'] = null;
        this.categoryFiltering = false;
        this.tagFiltering = false;
        filterChip.remove();
        this.searchPosts(false);
    };
    return SearchPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('searchBar'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Searchbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Searchbar */]) === "function" && _a || Object)
], SearchPage.prototype, "searchBar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]) === "function" && _b || Object)
], SearchPage.prototype, "content", void 0);
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/rodrigodeoliveira/code/self/ufg/rhs-app/src/pages/search/search.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons left>\n      <button padding-left *ngIf="!platform.is(\'ios\')" (click)="onCancel()" icon-only clear ion-button large>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n      <button *ngIf="platform.is(\'ios\')" (click)="onCancel()" ion-button icon-left clear>\n        <ion-icon name="arrow-back"></ion-icon>\n        Voltar\n      </button>\n    </ion-buttons>\n    <ion-searchbar color="primary" #searchBar\n                   animated="true"\n                   showClearButton="true"\n                   placeholder="Pesquisar posts na RHS"\n                   autocomplete="on"\n                   [(ngModel)]="searchTerm" \n                   [formControl]="searchControl"></ion-searchbar>\n  </ion-toolbar>\n  <ion-toolbar padding-left padding-right color="tertiary" *ngIf="tagFiltering || categoryFiltering">\n    Filtrando por:  <ion-chip #filterChip color="primary">  \n                      <ion-label color="white">{{ filterName }}</ion-label>\n                      <button ion-button clear color="secondary" (click)="deleteFilter(filterChip)">\n                          <ion-icon name="close-circle"></ion-icon>\n                      </button>\n                    </ion-chip>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]="(tagFiltering || categoryFiltering) ? \'has-subheader\' : \'\'" (click)="{}">\n  \n  <ion-grid no-padding>\n  <ion-row>\n    <ion-col col-md-6 push-md-3 col-sm-8 push-sm-2 col-12>\n      <div *ngIf="showSpinner"><ion-spinner class="center-spinner"></ion-spinner></div>\n      <post-card [post-data]="post" *ngFor="let post of postList" (click)="goToPostPage(post[\'id\'])">   \n      </post-card>\n      <ion-item-divider *ngIf="noMoreResults">\n        Não foram encontrados mais resultados.  \n      </ion-item-divider>\n      <div *ngIf="postList.length == 0 && !showSpinner && searchTerm && searchTerm.trim()">\n        <information [message]="\'Nenhum post encontrado.\'" [detail]="\'Verifique se digitou corretamente o termo de busca, ou tente ser menos específico.\'"></information>\n      </div>\n      <div *ngIf="postList.length == 0 && !showSpinner && !searchTerm && !searchTerm.trim()">\n        <information [message]="\'Busque por posts na RHS.\'"></information>\n      </div>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n  <ion-infinite-scroll [enabled]="!noMoreResults" (ionInfinite)="$event.waitFor(doInfinite())">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rodrigodeoliveira/code/self/ufg/rhs-app/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* ApiProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */]) === "function" && _j || Object])
], SearchPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=2.js.map