(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{TDSW:function(n,t,l){"use strict";l.d(t,"a",(function(){return u}));var e=l("mrSG"),s=l("hAUF"),i=l("ZOGp"),r=l("YsCg"),o=l("93YN");class u{constructor(n,t,l,e,s,i){this.modalCtrl=n,this.authProvider=t,this.navCtrl=l,this.router=e,this.translateService=s,this.nativeService=i}doSelectCountry(){return new Promise((n,t)=>e.b(this,void 0,void 0,(function*(){const l=yield this.modalCtrl.create({component:o.a,componentProps:{isNeedAll:!0}});l.onDidDismiss().then(t=>{n(t.data)}).catch(n=>{t(n)}),yield l.present()})))}SendSecurityCode(n){return new Promise((t,l)=>e.b(this,void 0,void 0,(function*(){this.authProvider.SendSecurityCode2(n).subscribe(n=>{t("")},n=>{t(n)})})))}LoginByWFAccount(n){return new Promise((t,l)=>e.b(this,void 0,void 0,(function*(){this.authProvider.LoginByWFAccount2(n).subscribe(n=>{this.setTabsToRoot()},n=>{t(n)})})))}Login(n){return new Promise((t,l)=>e.b(this,void 0,void 0,(function*(){this.authProvider.Login2(n).subscribe(n=>{this.setTabsToRoot()},n=>{t(n)})})))}login(n,t,l,s){return new Promise((l,s)=>e.b(this,void 0,void 0,(function*(){switch(n){case r.j.SendSecurityCodeBefore:this.authProvider.SendSecurityCode2(t).subscribe(n=>{l("")},n=>{l(n)});break;case r.j.LoginByWFAccountBefore:this.authProvider.LoginByWFAccount2(t).subscribe(n=>{this.setTabsToRoot()},n=>{l(n)});break;case r.j.LoginByMobileBefore:this.authProvider.Login2(t).subscribe(n=>{this.setTabsToRoot()},n=>{l(n)})}})))}setTabsToRoot(){this.router.navigate([s.b.HomePage],{replaceUrl:!0})}verificationErrorHandle(n,t){return n.errcode===i.a.USER.INCORRECT_VERIFICATION_CODE?this.translateService.instant("VERIFICATION_CODE_INCORRECT")+";"+Date.now():n.errcode===i.a.USER.VERIFICATION_CODE_EXPIRED?this.translateService.instant("VERIFICATION_CODE_EXPIRED")+";"+Date.now():void this.loginError(n)}loginError(n){let t="";switch(n.errcode){case i.a.USER.INACTIVE_USER:t="ACCOUNT_LOCKED";break;case i.a.USER.USER_NOT_EXIST:t="LOGIN_ERROR_USER_NOT_EXIST";break;case i.a.USER.MOBILE_NOT_EXIST:t="LOGIN_ERROR_PHONE_NUMBER_NOT_EXIST";break;case i.a.USER.INCORRECT_ACCOUNT_AND_PASSWORD:case i.a.USER.INCORRECT_PASSWORD:t="LOGIN_ERROR_INCORRECT_PASSWORD";break;default:t="LOGIN_ERROR"}this.nativeService.alert(n.errcode+","+this.translateService.instant(t))}}},mGGX:function(n,t,l){"use strict";var e=l("TDSW");l("mrSG"),l("wqKC"),l("93YN");class s{constructor(n,t){this.session=n,this.nativeService=t}ionViewWillEnter(){this.session.isDarkMode||this.nativeService.setStyleLightContent()}ionViewWillLeave(){this.nativeService.statusBarStyle(this.session.isDarkMode)}}l.d(t,"i",(function(){return r})),l.d(t,"a",(function(){return o})),l.d(t,"e",(function(){return u})),l.d(t,"b",(function(){return a})),l.d(t,"f",(function(){return h})),l.d(t,"h",(function(){return b})),l.d(t,"g",(function(){return d})),l.d(t,"c",(function(){return p})),l.d(t,"d",(function(){return v}));const i=n=>{let t={};const l=n.getCurrentNavigation().extras;return l&&l.state&&(t=l.state),t},r=(n,t)=>{let l=n||t.previousUrl;return t&&(l=t.previousUrl),l};class o{constructor(n){this.events=n}scrollWidth(n,t){return{width:n||window.screen.availWidth-5+"px",height:(t||44)+"px"}}completeRefresh(n){n&&n.target.complete()}completedoInfinite(n){n&&n.target.complete()}}class u{constructor(n,t){this.paramUrl=n,this.session=t,this.defaultUrl="",this.defaultUrl=r(n,this.session)}}class a{constructor(n){this.router=n,this.params=i(n)}}class c extends o{constructor(n,t){super(t),this.router=n,this.events=t,this.params=i(n)}}class h extends o{constructor(n,t,l){super(t),this.paramUrl=n,this.events=t,this.session=l,this.defaultUrl="",this.defaultUrl=r(n,l)}}class b extends u{constructor(n,t,l){super(t,l),this.router=n,this.paramUrl=t,this.session=l,this.defaultUrl="",this.params=i(n)}}class d extends c{constructor(n,t,l,e){super(n,l),this.router=n,this.paramUrl=t,this.events=l,this.session=e,this.defaultUrl="",this.defaultUrl=r(t,this.session)}}class g extends s{constructor(n,t,l){super(t,l),this.router=n,this.session=t,this.nativeService=l,this.params=i(n)}}class p extends g{constructor(n,t,l,e){super(n,t,l),this.router=n,this.session=t,this.nativeService=l,this.paramUrl=e,this.defaultUrl=r(e,t)}}class f extends e.a{constructor(n,t,l,e,s,r){super(t,l,e,n,s,r),this.router=n,this.modalCtrl=t,this.authProvider=l,this.navCtrl=e,this.translateService=s,this.nativeService=r,this.params=i(n)}}class v extends f{constructor(n,t,l,e,s,o,u,a){super(n,t,l,e,s,o),this.router=n,this.modalCtrl=t,this.authProvider=l,this.navCtrl=e,this.translateService=s,this.nativeService=o,this.paramUrl=u,this.session=a,this.params=i(n),this.defaultUrl=r(u,a)}}},u8b9:function(n,t,l){"use strict";l.r(t);var e=l("8Y7J");class s{}var i=l("pMnS"),r=l("oBZk"),o=l("ZZ/e"),u=l("TSSN"),a=l("s7LF"),c=l("SVse"),h=l("hAUF"),b=(l("o0su"),l("Q1LM"),l("riPR")),d=l("mGGX");class g extends d.e{constructor(n,t,l,e,s,i,r,o,u){super(h.b.HomePage,t),this.navCtrl=n,this.session=t,this.userProvider=l,this.authProvider=e,this.nativeService=s,this.eventsService=i,this.formBuilder=r,this.translateService=o,this.modalCtrl=u,this.isForgetPwd=!1,this.session.isForgetPwd&&(this.isForgetPwd=!0,this.session.isForgetPwd=!1),this.word="",this.tipsId="tips",this.tipsIdes="tips",this.isConfirmPass=!1,this.isCorrect=!1,this.textColr="defoult",this.reminder=this.translateService.instant("SET_PASSWORD_RULE"),this.aStr=[this.translateService.instant("SET_PASSWORD_COEFFICIENT1"),this.translateService.instant("SET_PASSWORD_COEFFICIENT2"),"","",""],null!=this.session.user&&(this.currentUser=this.session.user),this.form=r.group({newPassword:["",a.p.required],confirmPassword:["",a.p.required]}),this.isReadyToSave=!1,this.form.valueChanges.subscribe(n=>{this.form.valid&&this.veryfy()})}ngOnInit(){if(this.form.value.newPassword.length<1)return;const n=this.checkStrong(this.form.value.newPassword);if(this.form.value.newPassword.length>=8){switch(n){case 0:this.word=this.aStr[0],this.tipsId="tips";break;case 1:this.word=this.aStr[1],this.tipsId="tips0";break;case 2:this.word=this.aStr[2],this.tipsId="tips1";break;case 3:this.word=this.aStr[2],this.tipsId="tips2";break;case 4:this.word=this.aStr[2],this.tipsId="tips3"}n>=2?(this.tipsIdes="tips0",this.isConfirmPass=!0,this.textColr="defoult"):this.textColr="status"}else this.textColr=n>=2?"place":"invalid",this.isConfirmPass=!1,this.word="",this.tipsId="tips",this.tipsIdes="tips",this.wordes="";this.isCorrect=!1,this.veryfy()}checkStrong(n){let t=0;return/\d/.test(n)&&t++,/[a-z]/.test(n)&&t++,/[A-Z]/.test(n)&&t++,/\W/.test(n)&&t++,t}veryfy(){this.form.value.confirmPassword===this.form.value.newPassword?(this.wordes=this.word,this.tipsIdes=this.tipsId,this.isCorrect=!0,this.isReadyToSave=!0):(this.tipsIdes="tips0",this.isCorrect=!1,this.isReadyToSave=!1)}submit(){this.form.valid&&(this.form.value.confirmPassword===this.form.value.newPassword?this.authProvider.setPassword({password:this.form.value.newPassword.toString()}).subscribe(n=>{this.userProvider.getUserInfo().subscribe(()=>{this.navCtrl.back()})}):this.nativeService.alert(this.translateService.instant("SET_PASSWORD_CONFIRM_INVLID")))}}var p=l("ZwiA"),f=l("GAO8"),v=l("/nCp"),m=l("6m4Z"),C=e.pb({encapsulation:0,styles:[[".tips[_ngcontent-%COMP%]   #tips[_ngcontent-%COMP%]{color:#030000;margin-right:2px;line-height:20px;text-align:center}.tips[_ngcontent-%COMP%]   #tips0[_ngcontent-%COMP%]{color:#f00606;margin-right:2px;line-height:20px;text-align:center}.tips[_ngcontent-%COMP%]   #tips1[_ngcontent-%COMP%]{color:green;margin-right:2px;line-height:20px;text-align:center}.tips[_ngcontent-%COMP%]   #tips2[_ngcontent-%COMP%]{color:#3df305;margin-right:2px;line-height:20px;text-align:center}.tips[_ngcontent-%COMP%]   #tips3[_ngcontent-%COMP%]{color:#f0d806;margin-right:2px;line-height:20px;text-align:center}#defoult[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%], #defoult[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{color:green;margin-right:2px;line-height:20px;text-align:center}#place[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%]{color:#f30930;margin-right:2px;line-height:20px;text-align:center}#place[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%], #status[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%]{color:green;margin-right:2px;line-height:20px;text-align:center}#invalid[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%], #invalid[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%], #status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{color:#fc0909;margin-right:2px;line-height:20px;text-align:center}"]],data:{}});function S(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,4,"ion-buttons",[["slot","start"]],null,null,null,r.jb,r.f)),e.qb(1,49152,null,0,o.n,[e.h,e.k,e.x],null,null),(n()(),e.rb(2,0,null,0,2,"ion-back-button",[["text",""]],null,[[null,"click"]],(function(n,t,l){var s=!0;return"click"===t&&(s=!1!==e.Db(n,4).onClick(l)&&s),s}),r.gb,r.c)),e.qb(3,49152,null,0,o.i,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),e.qb(4,16384,null,0,o.j,[[2,o.kb],o.Lb],{defaultHref:[0,"defaultHref"]},null)],(function(n,t){var l=t.component;n(t,3,0,l.defaultUrl,""),n(t,4,0,l.defaultUrl)}),null)}function P(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"ion-icon",[["name","checkmark-circle"],["slot","end"]],[[8,"id",0]],null,null,r.xb,r.t)),e.qb(1,49152,null,0,o.E,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,t){n(t,1,0,"checkmark-circle")}),(function(n,t){n(t,0,0,e.vb(1,"",t.component.tipsId,""))}))}function I(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"ion-icon",[["name","checkmark-circle"],["slot","end"]],[[8,"id",0]],null,null,r.xb,r.t)),e.qb(1,49152,null,0,o.E,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,t){n(t,1,0,"checkmark-circle")}),(function(n,t){n(t,0,0,e.vb(1,"",t.component.tipsIdes,""))}))}function x(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"ion-icon",[["name","close-circle-outline"],["slot","end"]],[[8,"id",0]],null,null,r.xb,r.t)),e.qb(1,49152,null,0,o.E,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,t){n(t,1,0,"close-circle-outline")}),(function(n,t){n(t,0,0,e.vb(1,"",t.component.tipsIdes,""))}))}function _(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,19,"ion-item",[["class","tips"],["lines","full"]],null,null,null,r.Fb,r.y)),e.qb(1,49152,null,0,o.J,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.rb(2,0,null,0,3,"ion-label",[["position","floating"]],null,null,null,r.Gb,r.C)),e.qb(3,49152,null,0,o.P,[e.h,e.k,e.x],{position:[0,"position"]},null),(n()(),e.Jb(4,0,["",""])),e.Eb(131072,u.j,[u.k,e.h]),(n()(),e.rb(6,0,null,0,6,"ion-input",[["formControlName","confirmPassword"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup"],[null,"ionBlur"],[null,"ionChange"]],(function(n,t,l){var s=!0,i=n.component;return"ionBlur"===t&&(s=!1!==e.Db(n,8)._handleBlurEvent(l.target)&&s),"ionChange"===t&&(s=!1!==e.Db(n,8)._handleInputEvent(l.target)&&s),"keyup"===t&&(s=!1!==i.veryfy()&&s),s}),r.Bb,r.x)),e.qb(7,49152,null,0,o.I,[e.h,e.k,e.x],{type:[0,"type"]},null),e.qb(8,16384,null,0,o.Rb,[e.k],null,null),e.Gb(1024,null,a.i,(function(n){return[n]}),[o.Rb]),e.qb(10,671744,null,0,a.f,[[3,a.b],[8,null],[8,null],[6,a.i],[2,a.s]],{name:[0,"name"]},null),e.Gb(2048,null,a.j,null,[a.f]),e.qb(12,16384,null,0,a.k,[[4,a.j]],null,null),(n()(),e.gb(16777216,null,0,1,null,I)),e.qb(14,16384,null,0,c.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,x)),e.qb(16,16384,null,0,c.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(17,0,null,0,2,"ion-icon",[["slot","end"],["style","font-size: 18px;"]],[[8,"id",0]],null,null,r.xb,r.t)),e.qb(18,49152,null,0,o.E,[e.h,e.k,e.x],null,null),(n()(),e.Jb(19,0,["",""]))],(function(n,t){var l=t.component;n(t,1,0,"full"),n(t,3,0,"floating"),n(t,7,0,"password"),n(t,10,0,"confirmPassword"),n(t,14,0,l.isCorrect),n(t,16,0,!l.isCorrect)}),(function(n,t){var l=t.component;n(t,4,0,e.Kb(t,4,0,e.Db(t,5).transform("CHANGE_PASSWORD_CONFIRM"))),n(t,6,0,e.Db(t,12).ngClassUntouched,e.Db(t,12).ngClassTouched,e.Db(t,12).ngClassPristine,e.Db(t,12).ngClassDirty,e.Db(t,12).ngClassValid,e.Db(t,12).ngClassInvalid,e.Db(t,12).ngClassPending),n(t,17,0,e.vb(1,"",l.tipsIdes,"")),n(t,19,0,l.wordes)}))}function O(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,32,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,t,l){var s=!0,i=n.component;return"submit"===t&&(s=!1!==e.Db(n,2).onSubmit(l)&&s),"reset"===t&&(s=!1!==e.Db(n,2).onReset()&&s),"ngSubmit"===t&&(s=!1!==i.submit()&&s),s}),null,null)),e.qb(1,16384,null,0,a.t,[],null,null),e.qb(2,540672,null,0,a.g,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Gb(2048,null,a.b,null,[a.g]),e.qb(4,16384,null,0,a.l,[[4,a.b]],null,null),(n()(),e.rb(5,0,null,null,22,"ion-list",[],null,null,null,r.Ib,r.D)),e.qb(6,49152,null,0,o.Q,[e.h,e.k,e.x],null,null),(n()(),e.rb(7,0,null,0,17,"ion-item",[["class","tips"],["lines","inset"]],null,null,null,r.Fb,r.y)),e.qb(8,49152,null,0,o.J,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.rb(9,0,null,0,3,"ion-label",[["position","floating"]],null,null,null,r.Gb,r.C)),e.qb(10,49152,null,0,o.P,[e.h,e.k,e.x],{position:[0,"position"]},null),(n()(),e.Jb(11,0,["",""])),e.Eb(131072,u.j,[u.k,e.h]),(n()(),e.rb(13,0,null,0,6,"ion-input",[["formControlName","newPassword"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup"],[null,"ionBlur"],[null,"ionChange"]],(function(n,t,l){var s=!0,i=n.component;return"ionBlur"===t&&(s=!1!==e.Db(n,15)._handleBlurEvent(l.target)&&s),"ionChange"===t&&(s=!1!==e.Db(n,15)._handleInputEvent(l.target)&&s),"keyup"===t&&(s=!1!==i.ngOnInit()&&s),s}),r.Bb,r.x)),e.qb(14,49152,null,0,o.I,[e.h,e.k,e.x],{type:[0,"type"]},null),e.qb(15,16384,null,0,o.Rb,[e.k],null,null),e.Gb(1024,null,a.i,(function(n){return[n]}),[o.Rb]),e.qb(17,671744,null,0,a.f,[[3,a.b],[8,null],[8,null],[6,a.i],[2,a.s]],{name:[0,"name"]},null),e.Gb(2048,null,a.j,null,[a.f]),e.qb(19,16384,null,0,a.k,[[4,a.j]],null,null),(n()(),e.gb(16777216,null,0,1,null,P)),e.qb(21,16384,null,0,c.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(22,0,null,0,2,"ion-icon",[["slot","end"],["style","font-size: 18px;"]],[[8,"id",0]],null,null,r.xb,r.t)),e.qb(23,49152,null,0,o.E,[e.h,e.k,e.x],null,null),(n()(),e.Jb(24,0,["",""])),(n()(),e.gb(16777216,null,0,1,null,_)),e.qb(26,16384,null,0,c.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(27,0,null,0,0,"p",[["class","ion-padding-start"]],[[8,"id",0],[8,"innerHTML",1]],null,null,null,null)),(n()(),e.rb(28,0,null,null,4,"div",[["class","ion-padding"]],null,null,null,null,null)),(n()(),e.rb(29,0,null,null,3,"ion-button",[["color","primary"],["expand","block"],["shape","round"],["slot","start"],["type","submit"]],null,null,null,r.ib,r.e)),e.qb(30,49152,null,0,o.m,[e.h,e.k,e.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],shape:[3,"shape"],type:[4,"type"]},null),(n()(),e.Jb(31,0,[" "," "])),e.Eb(131072,u.j,[u.k,e.h])],(function(n,t){var l=t.component;n(t,2,0,l.form),n(t,8,0,"inset"),n(t,10,0,"floating"),n(t,14,0,"password"),n(t,17,0,"newPassword"),n(t,21,0,l.isConfirmPass),n(t,26,0,l.isConfirmPass),n(t,30,0,"primary",!l.isReadyToSave,"block","round","submit")}),(function(n,t){var l=t.component;n(t,0,0,e.Db(t,4).ngClassUntouched,e.Db(t,4).ngClassTouched,e.Db(t,4).ngClassPristine,e.Db(t,4).ngClassDirty,e.Db(t,4).ngClassValid,e.Db(t,4).ngClassInvalid,e.Db(t,4).ngClassPending),n(t,11,0,e.Kb(t,11,0,e.Db(t,12).transform("CHANGE_PASSWORD_NEW"))),n(t,13,0,e.Db(t,19).ngClassUntouched,e.Db(t,19).ngClassTouched,e.Db(t,19).ngClassPristine,e.Db(t,19).ngClassDirty,e.Db(t,19).ngClassValid,e.Db(t,19).ngClassInvalid,e.Db(t,19).ngClassPending),n(t,22,0,e.vb(1,"",l.tipsId,"")),n(t,24,0,l.word),n(t,27,0,e.vb(1,"",l.textColr,""),l.reminder),n(t,31,0,e.Kb(t,31,0,e.Db(t,32).transform("CHANGE_PASSWORD_SUBMIT")))}))}function w(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,9,"ion-header",[],null,null,null,r.wb,r.s)),e.qb(1,49152,null,0,o.D,[e.h,e.k,e.x],null,null),(n()(),e.rb(2,0,null,0,7,"ion-toolbar",[],null,null,null,r.hc,r.db)),e.qb(3,49152,null,0,o.Eb,[e.h,e.k,e.x],null,null),(n()(),e.gb(16777216,null,0,1,null,S)),e.qb(5,16384,null,0,c.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(6,0,null,0,3,"ion-title",[],null,null,null,r.fc,r.bb)),e.qb(7,49152,null,0,o.Cb,[e.h,e.k,e.x],null,null),(n()(),e.Jb(8,0,["",""])),e.Eb(131072,u.j,[u.k,e.h]),(n()(),e.rb(10,0,null,null,3,"ion-content",[],null,null,null,r.rb,r.n)),e.qb(11,49152,null,0,o.w,[e.h,e.k,e.x],null,null),(n()(),e.gb(16777216,null,0,1,null,O)),e.qb(13,16384,null,0,c.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component;n(t,5,0,!l.isForgetPwd),n(t,13,0,l.form)}),(function(n,t){n(t,8,0,e.Kb(t,8,0,e.Db(t,9).transform("MY_INFO_SET_PASSWORD")))}))}function E(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"page-set-password",[],null,null,null,w,C)),e.qb(1,114688,null,0,g,[o.Lb,p.a,f.a,v.a,m.a,b.a,a.d,u.k,o.Kb],null,null)],(function(n,t){n(t,1,0)}),null)}var k=e.nb("page-set-password",g,E,{},{},[]),R=l("iInd");l.d(t,"SetPasswordPageModuleNgFactory",(function(){return D}));var D=e.ob(s,[],(function(n){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[i.a,k]],[3,e.j],e.v]),e.Bb(4608,c.l,c.k,[e.s,[2,c.A]]),e.Bb(4608,o.c,o.c,[e.x,e.g]),e.Bb(4608,o.Kb,o.Kb,[o.c,e.j,e.p]),e.Bb(4608,o.Ob,o.Ob,[o.c,e.j,e.p]),e.Bb(4608,a.r,a.r,[]),e.Bb(4608,a.d,a.d,[]),e.Bb(4608,u.g,u.f,[]),e.Bb(4608,u.c,u.e,[]),e.Bb(4608,u.i,u.d,[]),e.Bb(4608,u.b,u.a,[]),e.Bb(4608,u.k,u.k,[u.l,u.g,u.c,u.i,u.b,u.m,u.n]),e.Bb(1073742336,c.b,c.b,[]),e.Bb(1073742336,o.Gb,o.Gb,[]),e.Bb(1073742336,R.n,R.n,[[2,R.t],[2,R.m]]),e.Bb(1073742336,u.h,u.h,[]),e.Bb(1073742336,a.q,a.q,[]),e.Bb(1073742336,a.h,a.h,[]),e.Bb(1073742336,a.o,a.o,[]),e.Bb(1073742336,s,s,[]),e.Bb(1024,R.k,(function(){return[[{path:"",component:g}]]}),[]),e.Bb(256,u.n,void 0,[]),e.Bb(256,u.m,void 0,[])])}))}}]);