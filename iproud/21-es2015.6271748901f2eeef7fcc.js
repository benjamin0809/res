(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{NTit:function(t,n,e){"use strict";e.r(n);var l=e("8Y7J");class i{}var s=e("pMnS"),r=e("oBZk"),o=e("ZZ/e"),c=e("zptn"),u=e("J33J"),a=e("SVse"),h=e("TSSN"),b=e("mrSG"),d=e("hAUF"),v=e("6m4Z"),g=e("o0su"),m=(e("Q1LM"),e("bbBs")),p=e("7glZ");class f extends p.b{constructor(t,n,e,l,i,s,r){super(r,t,n,d.b.MyPage,s,[5,6]),this.element=t,this.cd=n,this.modal=e,this.socialProvider=l,this.storage=i,this.session=s,this.native=r,this.achievementList=[],super.init(this.content)}ngOnInit(){this.getAchievementByStorage(),this.getAchievement()}ngAfterViewChecked(){super.afterViewChecked(".container")}openAchieve(t){return b.b(this,void 0,void 0,(function*(){const n=yield this.modal.create({component:m.a,componentProps:t,cssClass:"achieveitem-backdrop"});yield n.present()}))}getAchievement(){this.socialProvider.getAchievements().subscribe(t=>{t&&t.result?this.achievementList.length===t.result.length?t.result.forEach((t,n)=>{t.elementId=this.achievementList[n].elementId,g.a.isEqualsObject(t,this.achievementList[n])||(this.achievementList[n]=t)}):this.achievementList=t.result:this.achievementList=[],this.storage.setItem(this.session.userId+":achievement",this.achievementList),this.achievementList=super.createData(this.achievementList)})}getAchievementByStorage(){const t=Object.create(null,{createData:{get:()=>super.createData}});return b.b(this,void 0,void 0,(function*(){const n=yield this.storage.getItem(this.session.userId+":achievement");n&&(this.achievementList=n,this.achievementList=t.createData.call(this,this.achievementList))}))}}var C=e("yrhi"),O=e("n90K"),_=e("ZwiA"),x=l.pb({encapsulation:0,styles:[[".scroll-toolbar[_ngcontent-%COMP%]{min-height:36px;padding:0}.scroll-toolbar[_ngcontent-%COMP%]   .toolbar-background[_ngcontent-%COMP%]{height:36px}.scroll-zoom-wrapper[_ngcontent-%COMP%]{height:100%}.scrollx-container[_ngcontent-%COMP%]{border-bottom:1.5px solid var(--border-primary-color);min-height:36px;display:-webkit-box;display:flex;justify-content:space-around;height:100%}.scrollx-container[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{margin:0 10px;display:block;padding:5px;white-space:nowrap;text-align:center;color:var(--text-primary-color);line-height:44px}.scrollx-container[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{border-bottom:1.5px solid #1a83d4;font-size:1.6rem;font-weight:700}.last-item[_ngcontent-%COMP%]{height:98%}.container[_ngcontent-%COMP%]   .div-title[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;font-family:Microsoft JhengHei}.container[_ngcontent-%COMP%]   .garyscale[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-filter:grayscale(100%);filter:grayscale(100%);opacity:.5}.container[_ngcontent-%COMP%]   .garyscale[_ngcontent-%COMP%]   .achieve-name[_ngcontent-%COMP%]{color:#424242!important}.container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-color:transparent}.container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:7.6rem}.container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .achieve-name[_ngcontent-%COMP%]{padding:5px 0 10px;font-size:1.4rem;display:block;color:#2594ff;font-weight:700}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-child{--min-height:44px}"]],data:{}});function S(t){return l.Lb(0,[(t()(),l.rb(0,0,null,null,3,"ion-toolbar",[["class","scroll-toolbar"]],null,null,null,r.hc,r.db)),l.qb(1,49152,null,0,o.Eb,[l.h,l.k,l.x],null,null),(t()(),l.rb(2,0,null,0,1,"app-scroll-toolbar",[["name","category"]],null,[[null,"emitter"]],(function(t,n,e){var l=!0;return"emitter"===n&&(l=!1!==t.component.receiveVal(e)&&l),l}),c.b,c.a)),l.qb(3,770048,null,0,u.a,[l.k,l.h],{categories:[0,"categories"],TopId:[1,"TopId"],scrollTop:[2,"scrollTop"],scrollHeight:[3,"scrollHeight"],clientHeight:[4,"clientHeight"],name:[5,"name"]},{emitter:"emitter"})],(function(t,n){var e=n.component;t(n,3,0,e.achievementList,e.topId,e.scrollTop,e.scrollHeight,e.clientHeight,"category")}),null)}function P(t){return l.Lb(0,[(t()(),l.rb(0,0,null,null,9,"ion-col",[["class","ion-text-center col"],["size","4"]],null,null,null,r.qb,r.m)),l.qb(1,49152,null,0,o.v,[l.h,l.k,l.x],{size:[0,"size"]},null),(t()(),l.rb(2,0,null,0,7,"button",[["class","ion-text-center button"]],null,[[null,"click"]],(function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.openAchieve(t.context.$implicit)&&l),l}),null,null)),l.Gb(512,null,a.v,a.w,[l.q,l.r,l.k,l.B]),l.qb(4,278528,null,0,a.h,[a.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Fb(5,{garyscale:0}),(t()(),l.rb(6,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(t()(),l.rb(7,0,null,null,0,"br",[],null,null,null,null,null)),(t()(),l.rb(8,0,null,null,1,"span",[["class","achieve-name"]],null,null,null,null,null)),(t()(),l.Jb(9,null,["",""]))],(function(t,n){t(n,1,0,"4");var e=t(n,5,0,!n.context.$implicit.isTake);t(n,4,0,"ion-text-center button",e)}),(function(t,n){t(n,6,0,n.context.$implicit.iconUrl),t(n,9,0,n.context.$implicit.name)}))}function E(t){return l.Lb(0,[(t()(),l.rb(0,0,null,null,0,"div",[["class","divider"]],null,null,null,null,null))],null,null)}function k(t){return l.Lb(0,[(t()(),l.rb(0,0,null,null,13,"div",[["class","container"]],[[8,"id",0]],null,null,null,null)),l.Gb(512,null,a.v,a.w,[l.q,l.r,l.k,l.B]),l.qb(2,278528,null,0,a.h,[a.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(t()(),l.rb(3,0,null,null,2,"div",[["class","ion-padding-top div-title ion-text-center"]],null,null,null,null,null)),(t()(),l.rb(4,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),l.Jb(5,null,["",""])),(t()(),l.rb(6,0,null,null,5,"ion-grid",[["class","achievelist"]],null,null,null,r.vb,r.r)),l.qb(7,49152,null,0,o.C,[l.h,l.k,l.x],null,null),(t()(),l.rb(8,0,null,0,3,"ion-row",[],null,null,null,r.Pb,r.L)),l.qb(9,49152,null,0,o.lb,[l.h,l.k,l.x],null,null),(t()(),l.gb(16777216,null,0,1,null,P)),l.qb(11,278528,null,0,a.i,[l.M,l.J,l.q],{ngForOf:[0,"ngForOf"]},null),(t()(),l.gb(16777216,null,null,1,null,E)),l.qb(13,16384,null,0,a.j,[l.M,l.J],{ngIf:[0,"ngIf"]},null)],(function(t,n){var e=n.component;t(n,2,0,"container",n.context.index==e.achievementList.length-1?"last-item":""),t(n,11,0,n.context.$implicit.medals),t(n,13,0,n.context.index!=e.achievementList.length-1)}),(function(t,n){t(n,0,0,n.context.$implicit.id),t(n,5,0,n.context.$implicit.description)}))}function I(t){return l.Lb(0,[l.Hb(671088640,1,{content:0}),(t()(),l.rb(1,0,null,null,14,"ion-header",[],null,null,null,r.wb,r.s)),l.qb(2,49152,null,0,o.D,[l.h,l.k,l.x],null,null),(t()(),l.rb(3,0,null,0,10,"ion-toolbar",[],null,null,null,r.hc,r.db)),l.qb(4,49152,null,0,o.Eb,[l.h,l.k,l.x],null,null),(t()(),l.rb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.jb,r.f)),l.qb(6,49152,null,0,o.n,[l.h,l.k,l.x],null,null),(t()(),l.rb(7,0,null,0,2,"ion-back-button",[["text",""]],null,[[null,"click"]],(function(t,n,e){var i=!0;return"click"===n&&(i=!1!==l.Db(t,9).onClick(e)&&i),i}),r.gb,r.c)),l.qb(8,49152,null,0,o.i,[l.h,l.k,l.x],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),l.qb(9,16384,null,0,o.j,[[2,o.kb],o.Lb],{defaultHref:[0,"defaultHref"]},null),(t()(),l.rb(10,0,null,0,3,"ion-title",[],null,null,null,r.fc,r.bb)),l.qb(11,49152,null,0,o.Cb,[l.h,l.k,l.x],null,null),(t()(),l.Jb(12,0,["",""])),l.Eb(131072,h.j,[h.k,l.h]),(t()(),l.gb(16777216,null,0,1,null,S)),l.qb(15,16384,null,0,a.j,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(t()(),l.rb(16,0,null,null,3,"ion-content",[],null,[[null,"ionScroll"]],(function(t,n,e){var l=!0;return"ionScroll"===n&&(l=!1!==t.component.scrollEvent(e)&&l),l}),r.rb,r.n)),l.qb(17,49152,[[1,4]],0,o.w,[l.h,l.k,l.x],{scrollEvents:[0,"scrollEvents"]},null),(t()(),l.gb(16777216,null,0,1,null,k)),l.qb(19,278528,null,0,a.i,[l.M,l.J,l.q],{ngForOf:[0,"ngForOf"]},null)],(function(t,n){var e=n.component;t(n,8,0,e.defaultUrl,""),t(n,9,0,e.defaultUrl),t(n,15,0,e.achievementList&&e.achievementList.length>0),t(n,17,0,!0),t(n,19,0,e.achievementList)}),(function(t,n){t(n,12,0,l.Kb(n,12,0,l.Db(n,13).transform("SOCIAL_ACHIEVEMENT_TITLE")))}))}function R(t){return l.Lb(0,[(t()(),l.rb(0,0,null,null,1,"page-achievement",[],null,null,null,I,x)),l.qb(1,8503296,null,0,f,[l.k,l.h,o.Kb,C.a,O.a,_.a,v.a],null,null)],(function(t,n){t(n,1,0)}),null)}var L=l.nb("page-achievement",f,R,{},{},[]),M=e("s7LF"),T=e("iInd"),B=e("j1ZV");e.d(n,"AchievementPageModuleNgFactory",(function(){return y}));var y=l.ob(i,[],(function(t){return l.Ab([l.Bb(512,l.j,l.Z,[[8,[s.a,L]],[3,l.j],l.v]),l.Bb(4608,a.l,a.k,[l.s,[2,a.A]]),l.Bb(4608,o.c,o.c,[l.x,l.g]),l.Bb(4608,o.Kb,o.Kb,[o.c,l.j,l.p]),l.Bb(4608,o.Ob,o.Ob,[o.c,l.j,l.p]),l.Bb(4608,M.r,M.r,[]),l.Bb(4608,M.d,M.d,[]),l.Bb(4608,h.g,h.f,[]),l.Bb(4608,h.c,h.e,[]),l.Bb(4608,h.i,h.d,[]),l.Bb(4608,h.b,h.a,[]),l.Bb(4608,h.k,h.k,[h.l,h.g,h.c,h.i,h.b,h.m,h.n]),l.Bb(5120,l.d,(function(t,n,e){return[o.Ub(t,n,e)]}),[o.Tb,a.c,l.x]),l.Bb(1073742336,T.n,T.n,[[2,T.t],[2,T.m]]),l.Bb(1073742336,h.h,h.h,[]),l.Bb(1073742336,a.b,a.b,[]),l.Bb(1073742336,o.Gb,o.Gb,[]),l.Bb(1073742336,M.q,M.q,[]),l.Bb(1073742336,M.h,M.h,[]),l.Bb(1073742336,M.o,M.o,[]),l.Bb(1073742336,B.a,B.a,[]),l.Bb(1073742336,i,i,[]),l.Bb(256,h.n,void 0,[]),l.Bb(256,h.m,void 0,[]),l.Bb(256,o.Tb,void 0,[]),l.Bb(1024,T.k,(function(){return[[{path:"",component:f}]]}),[])])}))},TDSW:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var l=e("mrSG"),i=e("hAUF"),s=e("ZOGp"),r=e("YsCg"),o=e("93YN");class c{constructor(t,n,e,l,i,s){this.modalCtrl=t,this.authProvider=n,this.navCtrl=e,this.router=l,this.translateService=i,this.nativeService=s}doSelectCountry(){return new Promise((t,n)=>l.b(this,void 0,void 0,(function*(){const e=yield this.modalCtrl.create({component:o.a,componentProps:{isNeedAll:!0}});e.onDidDismiss().then(n=>{t(n.data)}).catch(t=>{n(t)}),yield e.present()})))}SendSecurityCode(t){return new Promise((n,e)=>l.b(this,void 0,void 0,(function*(){this.authProvider.SendSecurityCode2(t).subscribe(t=>{n("")},t=>{n(t)})})))}LoginByWFAccount(t){return new Promise((n,e)=>l.b(this,void 0,void 0,(function*(){this.authProvider.LoginByWFAccount2(t).subscribe(t=>{this.setTabsToRoot()},t=>{n(t)})})))}Login(t){return new Promise((n,e)=>l.b(this,void 0,void 0,(function*(){this.authProvider.Login2(t).subscribe(t=>{this.setTabsToRoot()},t=>{n(t)})})))}login(t,n,e,i){return new Promise((e,i)=>l.b(this,void 0,void 0,(function*(){switch(t){case r.j.SendSecurityCodeBefore:this.authProvider.SendSecurityCode2(n).subscribe(t=>{e("")},t=>{e(t)});break;case r.j.LoginByWFAccountBefore:this.authProvider.LoginByWFAccount2(n).subscribe(t=>{this.setTabsToRoot()},t=>{e(t)});break;case r.j.LoginByMobileBefore:this.authProvider.Login2(n).subscribe(t=>{this.setTabsToRoot()},t=>{e(t)})}})))}setTabsToRoot(){this.router.navigate([i.b.HomePage],{replaceUrl:!0})}verificationErrorHandle(t,n){return t.errcode===s.a.USER.INCORRECT_VERIFICATION_CODE?this.translateService.instant("VERIFICATION_CODE_INCORRECT")+";"+Date.now():t.errcode===s.a.USER.VERIFICATION_CODE_EXPIRED?this.translateService.instant("VERIFICATION_CODE_EXPIRED")+";"+Date.now():void this.loginError(t)}loginError(t){let n="";switch(t.errcode){case s.a.USER.INACTIVE_USER:n="ACCOUNT_LOCKED";break;case s.a.USER.USER_NOT_EXIST:n="LOGIN_ERROR_USER_NOT_EXIST";break;case s.a.USER.MOBILE_NOT_EXIST:n="LOGIN_ERROR_PHONE_NUMBER_NOT_EXIST";break;case s.a.USER.INCORRECT_ACCOUNT_AND_PASSWORD:case s.a.USER.INCORRECT_PASSWORD:n="LOGIN_ERROR_INCORRECT_PASSWORD";break;default:n="LOGIN_ERROR"}this.nativeService.alert(t.errcode+","+this.translateService.instant(n))}}},mGGX:function(t,n,e){"use strict";var l=e("TDSW");e("mrSG"),e("wqKC"),e("93YN");class i{constructor(t,n){this.session=t,this.nativeService=n}ionViewWillEnter(){this.session.isDarkMode||this.nativeService.setStyleLightContent()}ionViewWillLeave(){this.nativeService.statusBarStyle(this.session.isDarkMode)}}e.d(n,"i",(function(){return r})),e.d(n,"a",(function(){return o})),e.d(n,"e",(function(){return c})),e.d(n,"b",(function(){return u})),e.d(n,"f",(function(){return h})),e.d(n,"h",(function(){return b})),e.d(n,"g",(function(){return d})),e.d(n,"c",(function(){return g})),e.d(n,"d",(function(){return p}));const s=t=>{let n={};const e=t.getCurrentNavigation().extras;return e&&e.state&&(n=e.state),n},r=(t,n)=>{let e=t||n.previousUrl;return n&&(e=n.previousUrl),e};class o{constructor(t){this.events=t}scrollWidth(t,n){return{width:t||window.screen.availWidth-5+"px",height:(n||44)+"px"}}completeRefresh(t){t&&t.target.complete()}completedoInfinite(t){t&&t.target.complete()}}class c{constructor(t,n){this.paramUrl=t,this.session=n,this.defaultUrl="",this.defaultUrl=r(t,this.session)}}class u{constructor(t){this.router=t,this.params=s(t)}}class a extends o{constructor(t,n){super(n),this.router=t,this.events=n,this.params=s(t)}}class h extends o{constructor(t,n,e){super(n),this.paramUrl=t,this.events=n,this.session=e,this.defaultUrl="",this.defaultUrl=r(t,e)}}class b extends c{constructor(t,n,e){super(n,e),this.router=t,this.paramUrl=n,this.session=e,this.defaultUrl="",this.params=s(t)}}class d extends a{constructor(t,n,e,l){super(t,e),this.router=t,this.paramUrl=n,this.events=e,this.session=l,this.defaultUrl="",this.defaultUrl=r(n,this.session)}}class v extends i{constructor(t,n,e){super(n,e),this.router=t,this.session=n,this.nativeService=e,this.params=s(t)}}class g extends v{constructor(t,n,e,l){super(t,n,e),this.router=t,this.session=n,this.nativeService=e,this.paramUrl=l,this.defaultUrl=r(l,n)}}class m extends l.a{constructor(t,n,e,l,i,r){super(n,e,l,t,i,r),this.router=t,this.modalCtrl=n,this.authProvider=e,this.navCtrl=l,this.translateService=i,this.nativeService=r,this.params=s(t)}}class p extends m{constructor(t,n,e,l,i,o,c,u){super(t,n,e,l,i,o),this.router=t,this.modalCtrl=n,this.authProvider=e,this.navCtrl=l,this.translateService=i,this.nativeService=o,this.paramUrl=c,this.session=u,this.params=s(t),this.defaultUrl=r(c,u)}}}}]);