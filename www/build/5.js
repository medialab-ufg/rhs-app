webpackJsonp([5],{539:function(n,l,u){"use strict";function e(n){return f._28(0,[(n()(),f._5(0,null,null,1,"information",[],null,null,null,g.b,g.a)),f._4(49152,null,0,d.a,[],{message:[0,"message"],detail:[1,"detail"]},null)],function(n,l){n(l,1,0,"Você não está logado na RHS","Use o Menu lateral para entrar na Rede.")},null)}function t(n){return f._28(0,[(n()(),f._5(0,null,null,2,"div",[],null,null,null,null,null)),(n()(),f._5(0,null,null,1,"ion-spinner",[["class","center-spinner"]],[[2,"spinner-paused",null]],null,null,p.b,p.a)),f._4(114688,null,0,h.a,[b.a,f.k,f.F],null,null)],function(n,l){n(l,2,0)},function(n,l){n(l,1,0,f._18(l,2)._paused)})}function o(n){return f._28(0,[(n()(),f._5(0,null,null,4,"div",[],null,null,null,null,null)),(n()(),f._26(null,["\n          "])),(n()(),f._5(0,null,null,1,"information",[],null,null,null,g.b,g.a)),f._4(49152,null,0,d.a,[],{message:[0,"message"]},null),(n()(),f._26(null,["\n        "]))],function(n,l){n(l,3,0,"Você ainda não está seguindo nenhum usuário.")},null)}function i(n){return f._28(0,[(n()(),f._5(0,null,null,19,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.goToUserPage(n.context.$implicit.data.id)&&e),e},m.b,m.a)),f._4(1097728,null,3,k.a,[v.a,b.a,f.k,f.F,[2,w.a]],null,null),f._24(335544320,2,{contentLabel:0}),f._24(603979776,3,{_buttons:1}),f._24(603979776,4,{_icons:1}),f._4(16384,null,0,F.a,[],null,null),(n()(),f._26(2,["\n            "])),(n()(),f._5(0,null,0,4,"ion-avatar",[["item-start",""]],null,null,null,null,null)),f._4(16384,null,0,P.a,[],null,null),(n()(),f._26(null,["\n              "])),(n()(),f._5(0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),f._26(null,["\n            "])),(n()(),f._26(2,["\n            "])),(n()(),f._5(0,null,2,1,"h2",[["color","secondary"]],null,null,null,null,null)),(n()(),f._26(null,["",""])),(n()(),f._26(2,["\n            "])),(n()(),f._5(0,null,4,2,"button",[["color","danger"],["ion-button",""],["item-end",""]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.stopButton(u,n.context.index)&&e),e},y.b,y.a)),f._4(1097728,[[3,4]],0,I.a,[[8,""],b.a,f.k,f.F],{color:[0,"color"]},null),(n()(),f._26(0,["Parar"])),(n()(),f._26(2,["\n          "]))],function(n,l){n(l,17,0,"danger")},function(n,l){n(l,10,0,f._9(1,"",l.context.$implicit.data.avatar_urls[48],"")),n(l,14,0,l.context.$implicit.data.name)})}function r(n){return f._28(0,[(n()(),f._5(0,null,null,4,"div",[],null,null,null,null,null)),(n()(),f._26(null,["\n          "])),(n()(),f._1(16777216,null,null,1,null,i)),f._4(802816,null,0,M.h,[f.P,f.M,f.s],{ngForOf:[0,"ngForOf"]},null),(n()(),f._26(null,["\n          \n        "]))],function(n,l){n(l,3,0,l.component.userList)},null)}function a(n){return f._28(0,[(n()(),f._5(0,null,null,8,"ion-list",[],null,null,null,null,null)),f._4(16384,null,0,x.a,[b.a,f.k,f.F,L.a,T.l,C.a],null,null),(n()(),f._26(null,["\n        "])),(n()(),f._1(16777216,null,null,1,null,o)),f._4(16384,null,0,M.i,[f.P,f.M],{ngIf:[0,"ngIf"]},null),(n()(),f._26(null,["\n        "])),(n()(),f._1(16777216,null,null,1,null,r)),f._4(16384,null,0,M.i,[f.P,f.M],{ngIf:[0,"ngIf"]},null),(n()(),f._26(null,["\n      "]))],function(n,l){var u=l.component;n(l,4,0,0==u.userList.length&&!u.showSpinner),n(l,7,0,0!=u.userList.length&&!u.showSpinner)},null)}function s(n){return f._28(0,[(n()(),f._5(0,null,null,21,"ion-header",[],null,null,null,null,null)),f._4(16384,null,0,U.a,[b.a,f.k,f.F,[2,R.a]],null,null),(n()(),f._26(null,["\n\n  "])),(n()(),f._5(0,null,null,16,"ion-navbar",[["class","toolbar"],["color","secondary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,O.b,O.a)),f._4(49152,null,0,S.a,[B.a,[2,R.a],[2,V.a],b.a,f.k,f.F],{color:[0,"color"]},null),(n()(),f._26(3,["\n    "])),(n()(),f._5(0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==f._18(n,8).toggle()&&e),e},y.b,y.a)),f._4(1097728,[[1,4]],0,I.a,[[8,""],b.a,f.k,f.F],null,null),f._4(1064960,null,0,z.a,[j.a,[2,R.a],[2,I.a],[2,S.a]],{menuToggle:[0,"menuToggle"]},null),f._4(16384,null,1,N.a,[b.a,f.k,f.F,[2,A.a],[2,S.a]],null,null),f._24(603979776,1,{_buttons:1}),(n()(),f._26(0,["\n      "])),(n()(),f._5(0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),f._4(147456,null,0,D.a,[b.a,f.k,f.F],{name:[0,"name"]},null),(n()(),f._26(0,["\n    "])),(n()(),f._26(3,["\n    "])),(n()(),f._5(0,null,3,2,"ion-title",[],null,null,null,E.b,E.a)),f._4(49152,null,0,Q.a,[b.a,f.k,f.F,[2,A.a],[2,S.a]],null,null),(n()(),f._26(0,["Seguindo"])),(n()(),f._26(3,["\n  "])),(n()(),f._26(null,["\n\n"])),(n()(),f._26(null,["\n\n"])),(n()(),f._26(null,["\n\n"])),(n()(),f._5(0,null,null,28,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,H.b,H.a)),f._4(4374528,null,0,q.a,[b.a,L.a,C.a,f.k,f.F,B.a,$.a,f.z,[2,R.a],[2,V.a]],null,null),(n()(),f._26(1,["\n\n    "])),(n()(),f._5(0,null,2,6,"ion-refresher",[["pullMin","100"]],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,l,u){var e=!0;return"ionRefresh"===l&&(e=!1!==n.component.doRefresh(u)&&e),e},null,null)),f._4(212992,null,0,K.a,[L.a,q.a,f.z,T.l],{pullMin:[0,"pullMin"]},{ionRefresh:"ionRefresh"}),(n()(),f._26(null,["\n    "])),(n()(),f._5(0,null,null,2,"ion-refresher-content",[["pullingText","Puxe e solte para atualizar."],["refreshingText","Carregando dados..."]],[[1,"state",0]],null,null,Y.b,Y.a)),f._4(114688,null,0,Z.a,[K.a,b.a],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(n()(),f._26(null,["\n    "])),(n()(),f._26(null,["\n    "])),(n()(),f._26(1,["\n\n "])),(n()(),f._26(1,["\n      "])),(n()(),f._1(16777216,null,1,1,null,e)),f._4(16384,null,0,M.i,[f.P,f.M],{ngIf:[0,"ngIf"]},null),(n()(),f._26(1,["\n      "])),(n()(),f._1(16777216,null,1,1,null,t)),f._4(16384,null,0,M.i,[f.P,f.M],{ngIf:[0,"ngIf"]},null),(n()(),f._26(1,["\n      "])),(n()(),f._1(16777216,null,1,1,null,a)),f._4(16384,null,0,M.i,[f.P,f.M],{ngIf:[0,"ngIf"]},null),(n()(),f._26(1,["\n\n      "])),(n()(),f._5(0,null,1,5,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(n,l,u){var e=!0;return"ionInfinite"===l&&(e=!1!==u.waitFor(n.component.doInfinite())&&e),e},null,null)),f._4(1196032,null,0,J.a,[q.a,f.z,f.k,C.a],{enabled:[0,"enabled"]},{ionInfinite:"ionInfinite"}),(n()(),f._26(null,["\n        "])),(n()(),f._5(0,null,null,1,"ion-infinite-scroll-content",[],[[1,"state",0]],null,null,G.b,G.a)),f._4(114688,null,0,W.a,[J.a,b.a],null,null),(n()(),f._26(null,["\n      "])),(n()(),f._26(1,["\n      \n  "])),(n()(),f._26(1,["\n\n"])),(n()(),f._26(null,["\n"]))],function(n,l){var u=l.component;n(l,4,0,"secondary");n(l,8,0,"");n(l,13,0,"menu");n(l,27,0,"100");n(l,30,0,"Puxe e solte para atualizar.","Carregando dados..."),n(l,36,0,!u.isUserLogged),n(l,39,0,u.showSpinner&&!u.loadingFromRefresher),n(l,42,0,u.isUserLogged&&"people"==u.followingView),n(l,45,0,"posts"===u.followingView?!u.noMoreResultsOnHome:!u.noMoreResultsOnPeople),n(l,48,0)},function(n,l){n(l,3,0,f._18(l,4)._hidden,f._18(l,4)._sbPadding),n(l,6,0,f._18(l,8).isHidden),n(l,12,0,f._18(l,13)._hidden),n(l,23,0,f._18(l,24).statusbarPadding,f._18(l,24)._hasRefresher),n(l,26,0,"inactive"!==f._18(l,27).state,f._18(l,27)._top),n(l,29,0,f._18(l,30).r.state),n(l,47,0,f._18(l,48).inf.state)})}Object.defineProperty(l,"__esModule",{value:!0});u(1),u(134),u(68),u(70),u(66);var _=function(){function n(n,l,u,e,t,o,i){var r=this;this.navCtrl=n,this.navParams=l,this.api=u,this.authentication=e,this.alertCtrl=t,this.toastCtrl=o,this.analytics=i,this.followingView="people",this.postList=new Array,this.userList=new Array,this.postQueries={},this.userQueries={},this.showSpinner=!1,this.isUserLogged=!1,this.loadingFromRefresher=!1,this.noMoreResultsOnPosts=!1,this.noMoreResultsOnPeople=!1,this.isUserLogged=this.api.isLogged(),this.authentication.userLogged.subscribe(function(n){!0===n&&(r.isUserLogged=r.api.isLogged(),"posts"==r.followingView?r.loadPosts(!1):r.loadUsers(!1))})}return n.prototype.ionViewDidLoad=function(){!0===this.api.isLogged()&&("posts"==this.followingView?this.loadPosts(!1):this.loadUsers(!1))},n.prototype.ionViewDidEnter=function(){this.analytics.setCurrentScreen("Following").then(function(n){return console.log(n)}).catch(function(n){return console.error(n)})},n.prototype.loadPosts=function(n){},n.prototype.loadUsers=function(n){var l=this;return this.showSpinner=!0,new Promise(function(u){if(!1===n?(l.userList=new Array,l.userQueries.page="1"):!0===n?l.userQueries.page=Number(l.userQueries.page)+1+"":0===l.userList.length&&(l.showSpinner=!0,l.userQueries.page="1"),l.api.followingUsers.length>0){var e=String(l.api.followingUsers.join(","));l.api.getUserList(!0,e,l.userQueries).subscribe(function(n){l.userList=l.userList.concat(n),console.log(l.userList),l.noMoreResultsOnPeople=!1},function(n){400===n&&(l.noMoreResultsOnPeople=!0),console.log("Error "+n+" - On User Data Request.")},function(){l.showSpinner=!1,l.loadingFromRefresher=!1,u()})}else l.showSpinner=!1,l.authentication.userLogged.subscribe(function(u){!0===u&&(l.isUserLogged=!0,l.loadUsers(n))})})},n.prototype.doRefresh=function(n){this.loadingFromRefresher=!0,this.loadUsers(!1).then(function(){return n.complete()})},n.prototype.doInfinite=function(){var n=this;return new Promise(function(l){n.loadUsers(!0).then(function(){return l()})})},n.prototype.goToUserPage=function(n){this.navCtrl.push("UserPage",{userId:n})},n.prototype.stopButton=function(n,l){var u=this;n.stopPropagation(),this.alertCtrl.create({title:"Deseja parar de seguir este usuário?",message:"Você deixará de receber notificações quando ele publicar um post novo.",buttons:[{text:"Cancelar",handler:function(n){}},{text:"Parar",handler:function(n){u.unFollowUser(l)}}]}).present()},n.prototype.unFollowUser=function(n){var l=this;this.api.unFollowUser(this.userList[n].data.id).subscribe(function(u){l.userList.splice(n,1),l.api.followingUsers.splice(n,1),l.toastCtrl.create({message:"Você deixou de seguir este usuário",duration:3e3}).present()},function(n){console.log("Error "+n+" on follow user request.")})},n}(),c=(u(1),u(134),u(552),function(){return function(){}}()),f=u(1),g=u(554),d=u(549),p=u(222),h=u(69),b=u(2),m=u(223),k=u(38),v=u(27),w=u(57),F=u(102),P=u(140),y=u(67),I=u(25),M=u(22),x=u(107),L=u(8),T=u(11),C=u(13),U=u(103),R=u(9),O=u(550),S=u(56),B=u(12),V=u(32),z=u(143),j=u(26),N=u(139),A=u(46),D=u(45),E=u(551),Q=u(135),H=u(229),q=u(28),$=u(34),K=u(108),Y=u(558),Z=u(141),J=u(101),G=u(555),W=u(136),X=u(23),nn=u(66),ln=u(70),un=u(110),en=u(72),tn=u(68),on=f._3({encapsulation:2,styles:[],data:{}}),rn=f._2("page-following",_,function(n){return f._28(0,[(n()(),f._5(0,null,null,1,"page-following",[],null,null,null,s,on)),f._4(49152,null,0,_,[V.a,X.a,nn.a,ln.a,un.a,en.a,tn.a],null,null)],null,null)},{},{},[]);u.d(l,"FollowingPageModuleNgFactory",function(){return vn});var an=u(1),sn=u(22),_n=u(33),cn=u(137),fn=u(552),gn=u(224),dn=u(225),pn=u(226),hn=u(227),bn=u(228),mn=u(138),kn=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var u in l)l.hasOwnProperty(u)&&(n[u]=l[u])};return function(l,u){function e(){this.constructor=l}n(l,u),l.prototype=null===u?Object.create(u):(e.prototype=u.prototype,new e)}}(),vn=new an.w(function(n){function l(l){return n.call(this,l,[gn.a,dn.a,pn.a,hn.a,bn.a,rn],[])||this}return kn(l,n),Object.defineProperty(l.prototype,"_NgLocalization_8",{get:function(){return null==this.__NgLocalization_8&&(this.__NgLocalization_8=new sn.j(this.parent.get(an.u))),this.__NgLocalization_8},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_9",{get:function(){return null==this.__ɵi_9&&(this.__ɵi_9=new _n.o),this.__ɵi_9},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_FormBuilder_10",{get:function(){return null==this.__FormBuilder_10&&(this.__FormBuilder_10=new _n.c),this.__FormBuilder_10},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new sn.b,this._ɵba_1=new _n.n,this._FormsModule_2=new _n.f,this._ReactiveFormsModule_3=new _n.l,this._IonicModule_4=new cn.a,this._IonicPageModule_5=new cn.b,this._InformationComponentModule_6=new fn.a,this._FollowingPageModule_7=new c,this._LAZY_LOADED_TOKEN_11=_,this._FollowingPageModule_7},l.prototype.getInternal=function(n,l){return n===sn.b?this._CommonModule_0:n===_n.n?this._ɵba_1:n===_n.f?this._FormsModule_2:n===_n.l?this._ReactiveFormsModule_3:n===cn.a?this._IonicModule_4:n===cn.b?this._IonicPageModule_5:n===fn.a?this._InformationComponentModule_6:n===c?this._FollowingPageModule_7:n===sn.k?this._NgLocalization_8:n===_n.o?this._ɵi_9:n===_n.c?this._FormBuilder_10:n===mn.a?this._LAZY_LOADED_TOKEN_11:l},l.prototype.destroyInternal=function(){},l}(an._0),c)},549:function(n,l,u){"use strict";u.d(l,"a",function(){return e});u(1);var e=function(){return function(){}}()},550:function(n,l,u){"use strict";function e(n){return t._28(0,[(n()(),t._5(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),t._4(278528,null,0,o.g,[t.s,t.t,t.k,t.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),t._5(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.backButtonClick(u)&&e),e},r.b,r.a)),t._4(278528,null,0,o.g,[t.s,t.t,t.k,t.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._4(1097728,null,0,a.a,[[8,"bar-button"],s.a,t.k,t.F],null,null),(n()(),t._5(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t._4(278528,null,0,o.g,[t.s,t.t,t.k,t.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._4(147456,null,0,_.a,[s.a,t.k,t.F],{name:[0,"name"]},null),(n()(),t._5(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),t._4(278528,null,0,o.g,[t.s,t.t,t.k,t.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),t._26(null,["",""])),t._17(null,0),t._17(null,1),t._17(null,2),(n()(),t._5(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),t._4(278528,null,0,o.g,[t.s,t.t,t.k,t.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._17(null,3)],function(n,l){var u=l.component;n(l,1,0,"toolbar-background","toolbar-background-"+u._mode);n(l,3,0,"back-button","back-button-"+u._mode);n(l,6,0,"back-button-icon","back-button-icon-"+u._mode),n(l,7,0,u._bbIcon);n(l,9,0,"back-button-text","back-button-text-"+u._mode);n(l,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(n,l){var u=l.component;n(l,2,0,u._hideBb),n(l,5,0,t._18(l,7)._hidden),n(l,10,0,u._backText)})}u.d(l,"a",function(){return d}),l.b=e;var t=u(1),o=u(22),i=u(56),r=u(67),a=u(25),s=u(2),_=u(45),c=u(12),f=u(9),g=u(32),d=t._3({encapsulation:2,styles:[],data:{}});t._2("ion-navbar",i.a,function(n){return t._28(0,[(n()(),t._5(0,null,null,1,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,e,d)),t._4(49152,null,0,i.a,[c.a,[2,f.a],[2,g.a],s.a,t.k,t.F],null,null)],null,function(n,l){n(l,0,0,t._18(l,1)._hidden,t._18(l,1)._sbPadding)})},{color:"color",mode:"mode",hideBackButton:"hideBackButton"},{},["[menuToggle],ion-buttons[left]","ion-buttons[start]","ion-buttons[end],ion-buttons[right]","*"])},551:function(n,l,u){"use strict";function e(n){return t._28(2,[(n()(),t._5(0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t._4(278528,null,0,o.g,[t.s,t.t,t.k,t.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._17(null,0)],function(n,l){n(l,1,0,"toolbar-title","toolbar-title-"+l.component._mode)},null)}u.d(l,"a",function(){return _}),l.b=e;var t=u(1),o=u(22),i=u(135),r=u(2),a=u(46),s=u(56),_=t._3({encapsulation:2,styles:[],data:{}});t._2("ion-title",i.a,function(n){return t._28(0,[(n()(),t._5(0,null,null,1,"ion-title",[],null,null,null,e,_)),t._4(49152,null,0,i.a,[r.a,t.k,t.F,[2,a.a],[2,s.a]],null,null)],null,null)},{color:"color",mode:"mode"},{},["*"])},552:function(n,l,u){"use strict";u.d(l,"a",function(){return e});u(1),u(134),u(549);var e=function(){return function(){}}()},554:function(n,l,u){"use strict";function e(n){return t._28(0,[(n()(),t._5(0,null,null,9,"div",[["class","slide-in-animate"],["text-center",""]],null,null,null,null,null)),(n()(),t._26(null,["\n  "])),(n()(),t._5(0,null,null,0,"img",[["src","./assets/logo-rhs.svg"]],null,null,null,null,null)),(n()(),t._26(null,["\n  "])),(n()(),t._5(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t._26(null,["",""])),(n()(),t._26(null,["\n  "])),(n()(),t._5(0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),t._26(null,["",""])),(n()(),t._26(null,["\n"])),(n()(),t._26(null,["\n"]))],null,function(n,l){var u=l.component;n(l,5,0,u.message),n(l,8,0,u.detail)})}u.d(l,"a",function(){return i}),l.b=e;var t=u(1),o=u(549),i=t._3({encapsulation:2,styles:[],data:{}});t._2("information",o.a,function(n){return t._28(0,[(n()(),t._5(0,null,null,1,"information",[],null,null,null,e,i)),t._4(49152,null,0,o.a,[],null,null)],null,null)},{message:"message",detail:"detail"},{},[])},555:function(n,l,u){"use strict";function e(n){return i._28(0,[(n()(),i._5(0,null,null,2,"div",[["class","infinite-loading-spinner"]],null,null,null,null,null)),(n()(),i._5(0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,r.b,r.a)),i._4(114688,null,0,a.a,[s.a,i.k,i.F],{name:[0,"name"]},null)],function(n,l){n(l,2,0,l.component.loadingSpinner)},function(n,l){n(l,1,0,i._18(l,2)._paused)})}function t(n){return i._28(0,[(n()(),i._5(0,null,null,0,"div",[["class","infinite-loading-text"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.component.loadingText)})}function o(n){return i._28(0,[(n()(),i._5(0,null,null,4,"div",[["class","infinite-loading"]],null,null,null,null,null)),(n()(),i._1(16777216,null,null,1,null,e)),i._4(16384,null,0,_.i,[i.P,i.M],{ngIf:[0,"ngIf"]},null),(n()(),i._1(16777216,null,null,1,null,t)),i._4(16384,null,0,_.i,[i.P,i.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,2,0,u.loadingSpinner),n(l,4,0,u.loadingText)},null)}u.d(l,"a",function(){return g}),l.b=o;var i=u(1),r=u(222),a=u(69),s=u(2),_=u(22),c=u(136),f=u(101),g=i._3({encapsulation:2,styles:[],data:{}});i._2("ion-infinite-scroll-content",c.a,function(n){return i._28(0,[(n()(),i._5(0,null,null,1,"ion-infinite-scroll-content",[],[[1,"state",0]],null,null,o,g)),i._4(114688,null,0,c.a,[f.a,s.a],null,null)],function(n,l){n(l,1,0)},function(n,l){n(l,0,0,i._18(l,1).inf.state)})},{loadingSpinner:"loadingSpinner",loadingText:"loadingText"},{},[])},558:function(n,l,u){"use strict";function e(n){return r._28(0,[(n()(),r._5(0,null,null,2,"div",[["class","refresher-pulling-icon"]],null,null,null,null,null)),(n()(),r._5(0,null,null,1,"ion-icon",[["role","img"]],[[2,"hide",null]],null,null,null,null)),r._4(147456,null,0,a.a,[s.a,r.k,r.F],{name:[0,"name"]},null)],function(n,l){n(l,2,0,l.component.pullingIcon)},function(n,l){n(l,1,0,r._18(l,2)._hidden)})}function t(n){return r._28(0,[(n()(),r._5(0,null,null,0,"div",[["class","refresher-pulling-text"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.component.pullingText)})}function o(n){return r._28(0,[(n()(),r._5(0,null,null,0,"div",[["class","refresher-refreshing-text"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.component.refreshingText)})}function i(n){return r._28(0,[(n()(),r._5(0,null,null,4,"div",[["class","refresher-pulling"]],null,null,null,null,null)),(n()(),r._1(16777216,null,null,1,null,e)),r._4(16384,null,0,_.i,[r.P,r.M],{ngIf:[0,"ngIf"]},null),(n()(),r._1(16777216,null,null,1,null,t)),r._4(16384,null,0,_.i,[r.P,r.M],{ngIf:[0,"ngIf"]},null),(n()(),r._5(0,null,null,5,"div",[["class","refresher-refreshing"]],null,null,null,null,null)),(n()(),r._5(0,null,null,2,"div",[["class","refresher-refreshing-icon"]],null,null,null,null,null)),(n()(),r._5(0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,c.b,c.a)),r._4(114688,null,0,f.a,[s.a,r.k,r.F],{name:[0,"name"]},null),(n()(),r._1(16777216,null,null,1,null,o)),r._4(16384,null,0,_.i,[r.P,r.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,2,0,u.pullingIcon),n(l,4,0,u.pullingText),n(l,8,0,u.refreshingSpinner),n(l,10,0,u.refreshingText)},function(n,l){n(l,7,0,r._18(l,8)._paused)})}u.d(l,"a",function(){return p}),l.b=i;var r=u(1),a=u(45),s=u(2),_=u(22),c=u(222),f=u(69),g=u(141),d=u(108),p=r._3({encapsulation:2,styles:[],data:{}});r._2("ion-refresher-content",g.a,function(n){return r._28(0,[(n()(),r._5(0,null,null,1,"ion-refresher-content",[],[[1,"state",0]],null,null,i,p)),r._4(114688,null,0,g.a,[d.a,s.a],null,null)],function(n,l){n(l,1,0)},function(n,l){n(l,0,0,r._18(l,1).r.state)})},{pullingIcon:"pullingIcon",pullingText:"pullingText",refreshingSpinner:"refreshingSpinner",refreshingText:"refreshingText"},{},[])}});