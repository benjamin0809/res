(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{E0C0:function(t,n,e){"use strict";e.r(n);var r=e("CcnG"),i=function(){return function(){}}(),o=e("pMnS"),l=e("oBZk"),u=e("ZZ/e"),a=e("A7o+"),s=e("Ip0R"),c=e("mrSG"),b=e("ZwiA"),d=e("mGGX"),f=e("hAUF"),h={TODO:{translateKey:"WORKFLOW_UNDONETASK_TITLE",path:"undonetask"},DONE:{translateKey:"WORKFLOW_DONETASK_TITLE",path:"donetask"},TASK:{translateKey:"WORKFLOW_TASK_TITLE",path:"task"},SETTING:{translateKey:"WORKFLOW_SETTING_TITLE",path:"setting"}},p=e("riPR"),T=function(t){function n(n,e,r,i,o){var l=t.call(this,f.b.WidgetPage,o)||this;return l.navCtrl=n,l.translateService=e,l.eventsService=r,l.router=i,l.session=o,l.selected="undonetask",l.title="",l.tab1Title=" ",l.tab2Title=" ",l.tab3Title=" ",l.tab4Title=" ",l.tabsPages=[{url:f.a.WorkflowUnDonePage,id:"undonetask",icon:"book",title:"WORKFLOW_TAB1_TITLE"},{url:f.a.WorkflowDonePage,id:"donetask",icon:"bookmarks",title:"WORKFLOW_TAB2_TITLE"},{url:f.a.WorkflowTaskPage,id:"task",icon:"person",title:"WORKFLOW_TAB3_TITLE"},{url:f.a.WorkflowSettingPage,id:"setting",icon:"settings",title:"WORKFLOW_TAB4_TITLE"}],l.setTabText(),l}return c.d(n,t),n.prototype.setTabText=function(){var t=this;this.translateService.get(["WORKFLOW_TAB1_TITLE","WORKFLOW_TAB2_TITLE","WORKFLOW_TAB3_TITLE","WORKFLOW_TAB4_TITLE"]).subscribe((function(n){t.tab1Title=n.WORKFLOW_TAB1_TITLE,t.tab2Title=n.WORKFLOW_TAB2_TITLE,t.tab3Title=n.WORKFLOW_TAB3_TITLE,t.tab4Title=n.WORKFLOW_TAB4_TITLE}))},n.prototype.ionTabsDidChange=function(t){var n=Object.keys(h).find((function(n){return h[n].path===t.tab})),e="WORKFLOW_UNDONETASK_TITLE";n&&(e=h[n].translateKey),this.title=this.translateService.instant(e)},n.prototype.onClick=function(t){},n}(d.e),v=e("ZYCi"),g=r.rb({encapsulation:0,styles:[[".taskdesc-box[_ngcontent-%COMP%]{display:-webkit-box;display:flex;position:relative}.taskdesc-box[_ngcontent-%COMP%]   .taskdesc[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;padding:auto}.taskdesc-box[_ngcontent-%COMP%]   .pid[_ngcontent-%COMP%]{font-size:1.1rem;right:0;position:absolute;z-index:2;background:var(--bg-primary-color);padding-left:5px;box-shadow:-5px 0 10px 1px var(--bg-primary-color)}.list-title[_ngcontent-%COMP%]{white-space:normal;font-size:1.4rem;color:var(--bg-secondary-color)}.taskdate[_ngcontent-%COMP%]{font-size:1.1rem}.card-ios[_ngcontent-%COMP%]{margin:0;border-radius:2px;width:100%;font-size:1.4rem;background:var(--bg-primary-color);border-bottom:var(--border-primary)}.condition-container[_ngcontent-%COMP%]   .item-ios.item-block[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom:0}.close-buttons[_ngcontent-%COMP%]{padding-right:5px}.header-md[_ngcontent-%COMP%]:after{height:0}"]],data:{}});function O(t){return r.Nb(0,[(t()(),r.tb(0,0,null,null,7,"ion-tab-button",[],null,null,null,l.ac,l.W)),r.sb(1,49152,null,0,u.xb,[r.h,r.k,r.z],{tab:[0,"tab"]},null),(t()(),r.tb(2,0,null,0,1,"ion-icon",[["class","tab"]],null,null,null,l.xb,l.t)),r.sb(3,49152,null,0,u.E,[r.h,r.k,r.z],{name:[0,"name"]},null),(t()(),r.tb(4,0,null,0,3,"ion-label",[],null,null,null,l.Gb,l.C)),r.sb(5,49152,null,0,u.P,[r.h,r.k,r.z],null,null),(t()(),r.Lb(6,0,["",""])),r.Gb(131072,a.j,[a.k,r.h])],(function(t,n){t(n,1,0,n.context.$implicit.id),t(n,3,0,n.context.$implicit.icon)}),(function(t,n){t(n,6,0,r.Mb(n,6,0,r.Fb(n,7).transform(n.context.$implicit.title)))}))}function _(t){return r.Nb(0,[(t()(),r.tb(0,0,null,null,11,"ion-header",[],null,null,null,l.wb,l.s)),r.sb(1,49152,null,0,u.D,[r.h,r.k,r.z],null,null),(t()(),r.tb(2,0,null,0,9,"ion-toolbar",[],null,null,null,l.hc,l.db)),r.sb(3,49152,null,0,u.Eb,[r.h,r.k,r.z],null,null),(t()(),r.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,l.jb,l.f)),r.sb(5,49152,null,0,u.n,[r.h,r.k,r.z],null,null),(t()(),r.tb(6,0,null,0,2,"ion-back-button",[["text",""]],null,[[null,"click"]],(function(t,n,e){var i=!0;return"click"===n&&(i=!1!==r.Fb(t,8).onClick(e)&&i),i}),l.gb,l.c)),r.sb(7,49152,null,0,u.i,[r.h,r.k,r.z],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),r.sb(8,16384,null,0,u.j,[[2,u.kb],u.Lb],{defaultHref:[0,"defaultHref"]},null),(t()(),r.tb(9,0,null,0,2,"ion-title",[],null,null,null,l.fc,l.bb)),r.sb(10,49152,null,0,u.Cb,[r.h,r.k,r.z],null,null),(t()(),r.Lb(11,0,["",""])),(t()(),r.tb(12,0,null,null,6,"ion-tabs",[],null,[[null,"ionTabsDidChange"],[null,"ionTabButtonClick"]],(function(t,n,e){var i=!0,o=t.component;return"ionTabButtonClick"===n&&(i=!1!==r.Fb(t,13).select(e.detail.tab)&&i),"ionTabsDidChange"===n&&(i=!1!==o.ionTabsDidChange(e)&&i),i}),l.bc,l.X)),r.sb(13,49152,null,1,u.yb,[u.Lb],null,{ionTabsDidChange:"ionTabsDidChange"}),r.Jb(335544320,1,{tabBar:0}),(t()(),r.tb(15,0,null,1,3,"ion-tab-bar",[["slot","bottom"]],null,null,null,l.Zb,l.V)),r.sb(16,49152,[[1,4]],0,u.wb,[r.h,r.k,r.z],null,null),(t()(),r.ib(16777216,null,0,1,null,O)),r.sb(18,278528,null,0,s.i,[r.O,r.L,r.s],{ngForOf:[0,"ngForOf"]},null)],(function(t,n){var e=n.component;t(n,7,0,e.defaultUrl,""),t(n,8,0,e.defaultUrl),t(n,18,0,e.tabsPages)}),(function(t,n){t(n,11,0,n.component.title)}))}function k(t){return r.Nb(0,[(t()(),r.tb(0,0,null,null,1,"page-workflow",[],null,null,null,_,g)),r.sb(1,49152,null,0,T,[u.Lb,a.k,p.a,v.m,b.a],null,null)],null,null)}var C=r.pb("page-workflow",T,k,{},{},[]),m=e("gIcY"),E=function(){return Promise.all([e.e(0),e.e(67)]).then(e.bind(null,"XRVZ")).then((function(t){return t.UndonetaskPageModuleNgFactory}))},R=function(){return Promise.all([e.e(0),e.e(66)]).then(e.bind(null,"IN03")).then((function(t){return t.DonetaskPageModuleNgFactory}))},S=function(){return Promise.all([e.e(0),e.e(72)]).then(e.bind(null,"3fUO")).then((function(t){return t.WorkflowTaskPageModuleNgFactory}))},D=function(){return Promise.all([e.e(0),e.e(71)]).then(e.bind(null,"AJGH")).then((function(t){return t.WorkflowSettingPageModuleNgFactory}))},W=function(){return e.e(69).then(e.bind(null,"k50c")).then((function(t){return t.WorkflowDetailsPageModuleNgFactory}))},P=function(){return Promise.all([e.e(0),e.e(70)]).then(e.bind(null,"aDFQ")).then((function(t){return t.WorkflowSettingAgentlistPageModuleNgFactory}))},L=function(){return e.e(68).then(e.bind(null,"4dxE")).then((function(t){return t.SetposterPageModuleNgFactory}))},I=function(){return function(){}}();e.d(n,"WorkflowPageModuleNgFactory",(function(){return y}));var y=r.qb(i,[],(function(t){return r.Cb([r.Db(512,r.j,r.bb,[[8,[o.a,C]],[3,r.j],r.x]),r.Db(4608,s.l,s.k,[r.u,[2,s.A]]),r.Db(4608,u.c,u.c,[r.z,r.g]),r.Db(4608,u.Kb,u.Kb,[u.c,r.j,r.q]),r.Db(4608,u.Ob,u.Ob,[u.c,r.j,r.q]),r.Db(4608,m.r,m.r,[]),r.Db(4608,a.g,a.f,[]),r.Db(4608,a.c,a.e,[]),r.Db(4608,a.i,a.d,[]),r.Db(4608,a.b,a.a,[]),r.Db(4608,a.k,a.k,[a.l,a.g,a.c,a.i,a.b,a.m,a.n]),r.Db(1073742336,s.b,s.b,[]),r.Db(1073742336,u.Gb,u.Gb,[]),r.Db(1073742336,m.q,m.q,[]),r.Db(1073742336,m.h,m.h,[]),r.Db(1073742336,a.h,a.h,[]),r.Db(1073742336,v.n,v.n,[[2,v.t],[2,v.m]]),r.Db(1073742336,I,I,[]),r.Db(1073742336,i,i,[]),r.Db(1024,v.k,(function(){return[[{path:"",component:T,children:[{path:"undonetask",children:[{path:"",loadChildren:E}]},{path:"donetask",children:[{path:"",loadChildren:R}]},{path:"task",children:[{path:"",loadChildren:S}]},{path:"setting",children:[{path:"",loadChildren:D}]},{path:"",redirectTo:"/workflow/undonetask",pathMatch:"full"}]},{path:"common",children:[{path:"details",loadChildren:W},{path:"agent",children:[{path:"",loadChildren:P},{path:"set",loadChildren:L}]}]},{path:"",redirectTo:"/workflow/undonetask",pathMatch:"full"}]]}),[]),r.Db(256,a.n,void 0,[]),r.Db(256,a.m,void 0,[])])}))},TDSW:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("mrSG"),i=e("hAUF"),o=e("ZOGp"),l=e("YsCg"),u=e("93YN"),a=function(){function t(t,n,e,r,i,o){this.modalCtrl=t,this.authProvider=n,this.navCtrl=e,this.router=r,this.translateService=i,this.nativeService=o}return t.prototype.doSelectCountry=function(){var t=this;return new Promise((function(n,e){return r.b(t,void 0,void 0,(function(){var t;return r.e(this,(function(r){switch(r.label){case 0:return[4,this.modalCtrl.create({component:u.a,componentProps:{isNeedAll:!0}})];case 1:return(t=r.sent()).onDidDismiss().then((function(t){n(t.data)})).catch((function(t){e(t)})),[4,t.present()];case 2:return r.sent(),[2]}}))}))}))},t.prototype.SendSecurityCode=function(t){var n=this;return new Promise((function(e,i){return r.b(n,void 0,void 0,(function(){return r.e(this,(function(n){return this.authProvider.SendSecurityCode2(t).subscribe((function(t){e("")}),(function(t){e(t)})),[2]}))}))}))},t.prototype.LoginByWFAccount=function(t){var n=this;return new Promise((function(e,i){return r.b(n,void 0,void 0,(function(){var n=this;return r.e(this,(function(r){return this.authProvider.LoginByWFAccount2(t).subscribe((function(t){n.setTabsToRoot()}),(function(t){e(t)})),[2]}))}))}))},t.prototype.Login=function(t){var n=this;return new Promise((function(e,i){return r.b(n,void 0,void 0,(function(){var n=this;return r.e(this,(function(r){return this.authProvider.Login2(t).subscribe((function(t){n.setTabsToRoot()}),(function(t){e(t)})),[2]}))}))}))},t.prototype.login=function(t,n,e,i){var o=this;return new Promise((function(e,i){return r.b(o,void 0,void 0,(function(){var i=this;return r.e(this,(function(r){switch(t){case l.j.SendSecurityCodeBefore:this.authProvider.SendSecurityCode2(n).subscribe((function(t){e("")}),(function(t){e(t)}));break;case l.j.LoginByWFAccountBefore:this.authProvider.LoginByWFAccount2(n).subscribe((function(t){i.setTabsToRoot()}),(function(t){e(t)}));break;case l.j.LoginByMobileBefore:this.authProvider.Login2(n).subscribe((function(t){i.setTabsToRoot()}),(function(t){e(t)}))}return[2]}))}))}))},t.prototype.setTabsToRoot=function(){this.router.navigate([i.b.HomePage],{replaceUrl:!0})},t.prototype.verificationErrorHandle=function(t,n){return t.errcode===o.a.USER.INCORRECT_VERIFICATION_CODE?this.translateService.instant("VERIFICATION_CODE_INCORRECT")+";"+Date.now():t.errcode===o.a.USER.VERIFICATION_CODE_EXPIRED?this.translateService.instant("VERIFICATION_CODE_EXPIRED")+";"+Date.now():void this.loginError(t)},t.prototype.loginError=function(t){var n="";switch(t.errcode){case o.a.USER.INACTIVE_USER:n="ACCOUNT_LOCKED";break;case o.a.USER.USER_NOT_EXIST:n="LOGIN_ERROR_USER_NOT_EXIST";break;case o.a.USER.MOBILE_NOT_EXIST:n="LOGIN_ERROR_PHONE_NUMBER_NOT_EXIST";break;case o.a.USER.INCORRECT_ACCOUNT_AND_PASSWORD:case o.a.USER.INCORRECT_PASSWORD:n="LOGIN_ERROR_INCORRECT_PASSWORD";break;default:n="LOGIN_ERROR"}this.nativeService.alert(t.errcode+","+this.translateService.instant(n))},t}()},mGGX:function(t,n,e){"use strict";var r=e("mrSG"),i=e("TDSW"),o=(e("wqKC"),e("93YN"),function(){function t(t,n){this.session=t,this.nativeService=n}return t.prototype.ionViewWillEnter=function(){this.session.isDarkMode||this.nativeService.setStyleLightContent()},t.prototype.ionViewWillLeave=function(){this.nativeService.statusBarStyle(this.session.isDarkMode)},t}());e.d(n,"i",(function(){return u})),e.d(n,"a",(function(){return a})),e.d(n,"e",(function(){return s})),e.d(n,"b",(function(){return c})),e.d(n,"f",(function(){return d})),e.d(n,"h",(function(){return f})),e.d(n,"g",(function(){return h})),e.d(n,"c",(function(){return p})),e.d(n,"d",(function(){return T}));var l=function(t){var n={},e=t.getCurrentNavigation().extras;return e&&e.state&&(n=e.state),n},u=function(t,n){var e=t||n.previousUrl;return n&&(e=n.previousUrl),e},a=function(){function t(t){this.events=t}return t.prototype.scrollWidth=function(t,n){return{width:t||window.screen.availWidth-5+"px",height:(n||44)+"px"}},t.prototype.completeRefresh=function(t){t&&t.target.complete()},t.prototype.completedoInfinite=function(t){t&&t.target.complete()},t}(),s=function(){return function(t,n){this.paramUrl=t,this.session=n,this.defaultUrl="",this.defaultUrl=u(t,this.session)}}(),c=function(){return function(t){this.router=t,this.params=l(t)}}(),b=function(t){function n(n,e){var r=t.call(this,e)||this;return r.router=n,r.events=e,r.params=l(n),r}return r.d(n,t),n}(a),d=function(t){function n(n,e,r){var i=t.call(this,e)||this;return i.paramUrl=n,i.events=e,i.session=r,i.defaultUrl="",i.defaultUrl=u(n,r),i}return r.d(n,t),n}(a),f=function(t){function n(n,e,r){var i=t.call(this,e,r)||this;return i.router=n,i.paramUrl=e,i.session=r,i.defaultUrl="",i.params=l(n),i}return r.d(n,t),n}(s),h=function(t){function n(n,e,r,i){var o=t.call(this,n,r)||this;return o.router=n,o.paramUrl=e,o.events=r,o.session=i,o.defaultUrl="",o.defaultUrl=u(e,o.session),o}return r.d(n,t),n}(b),p=function(t){function n(n,e,r,i){var o=t.call(this,n,e,r)||this;return o.router=n,o.session=e,o.nativeService=r,o.paramUrl=i,o.defaultUrl=u(i,e),o}return r.d(n,t),n}(function(t){function n(n,e,r){var i=t.call(this,e,r)||this;return i.router=n,i.session=e,i.nativeService=r,i.params=l(n),i}return r.d(n,t),n}(o)),T=function(t){function n(n,e,r,i,o,a,s,c){var b=t.call(this,n,e,r,i,o,a)||this;return b.router=n,b.modalCtrl=e,b.authProvider=r,b.navCtrl=i,b.translateService=o,b.nativeService=a,b.paramUrl=s,b.session=c,b.params=l(n),b.defaultUrl=u(s,c),b}return r.d(n,t),n}(function(t){function n(n,e,r,i,o,u){var a=t.call(this,e,r,i,n,o,u)||this;return a.router=n,a.modalCtrl=e,a.authProvider=r,a.navCtrl=i,a.translateService=o,a.nativeService=u,a.params=l(n),a}return r.d(n,t),n}(i.a))}}]);