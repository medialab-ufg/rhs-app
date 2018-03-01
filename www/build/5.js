webpackJsonp([5],{

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_shrink_header_shrink_header__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_inner_html_post_inner_html_post__ = __webpack_require__(647);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PostPageModule = (function () {
    function PostPageModule() {
    }
    return PostPageModule;
}());
PostPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */],
            __WEBPACK_IMPORTED_MODULE_3__directives_shrink_header_shrink_header__["a" /* ShrinkHeader */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_inner_html_post_inner_html_post__["a" /* InnerHtmlPostPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]]
    })
], PostPageModule);

//# sourceMappingURL=post.module.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialSharing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(40);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Social Sharing
 * @description
 * Share text, files, images, and links via social networks, sms, and email.
 *
 * For Browser usage check out the Web Share API docs: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#web-share-api
 *
 * @usage
 * ```typescript
 * import { SocialSharing } from '@ionic-native/social-sharing';
 *
 * constructor(private socialSharing: SocialSharing) { }
 *
 * ...
 *
 * // Check if sharing via email is supported
 * this.socialSharing.canShareViaEmail().then(() => {
 *   // Sharing via email is possible
 * }).catch(() => {
 *   // Sharing via email is not possible
 * });
 *
 * // Share via email
 * this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
 *   // Success!
 * }).catch(() => {
 *   // Error!
 * });
 * ```
 */
var SocialSharing = (function (_super) {
    __extends(SocialSharing, _super);
    function SocialSharing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shares using the share sheet
     * @param message {string} The message you would like to share.
     * @param subject {string} The subject
     * @param file {string|string[]} URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.
     * @param url {string} A URL to share
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.share = function (message, subject, file, url) { return; };
    /**
     * Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)
     * @param options {object} The options object with the message, subject, files, url and chooserTitle properties.
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareWithOptions = function (options) { return; };
    /**
     * Checks if you can share via a specific app.
     * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
     * @param message {string}
     * @param subject {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.canShareVia = function (appName, message, subject, image, url) { return; };
    /**
     * Shares directly to Twitter
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaTwitter = function (message, image, url) { return; };
    /**
     * Shares directly to Facebook
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaFacebook = function (message, image, url) { return; };
    /**
     * Shares directly to Facebook with a paste message hint
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @param pasteMessageHint {string}
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) { return; };
    /**
     * Shares directly to Instagram
     * @param message {string}
     * @param image {string}
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaInstagram = function (message, image) { return; };
    /**
     * Shares directly to WhatsApp
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaWhatsApp = function (message, image, url) { return; };
    /**
     * Shares directly to a WhatsApp Contact
     * @param receiver {string} Pass phone number on Android, and Addressbook ID (abid) on iOS
     * @param message {string} Message to send
     * @param image {string} Image to send (does not work on iOS
     * @param url {string} Link to send
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaWhatsAppToReceiver = function (receiver, message, image, url) { return; };
    /**
     * Share via SMS
     * @param messge {string} message to send
     * @param phoneNumber {string} Number or multiple numbers seperated by commas
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaSMS = function (messge, phoneNumber) { return; };
    /**
     * Checks if you can share via email
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.canShareViaEmail = function () { return; };
    /**
     * Share via Email
     * @param message {string}
     * @param subject {string}
     * @param to {string[]}
     * @param cc {string[]} Optional
     * @param bcc {string[]} Optional
     * @param files {string|string[]} Optional URL or local path to file(s) to attach
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaEmail = function (message, subject, to, cc, bcc, files) { return; };
    /**
     * Share via AppName
     * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
     * @param message {string}
     * @param subject {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareVia = function (appName, message, subject, image, url) { return; };
    /**
     * defines the popup position before call the share method.
     * @param targetBounds {string} left, top, width, height
     */
    SocialSharing.prototype.setIPadPopupCoordinates = function (targetBounds) { };
    return SocialSharing;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));
SocialSharing.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
SocialSharing.ctorParameters = function () { return []; };
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        successIndex: 4,
        errorIndex: 5
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, String]),
    __metadata("design:returntype", Promise)
], SocialSharing.prototype, "share", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        platforms: ['iOS', 'Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SocialSharing.prototype, "shareWithOptions", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        successIndex: 5,
        errorIndex: 6,
        platforms: ['iOS', 'Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], SocialSharing.prototype, "canShareVia", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        successIndex: 3,
        errorIndex: 4,
        platforms: ['iOS', 'Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], SocialSharing.prototype, "shareViaTwitter", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        successIndex: 3,
        errorIndex: 4,
        platforms: ['iOS', 'Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], SocialSharing.prototype, "shareViaFacebook", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        successIndex: 4,
        errorIndex: 5,
        platforms: ['iOS', 'Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], SocialSharing.prototype, "shareViaFacebookWithPasteMessageHint", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        platforms: ['iOS', 'Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SocialSharing.prototype, "shareViaInstagram", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        successIndex: 3,
        errorIndex: 4,
        platforms: ['iOS', 'Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], SocialSharing.prototype, "shareViaWhatsApp", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        successIndex: 4,
        errorIndex: 5,
        platforms: ['iOS', 'Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], SocialSharing.prototype, "shareViaWhatsAppToReceiver", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        platforms: ['iOS', 'Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SocialSharing.prototype, "shareViaSMS", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        platforms: ['iOS', 'Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SocialSharing.prototype, "canShareViaEmail", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        platforms: ['iOS', 'Android'],
        successIndex: 6,
        errorIndex: 7
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Array, Array, Array, Object]),
    __metadata("design:returntype", Promise)
], SocialSharing.prototype, "shareViaEmail", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        successIndex: 5,
        errorIndex: 6,
        platforms: ['iOS', 'Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], SocialSharing.prototype, "shareVia", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        sync: true,
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SocialSharing.prototype, "setIPadPopupCoordinates", null);
SocialSharing = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
        pluginName: 'SocialSharing',
        plugin: 'cordova-plugin-x-socialsharing',
        pluginRef: 'plugins.socialsharing',
        repo: 'https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin',
        platforms: ['Android', 'Browser', 'iOS', 'Windows', 'Windows Phone']
    })
], SocialSharing);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase_analytics__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostPage = (function () {
    function PostPage(navParams, navCtrl, actionSheetCtrl, api, alertCtrl, toastCtrl, socialSharing, settings, platform, analytics) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.socialSharing = socialSharing;
        this.settings = settings;
        this.platform = platform;
        this.analytics = analytics;
        this.comments = new Array();
        // Ordered comments
        this.commentBoxes = new Array();
        this.commentsOffset = 0;
        // Loading Spinners controll
        this.isLoadingPost = true;
        this.isLoadingComments = true;
        this.isLoadingTags = true;
        this.isLoadingCategories = true;
        this.isLoadingAuthor = true;
        this.isPostingComment = false;
        // String inserted on Comment Input Footer
        this.commentContent = '';
        // Statistics that change dynamically
        this.totalVotes = 0;
        this.totalShares = 0;
        this.commentCount = 0;
        this.postDidUpdated = false;
        // Controlling voting
        this.hasVoted = false;
        this.isVoting = false;
        // Callback function used in comment page to inform if the user did inserted a new comment or not.
        this.returnFromCommentPage = function (_params) {
            return new Promise(function (resolve, reject) {
                if (_params != 0) {
                    _this.postDidUpdated = true;
                }
                _this.commentCount = Number(_this.commentCount) + _params;
                resolve();
            });
        };
        this.postId = this.navParams.get('postId');
        this.loadPost();
        this.loadCategories();
        this.loadTags();
    }
    PostPage.prototype.ionViewWillEnter = function () {
        this.returnFromPostFunction = this.navParams.get("returnFromPostFunction");
        this.loadComments();
    };
    PostPage.prototype.ionViewWillLeave = function () {
        this.returnFromPostFunction(this.postDidUpdated ? { id: this.postId, commentCount: this.commentCount, totalVotes: this.totalVotes } : null).then(function () { });
    };
    PostPage.prototype.ionViewDidEnter = function () {
        // Tells analytics that user accessed this screen.
        this.analytics.setCurrentScreen("Post: " + this.postId)
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
    };
    PostPage.prototype.loadPost = function () {
        var _this = this;
        this.isLoadingPost = true;
        this.api.getPostInfo(this.postId, this.api.isLogged()).subscribe(function (postInfo) {
            _this.post = postInfo;
            console.log(_this.post);
            _this.totalVotes = _this.post['total_votes'];
            _this.totalShares = _this.post['total_shares'];
            _this.commentCount = _this.post['comment_count'];
            _this.isLoadingAuthor = true;
            _this.api.getAuthorInfo(_this.post['author'], _this.api.isLogged()).subscribe(function (authorInfo) {
                _this.author = authorInfo;
            }, function (err) {
                console.log('Error ' + err + ' - On Author Data Request.');
            }, function () { return _this.isLoadingAuthor = false; });
        }, function (err) {
            console.log('Error ' + err + ' - On Post Data Request.');
        }, function () { return _this.isLoadingPost = false; });
    };
    PostPage.prototype.loadComments = function () {
        var _this = this;
        this.isLoadingComments = true;
        this.api.getPostComments(this.postId, this.commentsOffset, this.api.isLogged()).subscribe(function (commentsInfo) {
            if (_this.commentsOffset <= 0) {
                _this.comments = commentsInfo;
            }
            else {
                _this.comments = _this.comments.concat(commentsInfo);
            }
            _this.generateCommentBoxes();
        }, function (err) {
            console.log('Error ' + err + ' - On Comments Data Request.');
            _this.isLoadingComments = false;
        });
    };
    PostPage.prototype.loadCategories = function () {
        var _this = this;
        this.isLoadingCategories = true;
        this.api.getPostCategories(this.postId, this.api.isLogged()).subscribe(function (categoriesInfo) {
            _this.categories = categoriesInfo;
        }, function (err) {
            console.log('Error ' + err + ' - On Categories Data Request.');
        }, function () { return _this.isLoadingCategories = false; });
    };
    PostPage.prototype.loadTags = function () {
        var _this = this;
        this.isLoadingTags = true;
        this.api.getPostTags(this.postId, this.api.isLogged()).subscribe(function (tagsInfo) {
            _this.tags = tagsInfo;
        }, function (err) {
            console.log('Error ' + err + ' - On Tags Data Request.');
        }, function () { return _this.isLoadingTags = false; });
    };
    PostPage.prototype.commentPost = function () {
        if (this.api.isLogged()) {
            this.commentInput.setFocus();
        }
        else {
            var commentAlert = this.alertCtrl.create({
                title: 'Ops... você não está logado!',
                subTitle: 'Entre na RHS para poder comentar neste post.',
                buttons: ['OK']
            });
            commentAlert.present();
        }
    };
    PostPage.prototype.commentOnComment = function (commentIndex) {
        if (this.api.isLogged()) {
            this.navCtrl.push('CommentPage', { 'comment': this.commentBoxes[commentIndex], 'postId': this.postId, 'returnFromCommentFunction': this.returnFromCommentPage });
        }
        else {
            var commentAlert = this.alertCtrl.create({
                title: 'Ops... você não está logado!',
                subTitle: 'Entre na RHS para poder comentar neste post.',
                buttons: ['OK']
            });
            commentAlert.present();
        }
    };
    PostPage.prototype.votePost = function () {
        var _this = this;
        this.isVoting = true;
        this.api.voteOnPost(this.postId).subscribe(function (voteResponse) {
            _this.totalVotes = Number(_this.totalVotes) + 1;
            _this.postDidUpdated = true;
            var voteToast = _this.toastCtrl.create({
                message: 'Obrigado por votar neste post!',
                duration: 3000
            });
            voteToast.present();
            _this.isVoting = false;
            _this.hasVoted = true;
        }, function (err) {
            console.log(err);
            _this.hasVoted = true;
            _this.isVoting = false;
            var voteAlert = _this.alertCtrl.create({
                title: 'Ops...',
                subTitle: err.message,
                buttons: ['OK']
            });
            voteAlert.present();
        });
    };
    PostPage.prototype.postComment = function () {
        var _this = this;
        this.isPostingComment = true;
        this.api.commentOnPost(this.postId, this.commentContent, 0).subscribe(function (commentResponse) {
            _this.comments.unshift(commentResponse);
            _this.commentContent = '';
            _this.commentCount = Number(_this.commentCount) + 1;
            _this.postDidUpdated = true;
            _this.generateCommentBoxes();
            _this.analytics.logEvent('new_comment', { post_id: _this.postId, user_id: _this.api.getUserId() })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
        }, function (err) {
            console.log('Error ' + err + ' - On Comment Data posting.');
        }, function () { return _this.isPostingComment = false; });
    };
    PostPage.prototype.goToSearchWithTag = function (tag) {
        this.navCtrl.push('SearchPage', { 'tagId': tag['id'], 'tagName': tag['name'] });
    };
    PostPage.prototype.goToSearchWithCategory = function (category) {
        this.navCtrl.push('SearchPage', { 'categoryId': category['id'], 'categoryName': category['name'], });
    };
    PostPage.prototype.openShareActionSheet = function () {
        var sharingOptions = {
            message: this.strip(this.post['title']['rendered']),
            subject: 'Publicação da Rede Humaniza SUS: ' + this.post['title']['rendered'],
            url: this.post['link']
        };
        this.socialSharing.shareWithOptions(sharingOptions);
    };
    // Used for ordering and finding level of comments
    PostPage.prototype.generateCommentBoxes = function () {
        console.log(this.comments);
        this.commentBoxes = new Array();
        this.fillCommentBox(0, 0);
        this.isLoadingComments = false;
        console.log(this.commentBoxes);
    };
    PostPage.prototype.fillCommentBox = function (parentId, commentDepth) {
        for (var _i = 0, _a = this.comments; _i < _a.length; _i++) {
            var comment = _a[_i];
            if (comment['parent'] != parentId) {
                continue;
            }
            comment.depth = commentDepth;
            this.commentBoxes.push(comment);
            this.fillCommentBox(comment['id'], commentDepth + 1);
        }
    };
    // Used for striping html formating from title in sharing options
    // (not needed in template, where we can use [innerHtml])
    PostPage.prototype.strip = function (html) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };
    PostPage.prototype.changeInputSize = function () {
        // Get elements
        var element = document.getElementById('commentInput');
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
    PostPage.prototype.goToAuthorPage = function (userId) {
        if (userId == this.api.getUserId()) {
            this.navCtrl.push('ProfilePage');
        }
        else {
            this.navCtrl.push('UserPage', { 'userId': userId });
        }
    };
    return PostPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('commentInput'),
    __metadata("design:type", Object)
], PostPage.prototype, "commentInput", void 0);
PostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-post',template:/*ion-inline-start:"/home/orpheus/rhs-app/src/pages/post/post.html"*/'<ion-header id="shrinkHeader">\n\n  <ion-navbar color="secondary">\n    <ion-title>\n      <img *ngIf="platform.is(\'tablet\') || platform.is(\'ipad\')" alt="RHS" height="36" src="./assets/logo-rhs-full.svg"/>\n      <img *ngIf="!platform.is(\'tablet\') && !platform.is(\'ipad\')" alt="RHS" height="36" src="./assets/logo-rhs.svg"/>      \n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openShareActionSheet()">\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen shrink-header="12px" class="content has-header">\n\n  <div *ngIf="isLoadingPost"><ion-spinner class="center-spinner"></ion-spinner></div>\n  <div *ngIf="!isLoadingPost">\n\n    <!-- POST TITLE -->\n    <h1 padding-horizontal [innerHTML]="post[\'title\'][\'rendered\']"></h1>\n\n    <!-- POST AUTHOR NAME -->\n    <div *ngIf="isLoadingAuthor"><ion-spinner class="center-spinner-relative"></ion-spinner></div>\n    <div class="author-above-title" text-right *ngIf="!isLoadingAuthor" (click)="goToAuthorPage(author[\'id\'])">\n        por <span >{{ author[\'name\'] }}</span>\n    </div>\n\n    <!-- POST CONTENT -->\n    <article [ngStyle]="{ \'font-size\': settings.postContentFontSizeOptions[settings.currentFontSize] }" [innerHTML]="post[\'content\'][\'rendered\'] | innerHtmlPost"></article>\n\n    <!-- POST CATEGORIES -->\n    <div *ngIf="isLoadingCategories"><ion-spinner class="center-spinner-relative"></ion-spinner></div>\n    <div padding *ngIf="!isLoadingCategories && categories.length > 0" class="category">\n      <h4><ion-icon name="pricetags"></ion-icon> Categorias</h4>\n      <ion-buttons class="categoria">\n        <button ion-button round small clear *ngFor="let category of categories" (click)="goToSearchWithCategory(category)" id="button">{{ category[\'name\'] }}</button>\n      </ion-buttons>\n    </div>\n    <!-- POST TAGS -->\n    <div *ngIf="isLoadingTags"><ion-spinner class="center-spinner-relative"></ion-spinner></div>\n    <div padding *ngIf="!isLoadingTags && tags.length > 0" class="tags">\n      <h4><ion-icon name="bookmark"></ion-icon> Tags</h4>\n      <ion-buttons>\n        <button ion-button round small outline *ngFor="let tag of tags" (click)="goToSearchWithTag(tag)" id="button">{{ tag[\'name\'] }}</button>\n      </ion-buttons>\n    </div>\n\n    <!--DIVISOR-->\n    <div no-lines class="top-border"></div>\n\n    <!-- POST AUTHOR-->\n    <div *ngIf="isLoadingAuthor"><ion-spinner class="center-spinner-relative"></ion-spinner></div>\n    <div padding *ngIf="!isLoadingAuthor" class="author" (click)="goToAuthorPage(author[\'id\'])">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="{{ author[\'avatar_urls\'][48] }}">\n        </ion-avatar>\n        <h2>{{ author[\'name\'] }}</h2>\n        <p>Publicado em {{ post[\'date\'] | date: \'dd/MM/yyyy\' }}</p>\n      </ion-item>\n    </div>\n\n    <!--DIVISOR-->\n    <div no-lines class="top-border"></div>\n\n    <!-- POST ACTION BUTTONS-->\n    <ion-buttons class="action_buttons">\n      <ion-grid>\n        <ion-row text-center>\n          <ion-col col-4 class="divide">\n            <p>{{ commentCount }} Comentários</p>\n            <button small ion-button (click)="commentPost()" class="comentar">Comentar</button>\n          </ion-col>\n          <ion-col col-3>\n            <p>{{ totalVotes }} Votos</p>\n            <button small ion-button (click)="votePost()" class="votar" [disabled]="hasVoted"><ion-spinner name="ios-small" class="button-loader" *ngIf="isVoting"></ion-spinner>{{ isVoting ? \'\' : \'Votar\' }}</button>\n          </ion-col>\n          <ion-col col-5>\n            <p>{{ totalShares }} Compartilhamentos</p>\n            <button small ion-button (click)="openShareActionSheet()" class="compartilhar">Compartilhar</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-buttons>\n\n    <!-- POST COMMENTS -->\n    <div *ngIf="isLoadingComments"><ion-spinner class="center-spinner-relative"></ion-spinner></div>\n    <div padding *ngIf="!isLoadingComments && commentBoxes.length > 0" class="comentarios">\n      <ion-list>\n        <ion-item *ngFor="let comment of commentBoxes; let i = index" text-wrap [ngStyle]="{ \'padding-left\': comment.depth*20 + \'px\'} ">\n          <ion-avatar item-start class="avatar" [ngClass]="{\'avatar-author\': author ? comment[\'author_name\'] == author[\'name\'] : false }" (click)="goToAuthorPage(comment[\'author\'])">\n            <img src="{{ comment[\'author_avatar_urls\'][24] }}">\n          </ion-avatar>\n            <h2 (click)="goToAuthorPage(comment[\'author\'])">{{ comment[\'author_name\'] }} <span>{{ comment[\'date\'] | date: \'dd/MM/yyyy\' }}</span></h2>\n            <p [innerHtml]="comment[\'content\'][\'rendered\']"></p>\n            <button ion-button clear icon-only item-end (click)="commentOnComment(i)">\n              <ion-icon name="redo"></ion-icon>\n            </button>\n        </ion-item>\n      </ion-list>\n      <div text-center *ngIf="post[\'comment_count\'] > commentBoxes.length"><button clear round ion-button (click)="commentsOffset = commentsOffset + settings.commentsPerPage; loadComments();">Mais comentários</button></div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer *ngIf="this.api.isLogged()">\n  <ion-toolbar>\n    <ion-textarea rows="1" #commentInput id="commentInput" (input)="changeInputSize()" required type="text" [(ngModel)]="commentContent" placeholder="Digite aqui seu comentário."></ion-textarea>\n    <ion-buttons end>\n      <ion-spinner *ngIf="isPostingComment"></ion-spinner>\n      <button *ngIf="!isPostingComment" [disabled]="commentContent.length <= 0 " [color]="commentContent.length > 0 ? \'primary\' : \'default\'" ion-button icon-only (click)="postComment()">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons> \n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/orpheus/rhs-app/src/pages/post/post.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__["a" /* SettingsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]])
], PostPage);

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShrinkHeader; });
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

var ShrinkHeader = (function () {
    function ShrinkHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.previousTop = 0;
    }
    ShrinkHeader.prototype.ngAfterViewInit = function () {
        this.header = document.getElementById("shrinkHeader");
        this.headerHeight = this.header.clientHeight;
        this.renderer.setElementStyle(this.header, 'transition', 'transform .2s ease-in');
    };
    ShrinkHeader.prototype.onContentScroll = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.updateHeader(ev);
        });
    };
    ShrinkHeader.prototype.updateHeader = function (ev) {
        if (this.previousTop > ev.scrollTop) {
            if (this.header.style['webkitTransform'] != 'translate3d(0px, 0px, 0px)') {
                this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + 0 + 'px,0)');
            }
        }
        else {
            if (ev.scrollTop > 0) {
                this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + -ev.scrollTop + 'px,0)');
            }
        }
        this.previousTop = ev.scrollTop;
    };
    return ShrinkHeader;
}());
ShrinkHeader = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[shrink-header]',
        host: {
            '(ionScroll)': 'onContentScroll($event)'
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
], ShrinkHeader);

//# sourceMappingURL=shrink-header.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnerHtmlPostPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InnerHtmlPostPipe = (function () {
    function InnerHtmlPostPipe(dom, settings) {
        this.dom = dom;
        this.settings = settings;
    }
    InnerHtmlPostPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        value = value.replace(/(src=")(?!https?:\/\/)\/?([^"]+\.(jpe?g|png|gif|bmp))"/ig, '$1' + this.settings.apiURL + '$2"');
        return this.dom.bypassSecurityTrustHtml(value);
    };
    return InnerHtmlPostPipe;
}());
InnerHtmlPostPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Pipe */])({
        name: 'innerHtmlPost',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* SettingsProvider */]])
], InnerHtmlPostPipe);

//# sourceMappingURL=inner-html-post.js.map

/***/ })

});
//# sourceMappingURL=5.js.map