webpackJsonp([11],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_oauth_signature__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_oauth_signature__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiProvider = (function () {
    function ApiProvider(http, settings) {
        this.http = http;
        this.settings = settings;
        // Wordpress settings provided by Authentication Service
        this.tokenKey = null;
        this.tokenSecret = null;
        // Status Authentication Service
        this.logged = false;
        // Info provided after login
        this.userId = 0;
        this.followingUsers = new Array();
        this.JSON = JSON;
    }
    // == GETTERS AND SETTERS FOR LOCAL VARIABLES ==========================================
    ApiProvider.prototype.setTokenKey = function (tokenKey) { this.tokenKey = tokenKey; };
    ApiProvider.prototype.setTokenSecret = function (tokenSecret) { this.tokenSecret = tokenSecret; };
    ApiProvider.prototype.setLogged = function (value) { this.logged = value; };
    ApiProvider.prototype.isLogged = function () { return this.logged; };
    ApiProvider.prototype.setUserId = function (userId) { this.userId = userId; };
    ApiProvider.prototype.getUserId = function () { return this.userId; };
    // == API REQUESTS ====================================================================
    // Obtain user info
    ApiProvider.prototype.getUserInfo = function () {
        var _this = this;
        var queries = this.oauthBasicQueries();
        var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('GET', this.settings.apiURL + 'wp-json/wp/v2/users/me', queries, this.settings.consumerSecret, this.tokenSecret);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries.oauth_timestamp + '",oauth_nonce="' + queries.oauth_nonce + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        return this.http.get(this.settings.apiURL + 'wp-json/wp/v2/users/me', { headers: headers })
            .map(function (res) {
            var userInfo = JSON.parse(res['_body']);
            _this.followingUsers = userInfo['follows'];
            return userInfo;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Obtain list of posts
    ApiProvider.prototype.getPostList = function (authenticated, queries) {
        var _this = this;
        // This ensures we receive a response without the whole content of the post
        queries['context'] = 'embed';
        queries['_embed'] = 'true';
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var search = this.serializeQueries(queries);
        if (authenticated) {
            queries['oauth_consumer_key'] = this.settings.consumerKey;
            queries['oauth_token'] = this.tokenKey;
            queries['oauth_signature_method'] = 'HMAC-SHA1';
            queries['oauth_timestamp'] = new String(new Date().getTime()).substr(0, 10);
            queries['oauth_nonce'] = this.generateNonce();
            queries['oauth_version'] = '1.0';
            var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('GET', this.settings.apiURL + 'wp-json/wp/v2/posts?' + search.toString(), queries, this.settings.consumerSecret, this.tokenSecret);
            headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        }
        return this.http.get(this.settings.apiURL + 'wp-json/wp/v2/posts?' + search.toString(), { headers: headers })
            .map(function (res) {
            var postList = JSON.parse(res['_body']);
            return postList;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Obtain post info
    ApiProvider.prototype.getPostInfo = function (postId, authenticated) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        if (authenticated) {
            var queries = this.oauthBasicQueries();
            var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('GET', this.settings.apiURL + 'wp-json/wp/v2/posts/' + postId, queries, this.settings.consumerSecret, this.tokenSecret);
            headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        }
        return this.http.get(this.settings.apiURL + 'wp-json/wp/v2/posts/' + postId, { headers: headers })
            .map(function (res) {
            var postInfo = JSON.parse(res['_body']);
            return postInfo;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Obtain post info
    ApiProvider.prototype.getAuthorInfo = function (authorId, authenticated) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        if (authenticated) {
            var queries = this.oauthBasicQueries();
            var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('GET', this.settings.apiURL + 'wp-json/rhs/v1/user/' + authorId, queries, this.settings.consumerSecret, this.tokenSecret);
            headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        }
        return this.http.get(this.settings.apiURL + 'wp-json/rhs/v1/user/' + authorId, { headers: headers })
            .map(function (res) {
            var authorInfo = JSON.parse(res['_body']);
            return authorInfo;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Obtain list of comments in post
    ApiProvider.prototype.getPostComments = function (postId, offset, authenticated) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var queries = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        queries['post'] = postId;
        queries['order'] = 'asc';
        queries['offset'] = '' + offset;
        queries['per_page'] = this.settings.commentsPerPage;
        var search = this.serializeQueries(queries);
        if (authenticated) {
            queries['oauth_consumer_key'] = this.settings.consumerKey;
            queries['oauth_token'] = this.tokenKey;
            queries['oauth_signature_method'] = 'HMAC-SHA1';
            queries['oauth_timestamp'] = new String(new Date().getTime()).substr(0, 10);
            queries['oauth_nonce'] = this.generateNonce();
            queries['oauth_version'] = '1.0';
            var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('GET', this.settings.apiURL + 'wp-json/wp/v2/comments?' + search.toString(), queries, this.settings.consumerSecret, this.tokenSecret);
            headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        }
        return this.http.get(this.settings.apiURL + 'wp-json/wp/v2/comments?' + search.toString(), { headers: headers })
            .map(function (res) {
            var commentList = JSON.parse(res['_body']);
            return commentList;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Obtain list of tags in post
    ApiProvider.prototype.getPostTags = function (postId, authenticated) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var queries = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        queries['post'] = postId;
        var search = this.serializeQueries(queries);
        if (authenticated) {
            queries['oauth_consumer_key'] = this.settings.consumerKey;
            queries['oauth_token'] = this.tokenKey;
            queries['oauth_signature_method'] = 'HMAC-SHA1';
            queries['oauth_timestamp'] = new String(new Date().getTime()).substr(0, 10);
            queries['oauth_nonce'] = this.generateNonce();
            queries['oauth_version'] = '1.0';
            var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('GET', this.settings.apiURL + 'wp-json/wp/v2/tags?' + search.toString(), queries, this.settings.consumerSecret, this.tokenSecret);
            headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        }
        return this.http.get(this.settings.apiURL + 'wp-json/wp/v2/tags?' + search.toString(), { headers: headers })
            .map(function (res) {
            var tagList = JSON.parse(res['_body']);
            return tagList;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Obtain list of tags in post
    ApiProvider.prototype.getPostCategories = function (postId, authenticated) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var queries = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        queries['post'] = postId;
        var search = this.serializeQueries(queries);
        if (authenticated) {
            queries['oauth_consumer_key'] = this.settings.consumerKey;
            queries['oauth_token'] = this.tokenKey;
            queries['oauth_signature_method'] = 'HMAC-SHA1';
            queries['oauth_timestamp'] = new String(new Date().getTime()).substr(0, 10);
            queries['oauth_nonce'] = this.generateNonce();
            queries['oauth_version'] = '1.0';
            var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('GET', this.settings.apiURL + 'wp-json/wp/v2/categories?' + search.toString(), queries, this.settings.consumerSecret, this.tokenSecret);
            headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        }
        return this.http.get(this.settings.apiURL + 'wp-json/wp/v2/categories?' + search.toString(), { headers: headers })
            .map(function (res) {
            var categoryList = JSON.parse(res['_body']);
            return categoryList;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Create comment on post
    ApiProvider.prototype.commentOnPost = function (postId, commentContent, parent) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var queries = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        queries['post'] = postId;
        queries['author'] = this.userId;
        queries['content'] = commentContent;
        if (parent !== 0) {
            queries['parent'] = parent;
        }
        ;
        var search = this.serializeQueries(queries);
        queries['oauth_consumer_key'] = this.settings.consumerKey;
        queries['oauth_token'] = this.tokenKey;
        queries['oauth_signature_method'] = 'HMAC-SHA1';
        queries['oauth_timestamp'] = new String(new Date().getTime()).substr(0, 10);
        queries['oauth_nonce'] = this.generateNonce();
        queries['oauth_version'] = '1.0';
        var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('POST', this.settings.apiURL + 'wp-json/wp/v2/comments?' + search.toString(), queries, this.settings.consumerSecret, this.tokenSecret);
        headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        return this.http.post(this.settings.apiURL + 'wp-json/wp/v2/comments?' + search.toString(), {}, { headers: headers })
            .map(function (res) {
            var commentResponse = JSON.parse(res['_body']);
            return commentResponse;
        })
            .catch(function (error) {
            console.log(error);
            return _this.handleError(error);
        });
    };
    // Edit comment on post
    ApiProvider.prototype.editCommentOnPost = function (postId, commentContent, commentId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var queries = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        queries['post'] = postId;
        queries['author'] = this.userId;
        queries['content'] = commentContent;
        var search = this.serializeQueries(queries);
        queries['oauth_consumer_key'] = this.settings.consumerKey;
        queries['oauth_token'] = this.tokenKey;
        queries['oauth_signature_method'] = 'HMAC-SHA1';
        queries['oauth_timestamp'] = new String(new Date().getTime()).substr(0, 10);
        queries['oauth_nonce'] = this.generateNonce();
        queries['oauth_version'] = '1.0';
        var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('PUT', this.settings.apiURL + 'wp-json/wp/v2/comments/' + commentId + '?' + search.toString(), queries, this.settings.consumerSecret, this.tokenSecret);
        headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        return this.http.put(this.settings.apiURL + 'wp-json/wp/v2/comments/' + commentId + '?' + search.toString(), {}, { headers: headers })
            .map(function (res) {
            var commentResponse = JSON.parse(res['_body']);
            return commentResponse;
        })
            .catch(function (error) {
            console.log(error);
            return _this.handleError(error);
        });
    };
    // Get a single comment
    ApiProvider.prototype.getComment = function (commentId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        return this.http.get(this.settings.apiURL + 'wp-json/wp/v2/comments/' + commentId, { headers: headers })
            .map(function (res) {
            var commentResponse = JSON.parse(res['_body']);
            return commentResponse;
        })
            .catch(function (error) {
            console.log(error);
            return _this.handleError(error);
        });
    };
    // Perform vote on Post
    ApiProvider.prototype.voteOnPost = function (postId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        if (this.isLogged()) {
            var queries = this.oauthBasicQueries();
            var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('POST', this.settings.apiURL + 'wp-json/rhs/v1/votes/' + postId, queries, this.settings.consumerSecret, this.tokenSecret);
            headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries.oauth_timestamp + '",oauth_nonce="' + queries.oauth_nonce + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        }
        return this.http.post(this.settings.apiURL + 'wp-json/rhs/v1/votes/' + postId, {}, { headers: headers })
            .map(function (res) {
            var voteResponse = JSON.parse(res['_body']);
            return voteResponse;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(JSON.parse(error['_body']));
        });
    };
    // Send device ID generated by OneSignal push service
    ApiProvider.prototype.sendPushDeviceID = function (pushDeviceId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        if (this.isLogged()) {
            var queries = this.oauthBasicQueries();
            var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('POST', this.settings.apiURL + 'wp-json/rhs/v1/user-device/' + pushDeviceId, queries, this.settings.consumerSecret, this.tokenSecret);
            headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries.oauth_timestamp + '",oauth_nonce="' + queries.oauth_nonce + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        }
        return this.http.post(this.settings.apiURL + 'wp-json/rhs/v1/user-device/' + pushDeviceId, {}, { headers: headers })
            .map(function (res) {
            var response = JSON.parse(res['_body']);
            return response;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(JSON.parse(error['_body']));
        });
    };
    // Desassociate device ID with user on server
    ApiProvider.prototype.deletePushDeviceID = function (pushDeviceId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        if (this.isLogged()) {
            var queries = this.oauthBasicQueries();
            var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('DELETE', this.settings.apiURL + 'wp-json/rhs/v1/user-device/' + pushDeviceId, queries, this.settings.consumerSecret, this.tokenSecret);
            headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries.oauth_timestamp + '",oauth_nonce="' + queries.oauth_nonce + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        }
        return this.http.delete(this.settings.apiURL + 'wp-json/rhs/v1/user-device/' + pushDeviceId, { headers: headers })
            .map(function (res) {
            var response = JSON.parse(res['_body']);
            return response;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(JSON.parse(error['_body']));
        });
    };
    // Obtain list of users
    ApiProvider.prototype.getUserList = function (authenticated, usersIds, queries) {
        var _this = this;
        // This ensures we receive a response without the whole content of the post
        queries['per_page'] = '20';
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var search = this.serializeQueries(queries);
        return this.http.get(this.settings.apiURL + 'wp-json/rhs/v1/user/include=' + usersIds + '&' + search.toString(), { headers: headers })
            .map(function (res) {
            var userListObj = JSON.parse(res['_body']);
            var userListArr = Object.keys(userListObj).map(function (key) {
                return userListObj[key];
            });
            return userListArr;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    ApiProvider.prototype.followUser = function (userId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        if (this.isLogged()) {
            var queries = this.oauthBasicQueries();
            var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('POST', this.settings.apiURL + 'wp-json/rhs/v1/follow/' + userId, queries, this.settings.consumerSecret, this.tokenSecret);
            headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries.oauth_timestamp + '",oauth_nonce="' + queries.oauth_nonce + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        }
        return this.http.post(this.settings.apiURL + 'wp-json/rhs/v1/follow/' + userId, {}, { headers: headers })
            .map(function (res) {
            _this.getUserInfo();
            return JSON.parse(res['_body']);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    ApiProvider.prototype.unFollowUser = function (userId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        if (this.isLogged()) {
            var queries = this.oauthBasicQueries();
            var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('DELETE', this.settings.apiURL + 'wp-json/rhs/v1/follow/' + userId, queries, this.settings.consumerSecret, this.tokenSecret);
            headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries.oauth_timestamp + '",oauth_nonce="' + queries.oauth_nonce + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        }
        return this.http.delete(this.settings.apiURL + 'wp-json/rhs/v1/follow/' + userId, { headers: headers })
            .map(function (res) {
            _this.getUserInfo();
            return JSON.parse(res['_body']);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Notifications list
    ApiProvider.prototype.getNotificationList = function (authenticated, page) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        if (authenticated) {
            var queries = this.oauthBasicQueries();
            var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('GET', this.settings.apiURL + 'wp-json/rhs/v1/notifications/' + this.userId + '/page=' + page, queries, this.settings.consumerSecret, this.tokenSecret);
            headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        }
        return this.http.get(this.settings.apiURL + 'wp-json/rhs/v1/notifications/' + this.userId + '/page=' + page, { headers: headers })
            .map(function (res) {
            var notificationList = JSON.parse(res['_body']);
            return notificationList;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Informs the server that user has entered the notification page
    ApiProvider.prototype.markNotificationsAsRead = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        if (this.isLogged()) {
            var queries = this.oauthBasicQueries();
            var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('POST', this.settings.apiURL + 'wp-json/rhs/v1/notifications/mark-all-read/' + this.userId, queries, this.settings.consumerSecret, this.tokenSecret);
            headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries.oauth_timestamp + '",oauth_nonce="' + queries.oauth_nonce + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        }
        return this.http.post(this.settings.apiURL + 'wp-json/rhs/v1/notifications/mark-all-read/' + this.userId, {}, { headers: headers })
            .map(function (res) {
            return JSON.parse(res['_body']);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Gets from server the amount of notifications unread
    ApiProvider.prototype.getUnreadNotificationsNumber = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        if (this.isLogged()) {
            var queries = this.oauthBasicQueries();
            var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('GET', this.settings.apiURL + 'wp-json/rhs/v1/notifications/unread-number/' + this.userId, queries, this.settings.consumerSecret, this.tokenSecret);
            headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries.oauth_timestamp + '",oauth_nonce="' + queries.oauth_nonce + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        }
        return this.http.get(this.settings.apiURL + 'wp-json/rhs/v1/notifications/unread-number/' + this.userId, { headers: headers })
            .map(function (res) {
            return JSON.parse(res['_body']);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Gets notifications type from server
    ApiProvider.prototype.getNotificationTypes = function (authenticated) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        if (authenticated) {
            var queries = this.oauthBasicQueries();
            var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('GET', this.settings.apiURL + 'wp-json/rhs/v1/notifications/types', queries, this.settings.consumerSecret, this.tokenSecret);
            headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_token="' + this.tokenKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + queries['oauth_timestamp'] + '",oauth_nonce="' + queries['oauth_nonce'] + '",oauth_version="1.0",oauth_signature="' + signature + '"');
        }
        return this.http.get(this.settings.apiURL + 'wp-json/rhs/v1/notifications/types', { headers: headers })
            .map(function (res) {
            var notificationTypes = JSON.parse(res['_body']);
            return notificationTypes;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // ==== UTILITIES  ======================================================================
    // Fowards error status.
    ApiProvider.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.status);
    };
    // Converte queries de uma hash de parâmetros em uma URLSearchParam
    ApiProvider.prototype.serializeQueries = function (obj) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var element = obj[key];
                params.set(key, element);
            }
        }
        return params;
    };
    ApiProvider.prototype.queryToObject = function (query) {
        return JSON.parse('{"' + decodeURI(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    };
    // Generates radom nonce
    ApiProvider.prototype.generateNonce = function () {
        var text = "";
        var length = 32;
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return btoa(text);
    };
    ApiProvider.prototype.oauthBasicQueries = function () {
        return {
            oauth_consumer_key: this.settings.consumerKey,
            oauth_token: this.tokenKey,
            oauth_signature_method: 'HMAC-SHA1',
            oauth_timestamp: new String(new Date().getTime()).substr(0, 10),
            oauth_nonce: this.generateNonce(),
            oauth_version: '1.0'
        };
    };
    return ApiProvider;
}());
ApiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsProvider */]])
], ApiProvider);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_oauth_signature__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_oauth_signature__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationProvider = (function () {
    function AuthenticationProvider(http, settings) {
        this.http = http;
        this.settings = settings;
        this.userLogged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    // Obtain temporary token credentials
    AuthenticationProvider.prototype.getTemporaryCredentials = function () {
        var _this = this;
        var parameters = {
            oauth_consumer_key: this.settings.consumerKey,
            oauth_nonce: this.generateNonce(),
            oauth_timestamp: new String(new Date().getTime()).substr(0, 10),
            oauth_signature_method: 'HMAC-SHA1',
            oauth_version: '1.0',
            oauth_callback: this.settings.callbackURL
        };
        var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('POST', this.settings.apiURL + 'oauth1/request', parameters, this.settings.consumerSecret);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + parameters.oauth_timestamp + '",oauth_nonce="' + parameters.oauth_nonce + '",oauth_version="1.0",oauth_signature="' + signature + '",oauth_callback="' + this.settings.callbackURL + '"');
        return this.http.post(this.settings.apiURL + 'oauth1/request', {}, { headers: headers })
            .map(function (res) {
            var temporaryCredentials = _this.queryToObject(res['_body']);
            return {
                oauthCallbackConfirmed: temporaryCredentials.oauth_callback_confirmed,
                oauthToken: temporaryCredentials.oauth_token,
                oauthTokenSecret: temporaryCredentials.oauth_token_secret
            };
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Obtain final token credentials
    AuthenticationProvider.prototype.getAccessCredentials = function (oauthToken, oauthTokenSecret, oauthVerifier) {
        var _this = this;
        var parameters = {
            oauth_verifier: oauthVerifier,
            oauth_consumer_key: this.settings.consumerKey,
            oauth_token: oauthToken,
            oauth_nonce: this.generateNonce(),
            oauth_timestamp: new String(new Date().getTime()).substr(0, 10),
            oauth_signature_method: 'HMAC-SHA1',
            oauth_version: '1.0'
        };
        var signature = __WEBPACK_IMPORTED_MODULE_5_oauth_signature___default.a.generate('GET', this.settings.apiURL + 'oauth1/access', parameters, this.settings.consumerSecret, oauthTokenSecret);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'OAuth oauth_consumer_key="' + this.settings.consumerKey +
            '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + parameters.oauth_timestamp +
            '",oauth_nonce="' + parameters.oauth_nonce + '",oauth_version="1.0",oauth_signature="' + signature +
            '",oauth_token="' + oauthToken + '"');
        console.log(this.settings.pushDeviceId);
        return this.http.get(this.settings.apiURL + 'oauth1/access?oauth_verifier=' + oauthVerifier, { headers: headers })
            .map(function (res) {
            var finalCredentials = _this.queryToObject(res['_body']);
            return {
                oauthToken: finalCredentials.oauth_token,
                oauthTokenSecret: finalCredentials.oauth_token_secret
            };
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // ==== UTILITIES  ======================================================================
    // Redirects errors in case of failed requests
    AuthenticationProvider.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.status);
    };
    // Converts query string to object
    AuthenticationProvider.prototype.queryToObject = function (query) {
        return JSON.parse('{"' + decodeURI(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    };
    // Generates radom nonce
    AuthenticationProvider.prototype.generateNonce = function () {
        var text = "";
        var length = 32;
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return btoa(text);
    };
    return AuthenticationProvider;
}());
AuthenticationProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsProvider */]])
], AuthenticationProvider);

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/comment/comment.module": [
		622,
		10
	],
	"../pages/following/following.module": [
		623,
		6
	],
	"../pages/intro/intro.module": [
		624,
		9
	],
	"../pages/login/login.module": [
		625,
		8
	],
	"../pages/notifications/notifications.module": [
		626,
		0
	],
	"../pages/post/post.module": [
		627,
		5
	],
	"../pages/posts/posts.module": [
		628,
		4
	],
	"../pages/profile/profile.module": [
		629,
		3
	],
	"../pages/search/search.module": [
		630,
		2
	],
	"../pages/settings/settings.module": [
		631,
		7
	],
	"../pages/user/user.module": [
		632,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 202;

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProvider; });
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

var UpdateProvider = (function () {
    function UpdateProvider() {
        this.maxOutdatePeriod = 300000; // 5 minutos
        this.homePostsOutdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.queuePostsOutdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.followingPostsOutdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    UpdateProvider.prototype.checkedHomePosts = function (timestamp) {
        var _this = this;
        clearInterval(this.timerHomePosts);
        this.timerHomePosts = setInterval(function () {
            if (Date.now() - timestamp > _this.maxOutdatePeriod) {
                _this.homePostsOutdated.emit();
            }
        }, this.maxOutdatePeriod);
    };
    UpdateProvider.prototype.checkedQueuePosts = function (timestamp) {
        var _this = this;
        clearInterval(this.timerQueuePosts);
        this.timerQueuePosts = setInterval(function () {
            if (Date.now() - timestamp > _this.maxOutdatePeriod) {
                _this.queuePostsOutdated.emit();
            }
        }, this.maxOutdatePeriod);
    };
    UpdateProvider.prototype.checkedFollowingPosts = function (timestamp) {
        var _this = this;
        clearInterval(this.timerFollowingPosts);
        this.timerFollowingPosts = setInterval(function () {
            if (Date.now() - timestamp > _this.maxOutdatePeriod) {
                _this.followingPostsOutdated.emit();
            }
        }, this.maxOutdatePeriod);
    };
    return UpdateProvider;
}());
UpdateProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UpdateProvider);

//# sourceMappingURL=update.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_intl__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_intl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_intl_locale_data_jsonp_en__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_intl_locale_data_jsonp_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_intl_locale_data_jsonp_en__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_module__ = __webpack_require__(286);




Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_onesignal__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_firebase_analytics__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_authentication_authentication__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_api_api__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_settings_settings__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_update_update__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {
                pageTransition: 'ios-transition',
                platforms: {
                    ios: {
                        backButtonText: 'Voltar'
                    }
                }
            }, {
                links: [
                    { loadChildren: '../pages/comment/comment.module#CommentPageModule', name: 'CommentPage', segment: 'comment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/following/following.module#FollowingPageModule', name: 'FollowingPage', segment: 'following', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/post/post.module#PostPageModule', name: 'PostPage', segment: 'post', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/posts/posts.module#PostsPageModule', name: 'PostsPage', segment: 'posts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user/user.module#ProfilePageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_update_update__["a" /* UpdateProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SettingsProvider = (function () {
    function SettingsProvider() {
        // Wordpress settings used by Authentication Service 
        //public apiURL: string = 'http://migracao.redehumanizasus.net/';
        //public callbackURL: string = 'http://migracao.redehumanizasus.net/api-login-callback';
        //public consumerKey: string = 'pF74Dog1YVvF';
        //public consumerSecret: string = 'EG3BBp4pFdfYuZvRx2bq1XGFPM4CxyGzF64sKxwujCMaaZ3s';
        // Wordpress settings used by Authentication Service 
        this.apiURL = 'http://redehumanizasus.net/';
        this.callbackURL = 'http://redehumanizasus.net/api-login-callback';
        this.consumerKey = 'UNzAxTFPs2Z7';
        this.consumerSecret = 'CEb2TiTcqE246oWh5qolUbORvjDHiqKEC2CfsHyOrDGtJPsB';
        // public apiURL: string = 'http://10.0.2.15/rhs/';
        // public callbackURL: string = 'http://10.0.2.15/rhs/api-login-callback';
        // public consumerKey: string = 'k18tusWAaBeB';
        // public consumerSecret: string = 'VatrIPO0K1tDNjgeSC0GppzM82M5Ksc0skmg4pu2rI3Nbp5E';
        // Post Page settings
        this.postContentFontSizeOptions = {
            'extra-small': '0.8em',
            'small': '1.0em',
            'medium': '1.12em',
            'large': '1.25em',
            'extra-large': '1.4em'
        };
        this.currentFontSize = 'medium';
        this.commentsPerPage = 20;
        // OneSignal Push Notification settings
        this.oneSignalAppId = '2ffdc133-6deb-43a1-8179-b8300e0b0f97';
        this.googleFCMProjectNumber = '185540114749';
        this.pushDeviceId = ''; // to be loaded from registration step during app initialization
        this.desiredNotifications = {};
        //Google Analytics settings
        this.googleAnalyticsTrackerId = 'UA-4336151-2';
    }
    return SettingsProvider;
}());
SettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], SettingsProvider);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_authentication_authentication__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_settings_settings__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_firebase_analytics__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage, authentication, api, loadingCtrl, network, toastCtrl, settings, oneSignal, analytics) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.authentication = authentication;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.settings = settings;
        this.oneSignal = oneSignal;
        this.analytics = analytics;
        // Page navigation
        this.rootPage = 'PostsPage';
        // Sidemenu User Info 
        this.showUserInfo = false;
        this.initializeApp();
        this.pages = [
            { title: 'Posts', component: 'PostsPage', icon: 'md-document' },
            { title: 'Meu Perfil', component: 'ProfilePage', icon: 'md-contact' },
            { title: 'Seguindo', component: 'FollowingPage', icon: 'logo-rss' },
            { title: 'Configurações', component: 'SettingsPage', icon: 'md-settings' },
        ];
        this.activePage = this.pages[0];
        // Watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            var toast = _this.toastCtrl.create({
                message: 'Conexão com a internet perdida... :(',
                duration: 6000
            });
            toast.present();
        });
        // Watch network for a connection
        this.network.onConnect().subscribe(function () {
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(function () {
                if (_this.network.type === '2g' || _this.network.type === '3g' || _this.network.type === 'cellular') {
                    var toast = _this.toastCtrl.create({
                        message: 'Conexão fraca. Carregamento pode demorar...',
                        duration: 3000
                    });
                    toast.present();
                }
            }, 3000);
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleLightContent();
            _this.statusBar.backgroundColorByHexString('042830');
            // Decides wheter the Intro page should be shown or not.
            _this.storage.get('introShown').then(function (result) {
                if (result) {
                    _this.rootPage = 'PostsPage';
                }
                else {
                    _this.rootPage = 'IntroPage';
                    _this.storage.set('introShown', true);
                }
                _this.splashScreen.hide();
            });
            // Checks on Storage if user is logged
            _this.storage.get('is_user_logged').then(function (result) {
                if (result) {
                    _this.api.setLogged(true);
                    _this.storage.get('oauth_token').then(function (value) {
                        _this.api.setTokenKey(value.key);
                        _this.api.setTokenSecret(value.secret);
                        _this.authentication.userLogged.emit(true);
                    });
                }
                else {
                    // Saves in Api Service, for using during requests.
                    _this.api.setLogged(false);
                    _this.api.setTokenKey(null);
                    _this.api.setTokenSecret(null);
                    // Informs subscribed ones (as the sidemenu and settings page) that user logged out.
                    _this.authentication.userLogged.emit(false);
                }
            });
            // Register for checking if user is logged 
            _this.authentication.userLogged.subscribe(function (value) {
                if (value === true) {
                    _this.loadUserInfo();
                }
                else {
                    _this.showUserInfo = false;
                }
            });
            // Loads post font size to settings service.
            _this.storage.get('article_font_size').then(function (result) {
                if (_this.settings.postContentFontSizeOptions[result]) {
                    _this.settings.currentFontSize = result;
                }
            });
            // Loads desired notifications status to settings service.
            _this.storage.get('desired_notifications').then(function (result) {
                if (result !== null && result !== undefined) {
                    _this.settings.desiredNotifications = result;
                }
            });
            // Load device push id to settings service.
            _this.storage.get('push_device_id').then(function (result) {
                if (result !== null && result !== undefined) {
                    _this.settings.pushDeviceId = result;
                }
                else {
                    _this.storage.set('push_device_id', _this.settings.pushDeviceId);
                }
            });
            if (_this.platform.is('cordova') || _this.platform.is('ios') || _this.platform.is('tablet') || _this.platform.is('phablet') || _this.platform.is('ipad') || _this.platform.is('iphone') || _this.platform.is('android')) {
                // Register notification and analytics service
                _this.setPushNotificationService();
                _this.analytics.setEnabled(true);
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.activePage = page;
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.goToLoginPage = function () {
        this.nav.push('LoginPage');
    };
    MyApp.prototype.loadUserInfo = function () {
        var _this = this;
        // Adds loading spinner 
        var loading = this.loadingCtrl.create({ content: 'Carregando...' });
        loading.present();
        this.api.getUserInfo().subscribe(function (userInfo) {
            _this.api.setUserId(userInfo.id);
            _this.user = userInfo;
            _this.showUserInfo = true;
            // Sets user id on Firebase Analytics using the device ID
            _this.analytics.setUserProperty('username', _this.user['name']);
        }, function (err) {
            console.log('Error ' + err + ' - On User Data Request.');
        }, function () { return loading.dismiss(); });
    };
    MyApp.prototype.setPushNotificationService = function () {
        var _this = this;
        this.oneSignal.startInit(this.settings.oneSignalAppId, this.settings.googleFCMProjectNumber);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(function (jsonData) {
            // Do something when notification is received
            console.log("Notificação Recebida");
            console.log(jsonData);
        });
        this.oneSignal.handleNotificationOpened().subscribe(function (jsonData) {
            // Do something when a notification is opened
            console.log("Notificação Aberta");
            console.log(jsonData);
            // If user clicked a button inside the notification
            if (jsonData.action.type > 0) {
                switch (jsonData.action.actionID) {
                    // Comentário feito em post
                    case 'open_comments_in_post':
                        _this.nav.push('CommentPage', { 'commentId': jsonData.notification.payload.additionalData['object_id'] });
                        break;
                    // Usuário que fez o comentário no post
                    case 'open_user_comments_in_post':
                        if (jsonData.notification.payload.additionalData['user_id'] == _this.api.getUserId()) {
                            _this.nav.push('ProfilePage');
                        }
                        else {
                            _this.nav.push('UserPage', { 'userId': jsonData.notification.payload.additionalData['user_id'] });
                        }
                        break;
                    // Novo post de um usuário seguido
                    case 'open_new_post_from_user':
                        _this.nav.push('PostPage', { 'postId': jsonData.notification.payload.additionalData['object_id'] });
                        break;
                    // Novo post de um usuário seguido
                    case 'open_post_new_post_from_user':
                        _this.nav.push('PostPage', { 'postId': jsonData.notification.payload.additionalData['object_id'] });
                        break;
                    // Usuário que publicou novo post
                    case 'open_user_new_post_from_user':
                        _this.nav.push('UserPage', { 'userId': jsonData.notification.payload.additionalData['user_id'] });
                        break;
                    // Novo ação em post sendo seguido
                    case 'open_post_followed':
                        _this.nav.push('PostPage', { 'postId': jsonData.notification.payload.additionalData['object_id'] });
                        break;
                    // Novo post do usuário foi seguido
                    case 'open_user_post_followed':
                        _this.nav.push('UserPage', { 'userId': jsonData.notification.payload.additionalData['user_id'] });
                        break;
                    // Novo contato respondido
                    case 'open_replied_ticket':
                        break;
                    // Novo usuário seguindo
                    case 'open_user_follow_author':
                        _this.nav.push('UserPage', { 'userId': jsonData.notification.payload.additionalData['user_id'] });
                        break;
                    // Novo post promovido
                    case 'open_post_promoted':
                        _this.nav.push('PostPage', { 'postId': jsonData.notification.payload.additionalData['object_id'] });
                        break;
                }
                // If user clicked the notification itself.
            }
            else {
                _this.nav.push('NotificationsPage');
            }
        });
        this.oneSignal.getIds().then(function (value) {
            if (value.userId !== null && value.userId !== undefined) {
                _this.settings.pushDeviceId = value.userId;
                _this.storage.set('push_device_id', _this.settings.pushDeviceId);
                // Sets user id on Firebase Analytics using the device ID
                _this.analytics.setUserId(_this.settings.pushDeviceId);
            }
        }).catch(function (error) { return console.log(error); });
        this.oneSignal.endInit();
        this.oneSignal.setSubscription(true);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/orpheus/rhs-app/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header class="user-info">\n    <ion-toolbar *ngIf="!showUserInfo" color="secondary">\n      <h4>Você não está logado</h4>\n      <button menuClose ion-button color="primary" (click)="goToLoginPage()">ENTRAR NA RHS</button>\n    </ion-toolbar>\n    <ion-toolbar *ngIf="showUserInfo" color="secondary">\n      <div class="user-info">\n        <img [src]="user[\'avatar_urls\'][96]"> \n        <h3>{{ user[\'name\'] }}</h3>\n        <ion-grid>\n          <ion-row nowrap>\n            <ion-col>\n              {{ user[\'total_posts\'] }}  \n              <!--<ion-icon color="primary" name="document"></ion-icon>-->\n              <br>\n              Posts\n            </ion-col>\n            <ion-col>\n              {{ user[\'total_votes\'] }} \n              <br>\n              Votos\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="menuToggle">\n    <ion-list>\n      <button menuClose ion-item [ngClass]="{\'active-menu-item\': p == activePage}" *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{ p.icon }}"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n    <div class="rhs-watermark"><img alt="RHS-watermark" height="36" src="./assets/images/logo-rhs-watermark.png"/></div>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>'/*ion-inline-end:"/home/orpheus/rhs-app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_7__providers_authentication_authentication__["a" /* AuthenticationProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_9__providers_settings_settings__["a" /* SettingsProvider */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[277]);
//# sourceMappingURL=main.js.map