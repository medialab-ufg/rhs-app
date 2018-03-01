webpackJsonp([10],{

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPageModule", function() { return CommentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment__ = __webpack_require__(638);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommentPageModule = (function () {
    function CommentPageModule() {
    }
    return CommentPageModule;
}());
CommentPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__comment__["a" /* CommentPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comment__["a" /* CommentPage */])],
    })
], CommentPageModule);

//# sourceMappingURL=comment.module.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(143);
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





var CommentPage = (function () {
    function CommentPage(navCtrl, navParams, api, statusBar, analytics) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.statusBar = statusBar;
        this.analytics = analytics;
        this.response = null;
        this.commentId = null;
        this.responseContent = '';
        this.isPostingResponse = false;
        this.didResponded = false;
        this.isLoadingComment = false;
        this.postId = this.navParams.get('postId');
        this.comment = this.navParams.get('comment');
        this.commentId = this.navParams.get('commentId'); // If null, we came from post page, instead of notification.
        if (this.commentId != null) {
            this.loadComment();
        }
    }
    CommentPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.responseInput.setFocus();
        }, 150);
        // Tells analytics that user accessed this screen.
        this.analytics.setCurrentScreen("Comments")
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
    };
    CommentPage.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString('008884');
        this.returnFromCommentFunction = this.navParams.get("returnFromCommentFunction");
    };
    CommentPage.prototype.ionViewDidLeave = function () {
        this.statusBar.backgroundColorByHexString('042830');
    };
    CommentPage.prototype.ionViewWillLeave = function () {
        this.returnFromCommentFunction(this.didResponded ? 1 : 0).then(function () { });
    };
    CommentPage.prototype.loadComment = function () {
        var _this = this;
        this.isLoadingComment = true;
        this.api.getComment(this.commentId).subscribe(function (comment) {
            _this.comment = comment;
        }, function (err) {
            console.log('Error ' + err + ' - on loading post content.');
        }, function () { return _this.isLoadingComment = false; });
    };
    CommentPage.prototype.postResponse = function () {
        var _this = this;
        this.isPostingResponse = true;
        this.api.commentOnPost(this.comment['post'], this.responseContent, this.comment['id']).subscribe(function (commentResponse) {
            _this.responseContent = '';
            _this.response = commentResponse;
            _this.didResponded = true;
            _this.analytics.logEvent('new_comment', { post_id: _this.postId, user_id: _this.api.getUserId() })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
        }, function (err) {
            console.log('Error ' + err + ' - On Response Data posting.');
            _this.didResponded = false;
            _this.isPostingResponse = false;
        }, function () { return _this.isPostingResponse = false; });
    };
    CommentPage.prototype.changeInputSize = function () {
        // Get elements
        var element = document.getElementById('responseInput');
        var textarea = element.getElementsByTagName('textarea')[0];
        // Set default style for textarea
        textarea.style.minHeight = '0';
        textarea.style.height = '0';
        // Limit size to 96 pixels (6 lines of text)
        var scroll_height = textarea.scrollHeight;
        if (scroll_height > 96)
            scroll_height = 96;
        // Apply new style
        element.style.height = scroll_height + "px";
        textarea.style.minHeight = scroll_height + "px";
        textarea.style.height = scroll_height + "px";
    };
    CommentPage.prototype.goToPostPage = function () {
        this.navCtrl.push('PostPage', { 'postId': this.comment['post'] });
    };
    return CommentPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('responseInput'),
    __metadata("design:type", Object)
], CommentPage.prototype, "responseInput", void 0);
CommentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-comment',template:/*ion-inline-start:"/home/orpheus/rhs-app/src/pages/comment/comment.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Resposta ao comentário</ion-title>\n    <ion-buttons end *ngIf="this.commentId !== null && this.commentId !== undefined">\n      <button ion-button clear (click)="goToPostPage()">\n        Ver Post\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="comentarios" padding>\n  <ion-list>\n    \n    <ion-item text-wrap *ngIf="!isLoadingComment">\n      <ion-avatar item-start>\n        <img src="{{ comment[\'author_avatar_urls\'][24] }}">\n      </ion-avatar>\n      <h2>{{ comment[\'author_name\'] }}</h2>\n      <p [innerHtml]="comment[\'content\'][\'rendered\']"></p>\n    </ion-item>\n\n    <ion-item *ngIf="!isPostingResponse && response !== null" text-wrap >\n      <ion-avatar item-start>\n        <img src="{{ response[\'author_avatar_urls\'][24] }}">\n      </ion-avatar>\n      <h2>{{ response[\'author_name\'] }}</h2>\n      <p [innerHtml]="response[\'content\'][\'rendered\']"></p>\n    </ion-item>\n\n  </ion-list>\n  \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-textarea rows="1" id="responseInput" (input)="changeInputSize()" #responseInput type="text" [(ngModel)]="responseContent" placeholder="Digite aqui seu comentário."></ion-textarea>\n    <ion-buttons end>\n      <ion-spinner *ngIf="isPostingResponse"></ion-spinner>\n      <button *ngIf="!isPostingResponse" [color]="responseContent.length > 0 ? \'primary\' : \'default\'" ion-button icon-only (click)="postResponse()">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons> \n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/orpheus/rhs-app/src/pages/comment/comment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]])
], CommentPage);

//# sourceMappingURL=comment.js.map

/***/ })

});
//# sourceMappingURL=10.js.map