(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{CSI6:function(n,l,t){"use strict";t.d(l,"a",(function(){return r}));var e=t("VGsI"),i=t("8Y7J");t("/nCp");class r{constructor(n,l,t){this.formBuilder=n,this.authProvider=l,this.sanitizer=t,this.clientId="",this.errorString="",this.emitter=new i.m,this._buildForm()}ngOnInit(){this.getIdentifyCode()}_buildForm(){this.identifyForm=this.formBuilder.group({identifyCode:[""]})}inputChange(){this.errorString="";const n=e.a.trim(this.identifyForm.controls.identifyCode.value);this.emitter.emit({identifyCode:n})}getIdentifyCode(){this.clientId&&(this.clientId=this.clientId.trim(),this.authProvider.MessageCaptcha(this.clientId).subscribe(n=>{this.identifyCodeUrl=n.result.image&&-1===n.result.image.indexOf("data:image/jpeg;base64,")?this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpeg;base64,"+n.result.image):this.sanitizer.bypassSecurityTrustResourceUrl(n.result.image)},n=>{}))}refreshVerifyCode(){this.keywordInput.setFocus(),this.getIdentifyCode()}ngOnChanges(n){n.clientId&&!n.clientId.firstChange&&n.clientId.currentValue&&(this.clientId=n.clientId.currentValue,this.errorString="",this.getIdentifyCode()),n.errorString&&!n.errorString.firstChange&&n.errorString.currentValue&&(this.errorString=n.errorString.currentValue,this.errorString&&(this.errorString=this.errorString.split(";")[0]),this.getIdentifyCode())}}},Rg3w:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class i{}var r=t("pMnS"),u=t("ElMV"),s=t("kgVa"),o=t("CSI6"),a=t("s7LF"),c=t("/nCp"),d=t("cUpR"),b=t("oBZk"),h=t("ZZ/e"),g=t("TSSN"),f=t("SVse"),p=t("GVUw"),m=t("ohNG"),C=t("n90K"),v=t("Zr1d"),S=t("iInd"),w=t("YsCg"),I=t("VvKu"),y=(t("Q1LM"),t("o0su")),D=t("hAUF"),E=t("mGGX");t("TDSW");class k extends E.d{constructor(n,l,t,e,i,r,u,s,o){super(n,o,t,l,e,u,D.a.LoginPage,i),this.router=n,this.navCtrl=l,this.authProvider=t,this.translateService=e,this.session=i,this.eventsService=r,this.nativeService=u,this.storageService=s,this.modalCtrl=o,this.account={wfAccount:"",wfPassword:"",lang:null,clientId:null},this.identityCode="",this.errorString="",this.identityCodeEnabled=!1,this.loginEnabled=!1,this.loginWay="mobile",this.validateInput(),this.eventsService.on(I.j.LoginByWF2success,n=>{this.loginSuccess(n)})}ngOnInit(){this.storageService.getItem(w.a.Language).then(n=>{this.language=n}),this.storageService.getItem("wf-account").then(n=>{n&&(this.account.wfAccount=n)})}doLogin(){this.loginEnabled=!1,this.account.lang=this.session.language;const n={account:y.a.clearAllSpaces(this.account.wfAccount),password:this.account.wfPassword,captcha:this.identityCode};super.LoginByWFAccount(n).then(n=>{this.errorString=super.verificationErrorHandle(n)})}validateInput(){this.loginEnabled=this.account.wfAccount.length>0&&this.account.wfPassword.length>0&&this.identityCode.length>0}loginSuccess(n){this.storageService.setItem("wf-account",this.account.wfAccount)}accountChange(){this.identityCodeEnabled=this.account.wfAccount.length>0}receiveVal(n){n&&(this.identityCode=n.identifyCode,this.loginEnabled=this.account.wfAccount.length>0&&this.account.wfPassword.length>0&&this.identityCode.length>0)}}var x=t("ZwiA"),R=t("riPR"),O=t("6m4Z"),_=e.pb({encapsulation:0,styles:[[".tips[_ngcontent-%COMP%]{margin:16px 5px;font-size:initial}.button-row[_ngcontent-%COMP%]{margin-top:32px}ion-input[_ngcontent-%COMP%]{--padding-start:0}"],u.a],data:{}});function P(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"identity-code",[],null,[[null,"emitter"]],(function(n,l,t){var e=!0;return"emitter"===l&&(e=!1!==n.component.receiveVal(t)&&e),e}),s.b,s.a)),e.qb(1,638976,null,0,o.a,[a.d,c.a,d.b],{clientId:[0,"clientId"],errorString:[1,"errorString"]},{emitter:"emitter"})],(function(n,l){var t=l.component;n(l,1,0,t.account.wfAccount,t.errorString)}),null)}function B(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,12,"ion-header",[],null,null,null,b.wb,b.s)),e.qb(1,49152,null,0,h.D,[e.h,e.k,e.x],null,null),(n()(),e.rb(2,0,null,0,10,"ion-toolbar",[["hideBackButton","true"]],null,null,null,b.hc,b.db)),e.qb(3,49152,null,0,h.Eb,[e.h,e.k,e.x],null,null),(n()(),e.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.jb,b.f)),e.qb(5,49152,null,0,h.n,[e.h,e.k,e.x],null,null),(n()(),e.rb(6,0,null,0,2,"ion-back-button",[["text",""]],null,[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.Db(n,8).onClick(t)&&i),i}),b.gb,b.c)),e.qb(7,49152,null,0,h.i,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),e.qb(8,16384,null,0,h.j,[[2,h.kb],h.Lb],{defaultHref:[0,"defaultHref"]},null),(n()(),e.rb(9,0,null,0,3,"ion-title",[],null,null,null,b.fc,b.bb)),e.qb(10,49152,null,0,h.Cb,[e.h,e.k,e.x],null,null),(n()(),e.Jb(11,0,["",""])),e.Eb(131072,g.j,[g.k,e.h]),(n()(),e.rb(13,0,null,null,44,"ion-content",[],null,null,null,b.rb,b.n)),e.qb(14,49152,null,0,h.w,[e.h,e.k,e.x],null,null),(n()(),e.rb(15,0,null,0,4,"ion-grid",[],null,null,null,b.vb,b.r)),e.qb(16,49152,null,0,h.C,[e.h,e.k,e.x],null,null),(n()(),e.rb(17,0,null,0,2,"p",[["class","tips"]],null,null,null,null,null)),(n()(),e.Jb(18,null,["",""])),e.Eb(131072,g.j,[g.k,e.h]),(n()(),e.rb(20,0,null,0,34,"form",[["name","wf"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,t){var i=!0,r=n.component;return"submit"===l&&(i=!1!==e.Db(n,22).onSubmit(t)&&i),"reset"===l&&(i=!1!==e.Db(n,22).onReset()&&i),"submit"===l&&(i=!1!==r.doLogin()&&i),i}),null,null)),e.qb(21,16384,null,0,a.t,[],null,null),e.qb(22,4210688,null,0,a.m,[[8,null],[8,null]],null,null),e.Gb(2048,null,a.b,null,[a.m]),e.qb(24,16384,null,0,a.l,[[4,a.b]],null,null),(n()(),e.rb(25,0,null,null,29,"ion-grid",[],null,null,null,b.vb,b.r)),e.qb(26,49152,null,0,h.C,[e.h,e.k,e.x],null,null),(n()(),e.rb(27,0,null,0,9,"div",[["class","account-row border-bottom ion-margin-bottom"]],null,null,null,null,null)),(n()(),e.rb(28,0,null,null,8,"div",[["class","full-wrapper"]],null,null,null,null,null)),(n()(),e.rb(29,0,null,null,7,"ion-input",[["debounce","1000"],["name","workflowaccount"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var i=!0,r=n.component;return"ionBlur"===l&&(i=!1!==e.Db(n,32)._handleBlurEvent(t.target)&&i),"ionChange"===l&&(i=!1!==e.Db(n,32)._handleInputEvent(t.target)&&i),"ngModelChange"===l&&(i=!1!==(r.account.wfAccount=t)&&i),"ngModelChange"===l&&(i=!1!==r.validateInput()&&i),"ionChange"===l&&(i=!1!==r.accountChange()&&i),i}),b.Bb,b.x)),e.qb(30,49152,null,0,h.I,[e.h,e.k,e.x],{debounce:[0,"debounce"],name:[1,"name"],placeholder:[2,"placeholder"],type:[3,"type"]},null),e.Eb(131072,g.j,[g.k,e.h]),e.qb(32,16384,null,0,h.Rb,[e.k],null,null),e.Gb(1024,null,a.i,(function(n){return[n]}),[h.Rb]),e.qb(34,671744,null,0,a.n,[[2,a.b],[8,null],[8,null],[6,a.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,a.j,null,[a.n]),e.qb(36,16384,null,0,a.k,[[4,a.j]],null,null),(n()(),e.rb(37,0,null,0,9,"div",[["class","password-row border-bottom"]],null,null,null,null,null)),(n()(),e.rb(38,0,null,null,8,"div",[["class","full-wrapper"]],null,null,null,null,null)),(n()(),e.rb(39,0,null,null,7,"ion-input",[["name","wfpassword"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var i=!0,r=n.component;return"ionBlur"===l&&(i=!1!==e.Db(n,42)._handleBlurEvent(t.target)&&i),"ionChange"===l&&(i=!1!==e.Db(n,42)._handleInputEvent(t.target)&&i),"ngModelChange"===l&&(i=!1!==(r.account.wfPassword=t)&&i),"ngModelChange"===l&&(i=!1!==r.validateInput()&&i),i}),b.Bb,b.x)),e.qb(40,49152,null,0,h.I,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),e.Eb(131072,g.j,[g.k,e.h]),e.qb(42,16384,null,0,h.Rb,[e.k],null,null),e.Gb(1024,null,a.i,(function(n){return[n]}),[h.Rb]),e.qb(44,671744,null,0,a.n,[[2,a.b],[8,null],[8,null],[6,a.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,a.j,null,[a.n]),e.qb(46,16384,null,0,a.k,[[4,a.j]],null,null),(n()(),e.gb(16777216,null,0,1,null,P)),e.qb(48,16384,null,0,f.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(49,0,null,0,5,"div",[["class","button-row"]],null,null,null,null,null)),(n()(),e.rb(50,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.rb(51,0,null,null,3,"ion-button",[["color","primary"],["expand","block"],["type","submit"]],null,null,null,b.ib,b.e)),e.qb(52,49152,null,0,h.m,[e.h,e.k,e.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(n()(),e.Jb(53,0,["",""])),e.Eb(131072,g.j,[g.k,e.h]),(n()(),e.rb(55,0,null,0,2,"privacy-policy",[["float","true"]],null,null,null,p.b,p.a)),e.qb(56,114688,null,0,m.a,[h.Lb,C.a,h.Kb,v.a,S.m],{float:[0,"float"],agreeText:[1,"agreeText"],language:[2,"language"]},null),e.Eb(131072,g.j,[g.k,e.h])],(function(n,l){var t=l.component;n(l,7,0,t.defaultUrl,""),n(l,8,0,t.defaultUrl),n(l,30,0,"1000","workflowaccount",e.vb(1,"",e.Kb(l,30,2,e.Db(l,31).transform("LOGIN_ACCOUNT")),""),"text"),n(l,34,0,"workflowaccount",t.account.wfAccount),n(l,40,0,"wfpassword",e.vb(1,"",e.Kb(l,40,1,e.Db(l,41).transform("LOGIN_PASSWORD")),""),"password"),n(l,44,0,"wfpassword",t.account.wfPassword),n(l,48,0,t.identityCodeEnabled),n(l,52,0,"primary",!t.loginEnabled,"block","submit"),n(l,56,0,"true",e.vb(1,"",e.Kb(l,56,1,e.Db(l,57).transform("SIGNUP_LOGIN_AGREE_PRIVACY")),""),e.vb(1,"",t.language,""))}),(function(n,l){n(l,11,0,e.Kb(l,11,0,e.Db(l,12).transform("LOGIN_WORKFLOW"))),n(l,18,0,e.Kb(l,18,0,e.Db(l,19).transform("LOGIN_BY_WORKFLOW_TIPS"))),n(l,20,0,e.Db(l,24).ngClassUntouched,e.Db(l,24).ngClassTouched,e.Db(l,24).ngClassPristine,e.Db(l,24).ngClassDirty,e.Db(l,24).ngClassValid,e.Db(l,24).ngClassInvalid,e.Db(l,24).ngClassPending),n(l,29,0,e.Db(l,36).ngClassUntouched,e.Db(l,36).ngClassTouched,e.Db(l,36).ngClassPristine,e.Db(l,36).ngClassDirty,e.Db(l,36).ngClassValid,e.Db(l,36).ngClassInvalid,e.Db(l,36).ngClassPending),n(l,39,0,e.Db(l,46).ngClassUntouched,e.Db(l,46).ngClassTouched,e.Db(l,46).ngClassPristine,e.Db(l,46).ngClassDirty,e.Db(l,46).ngClassValid,e.Db(l,46).ngClassInvalid,e.Db(l,46).ngClassPending),n(l,53,0,e.Kb(l,53,0,e.Db(l,54).transform("LOGIN_SUBMIT")))}))}function U(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"page-wf-login",[],null,null,null,B,_)),e.qb(1,114688,null,0,k,[S.m,h.Lb,c.a,g.k,x.a,R.a,O.a,C.a,h.Kb],null,null)],(function(n,l){n(l,1,0)}),null)}var T=e.nb("page-wf-login",k,U,{},{},[]),L=t("j1ZV");t.d(l,"WfLoginPageModuleNgFactory",(function(){return N}));var N=e.ob(i,[],(function(n){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[r.a,T]],[3,e.j],e.v]),e.Bb(4608,f.l,f.k,[e.s,[2,f.A]]),e.Bb(4608,h.c,h.c,[e.x,e.g]),e.Bb(4608,h.Kb,h.Kb,[h.c,e.j,e.p]),e.Bb(4608,h.Ob,h.Ob,[h.c,e.j,e.p]),e.Bb(4608,a.r,a.r,[]),e.Bb(4608,a.d,a.d,[]),e.Bb(4608,g.g,g.f,[]),e.Bb(4608,g.c,g.e,[]),e.Bb(4608,g.i,g.d,[]),e.Bb(4608,g.b,g.a,[]),e.Bb(4608,g.k,g.k,[g.l,g.g,g.c,g.i,g.b,g.m,g.n]),e.Bb(5120,e.d,(function(n,l,t){return[h.Ub(n,l,t)]}),[h.Tb,f.c,e.x]),e.Bb(1073742336,S.n,S.n,[[2,S.t],[2,S.m]]),e.Bb(1073742336,g.h,g.h,[]),e.Bb(1073742336,f.b,f.b,[]),e.Bb(1073742336,h.Gb,h.Gb,[]),e.Bb(1073742336,a.q,a.q,[]),e.Bb(1073742336,a.h,a.h,[]),e.Bb(1073742336,a.o,a.o,[]),e.Bb(1073742336,L.a,L.a,[]),e.Bb(1073742336,i,i,[]),e.Bb(256,g.n,void 0,[]),e.Bb(256,g.m,void 0,[]),e.Bb(256,h.Tb,void 0,[]),e.Bb(1024,S.k,(function(){return[[{path:"",component:k}]]}),[])])}))},TDSW:function(n,l,t){"use strict";t.d(l,"a",(function(){return o}));var e=t("mrSG"),i=t("hAUF"),r=t("ZOGp"),u=t("YsCg"),s=t("93YN");class o{constructor(n,l,t,e,i,r){this.modalCtrl=n,this.authProvider=l,this.navCtrl=t,this.router=e,this.translateService=i,this.nativeService=r}doSelectCountry(){return new Promise((n,l)=>e.b(this,void 0,void 0,(function*(){const t=yield this.modalCtrl.create({component:s.a,componentProps:{isNeedAll:!0}});t.onDidDismiss().then(l=>{n(l.data)}).catch(n=>{l(n)}),yield t.present()})))}SendSecurityCode(n){return new Promise((l,t)=>e.b(this,void 0,void 0,(function*(){this.authProvider.SendSecurityCode2(n).subscribe(n=>{l("")},n=>{l(n)})})))}LoginByWFAccount(n){return new Promise((l,t)=>e.b(this,void 0,void 0,(function*(){this.authProvider.LoginByWFAccount2(n).subscribe(n=>{this.setTabsToRoot()},n=>{l(n)})})))}Login(n){return new Promise((l,t)=>e.b(this,void 0,void 0,(function*(){this.authProvider.Login2(n).subscribe(n=>{this.setTabsToRoot()},n=>{l(n)})})))}login(n,l,t,i){return new Promise((t,i)=>e.b(this,void 0,void 0,(function*(){switch(n){case u.j.SendSecurityCodeBefore:this.authProvider.SendSecurityCode2(l).subscribe(n=>{t("")},n=>{t(n)});break;case u.j.LoginByWFAccountBefore:this.authProvider.LoginByWFAccount2(l).subscribe(n=>{this.setTabsToRoot()},n=>{t(n)});break;case u.j.LoginByMobileBefore:this.authProvider.Login2(l).subscribe(n=>{this.setTabsToRoot()},n=>{t(n)})}})))}setTabsToRoot(){this.router.navigate([i.b.HomePage],{replaceUrl:!0})}verificationErrorHandle(n,l){return n.errcode===r.a.USER.INCORRECT_VERIFICATION_CODE?this.translateService.instant("VERIFICATION_CODE_INCORRECT")+";"+Date.now():n.errcode===r.a.USER.VERIFICATION_CODE_EXPIRED?this.translateService.instant("VERIFICATION_CODE_EXPIRED")+";"+Date.now():void this.loginError(n)}loginError(n){let l="";switch(n.errcode){case r.a.USER.INACTIVE_USER:l="ACCOUNT_LOCKED";break;case r.a.USER.USER_NOT_EXIST:l="LOGIN_ERROR_USER_NOT_EXIST";break;case r.a.USER.MOBILE_NOT_EXIST:l="LOGIN_ERROR_PHONE_NUMBER_NOT_EXIST";break;case r.a.USER.INCORRECT_ACCOUNT_AND_PASSWORD:case r.a.USER.INCORRECT_PASSWORD:l="LOGIN_ERROR_INCORRECT_PASSWORD";break;default:l="LOGIN_ERROR"}this.nativeService.alert(n.errcode+","+this.translateService.instant(l))}}},kgVa:function(n,l,t){"use strict";var e=t("8Y7J"),i=t("oBZk"),r=t("ZZ/e"),u=t("s7LF"),s=t("SVse"),o=t("TSSN");t("CSI6"),t("/nCp"),t("cUpR"),t.d(l,"a",(function(){return a})),t.d(l,"b",(function(){return h}));var a=e.pb({encapsulation:0,styles:[[".img-row[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;border-bottom:var(--border-primary)}.identify-code[_ngcontent-%COMP%]{width:-webkit-max-content;width:-moz-max-content;width:max-content;text-align:left;padding-left:8px}.identify-code[_ngcontent-%COMP%]   .error-code[_ngcontent-%COMP%]{color:red;margin:0}.identify-code[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;margin:8px 0}ion-input[_ngcontent-%COMP%]{width:0;font-size:1.5rem!important;letter-spacing:1px}.verification-img[_ngcontent-%COMP%]{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-right:8px}.verification-img[_ngcontent-%COMP%]   .loading-img[_ngcontent-%COMP%]{height:40px}img[_ngcontent-%COMP%]{min-height:24px;max-width:18vw;min-width:16vw}@-webkit-keyframes show{from{height:0}to{height:46px}}@keyframes show{from{height:0}to{height:46px}}"]],data:{}});function c(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.component.identifyCodeUrl)}))}function d(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,0,"img",[["class","loading-img"],["src","assets/svg/loading.svg"]],null,null,null,null,null))],null,null)}function b(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,2,"ion-text",[["color","danger"]],null,null,null,i.cc,i.Y)),e.qb(1,49152,null,0,r.zb,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.Jb(2,0,["",""]))],(function(n,l){n(l,1,0,"danger")}),(function(n,l){n(l,2,0,l.component.errorString)}))}function h(n){return e.Lb(0,[e.Hb(671088640,1,{keywordInput:0}),(n()(),e.rb(1,0,null,null,24,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,t){var i=!0;return"submit"===l&&(i=!1!==e.Db(n,3).onSubmit(t)&&i),"reset"===l&&(i=!1!==e.Db(n,3).onReset()&&i),i}),null,null)),e.qb(2,16384,null,0,u.t,[],null,null),e.qb(3,540672,null,0,u.g,[[8,null],[8,null]],{form:[0,"form"]},null),e.Gb(2048,null,u.b,null,[u.g]),e.qb(5,16384,null,0,u.l,[[4,u.b]],null,null),(n()(),e.rb(6,0,null,null,19,"ion-grid",[],null,null,null,i.vb,i.r)),e.qb(7,49152,null,0,r.C,[e.h,e.k,e.x],null,null),(n()(),e.rb(8,0,null,0,17,"div",[["class","img-row border-bottom "]],null,null,null,null,null)),(n()(),e.rb(9,0,null,null,4,"div",[["class","verification-img ion-text-left"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.refreshVerifyCode()&&e),e}),null,null)),(n()(),e.gb(16777216,null,null,1,null,c)),e.qb(11,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,d)),e.qb(13,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(14,0,null,null,7,"ion-input",[["formControlName","identifyCode"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var i=!0,r=n.component;return"ionBlur"===l&&(i=!1!==e.Db(n,17)._handleBlurEvent(t.target)&&i),"ionChange"===l&&(i=!1!==e.Db(n,17)._handleInputEvent(t.target)&&i),"ionChange"===l&&(i=!1!==r.inputChange()&&i),i}),i.Bb,i.x)),e.qb(15,49152,[[1,4],["keyword",4]],0,r.I,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),e.Eb(131072,o.j,[o.k,e.h]),e.qb(17,16384,null,0,r.Rb,[e.k],null,null),e.Gb(1024,null,u.i,(function(n){return[n]}),[r.Rb]),e.qb(19,671744,null,0,u.f,[[3,u.b],[8,null],[8,null],[6,u.i],[2,u.s]],{name:[0,"name"]},null),e.Gb(2048,null,u.j,null,[u.f]),e.qb(21,16384,null,0,u.k,[[4,u.j]],null,null),(n()(),e.rb(22,0,null,null,3,"div",[["class","identify-code "]],null,null,null,null,null)),(n()(),e.rb(23,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,b)),e.qb(25,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,3,0,t.identifyForm),n(l,11,0,t.identifyCodeUrl),n(l,13,0,!t.identifyCodeUrl),n(l,15,0,e.vb(1,"",e.Kb(l,15,0,e.Db(l,16).transform("SIGNUP_IDENTIFY_PLACEHOLDER")),""),"text"),n(l,19,0,"identifyCode"),n(l,25,0,t.errorString)}),(function(n,l){n(l,1,0,e.Db(l,5).ngClassUntouched,e.Db(l,5).ngClassTouched,e.Db(l,5).ngClassPristine,e.Db(l,5).ngClassDirty,e.Db(l,5).ngClassValid,e.Db(l,5).ngClassInvalid,e.Db(l,5).ngClassPending),n(l,14,0,e.Db(l,21).ngClassUntouched,e.Db(l,21).ngClassTouched,e.Db(l,21).ngClassPristine,e.Db(l,21).ngClassDirty,e.Db(l,21).ngClassValid,e.Db(l,21).ngClassInvalid,e.Db(l,21).ngClassPending)}))}},mGGX:function(n,l,t){"use strict";var e=t("TDSW");t("mrSG"),t("wqKC"),t("93YN");class i{constructor(n,l){this.session=n,this.nativeService=l}ionViewWillEnter(){this.session.isDarkMode||this.nativeService.setStyleLightContent()}ionViewWillLeave(){this.nativeService.statusBarStyle(this.session.isDarkMode)}}t.d(l,"i",(function(){return u})),t.d(l,"a",(function(){return s})),t.d(l,"e",(function(){return o})),t.d(l,"b",(function(){return a})),t.d(l,"f",(function(){return d})),t.d(l,"h",(function(){return b})),t.d(l,"g",(function(){return h})),t.d(l,"c",(function(){return f})),t.d(l,"d",(function(){return m}));const r=n=>{let l={};const t=n.getCurrentNavigation().extras;return t&&t.state&&(l=t.state),l},u=(n,l)=>{let t=n||l.previousUrl;return l&&(t=l.previousUrl),t};class s{constructor(n){this.events=n}scrollWidth(n,l){return{width:n||window.screen.availWidth-5+"px",height:(l||44)+"px"}}completeRefresh(n){n&&n.target.complete()}completedoInfinite(n){n&&n.target.complete()}}class o{constructor(n,l){this.paramUrl=n,this.session=l,this.defaultUrl="",this.defaultUrl=u(n,this.session)}}class a{constructor(n){this.router=n,this.params=r(n)}}class c extends s{constructor(n,l){super(l),this.router=n,this.events=l,this.params=r(n)}}class d extends s{constructor(n,l,t){super(l),this.paramUrl=n,this.events=l,this.session=t,this.defaultUrl="",this.defaultUrl=u(n,t)}}class b extends o{constructor(n,l,t){super(l,t),this.router=n,this.paramUrl=l,this.session=t,this.defaultUrl="",this.params=r(n)}}class h extends c{constructor(n,l,t,e){super(n,t),this.router=n,this.paramUrl=l,this.events=t,this.session=e,this.defaultUrl="",this.defaultUrl=u(l,this.session)}}class g extends i{constructor(n,l,t){super(l,t),this.router=n,this.session=l,this.nativeService=t,this.params=r(n)}}class f extends g{constructor(n,l,t,e){super(n,l,t),this.router=n,this.session=l,this.nativeService=t,this.paramUrl=e,this.defaultUrl=u(e,l)}}class p extends e.a{constructor(n,l,t,e,i,u){super(l,t,e,n,i,u),this.router=n,this.modalCtrl=l,this.authProvider=t,this.navCtrl=e,this.translateService=i,this.nativeService=u,this.params=r(n)}}class m extends p{constructor(n,l,t,e,i,s,o,a){super(n,l,t,e,i,s),this.router=n,this.modalCtrl=l,this.authProvider=t,this.navCtrl=e,this.translateService=i,this.nativeService=s,this.paramUrl=o,this.session=a,this.params=r(n),this.defaultUrl=u(o,a)}}}}]);