(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{TDSW:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var l=e("mrSG"),o=e("hAUF"),r=e("ZOGp"),a=e("YsCg"),i=e("93YN"),u=function(){function n(n,t,e,l,o,r){this.modalCtrl=n,this.authProvider=t,this.navCtrl=e,this.router=l,this.translateService=o,this.nativeService=r}return n.prototype.doSelectCountry=function(){var n=this;return new Promise((function(t,e){return l.b(n,void 0,void 0,(function(){var n;return l.e(this,(function(l){switch(l.label){case 0:return[4,this.modalCtrl.create({component:i.a,componentProps:{isNeedAll:!0}})];case 1:return(n=l.sent()).onDidDismiss().then((function(n){t(n.data)})).catch((function(n){e(n)})),[4,n.present()];case 2:return l.sent(),[2]}}))}))}))},n.prototype.SendSecurityCode=function(n){var t=this;return new Promise((function(e,o){return l.b(t,void 0,void 0,(function(){return l.e(this,(function(t){return this.authProvider.SendSecurityCode2(n).subscribe((function(n){e("")}),(function(n){e(n)})),[2]}))}))}))},n.prototype.LoginByWFAccount=function(n){var t=this;return new Promise((function(e,o){return l.b(t,void 0,void 0,(function(){var t=this;return l.e(this,(function(l){return this.authProvider.LoginByWFAccount2(n).subscribe((function(n){t.setTabsToRoot()}),(function(n){e(n)})),[2]}))}))}))},n.prototype.Login=function(n){var t=this;return new Promise((function(e,o){return l.b(t,void 0,void 0,(function(){var t=this;return l.e(this,(function(l){return this.authProvider.Login2(n).subscribe((function(n){t.setTabsToRoot()}),(function(n){e(n)})),[2]}))}))}))},n.prototype.login=function(n,t,e,o){var r=this;return new Promise((function(e,o){return l.b(r,void 0,void 0,(function(){var o=this;return l.e(this,(function(l){switch(n){case a.j.SendSecurityCodeBefore:this.authProvider.SendSecurityCode2(t).subscribe((function(n){e("")}),(function(n){e(n)}));break;case a.j.LoginByWFAccountBefore:this.authProvider.LoginByWFAccount2(t).subscribe((function(n){o.setTabsToRoot()}),(function(n){e(n)}));break;case a.j.LoginByMobileBefore:this.authProvider.Login2(t).subscribe((function(n){o.setTabsToRoot()}),(function(n){e(n)}))}return[2]}))}))}))},n.prototype.setTabsToRoot=function(){this.router.navigate([o.b.HomePage],{replaceUrl:!0})},n.prototype.verificationErrorHandle=function(n,t){return n.errcode===r.a.USER.INCORRECT_VERIFICATION_CODE?this.translateService.instant("VERIFICATION_CODE_INCORRECT")+";"+Date.now():n.errcode===r.a.USER.VERIFICATION_CODE_EXPIRED?this.translateService.instant("VERIFICATION_CODE_EXPIRED")+";"+Date.now():void this.loginError(n)},n.prototype.loginError=function(n){var t="";switch(n.errcode){case r.a.USER.INACTIVE_USER:t="ACCOUNT_LOCKED";break;case r.a.USER.USER_NOT_EXIST:t="LOGIN_ERROR_USER_NOT_EXIST";break;case r.a.USER.MOBILE_NOT_EXIST:t="LOGIN_ERROR_PHONE_NUMBER_NOT_EXIST";break;case r.a.USER.INCORRECT_ACCOUNT_AND_PASSWORD:case r.a.USER.INCORRECT_PASSWORD:t="LOGIN_ERROR_INCORRECT_PASSWORD";break;default:t="LOGIN_ERROR"}this.nativeService.alert(n.errcode+","+this.translateService.instant(t))},n}()},fArx:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),o=function(){return function(){}}(),r=e("pMnS"),a=e("A7o+"),i=e("Ip0R"),u=e("oBZk"),s=e("ZZ/e"),c=e("gIcY"),d=e("mrSG"),b=e("hAUF"),h=e("/pyt"),g=e("VGsI"),f=(e("Q1LM"),e("ZwiA")),p=e("6m4Z"),C=e("j2kG"),m=e.n(C),v=e("riPR"),y=e("VvKu"),O=function(n){function t(t,e,l,o,r,a,i,u){var s=n.call(this,o,r,l,b.b.MyPage)||this;return s.navCtrl=t,s.modal=e,s.nativeService=l,s.router=o,s.session=r,s.socialProvider=a,s.translate=i,s.eventsService=u,s.isSigned=!1,s.weeksDisplay=[],s.monthDays=[],s.currentYearMonth="",s.CheckInRecordList=[],s.totalCheckedCount=0,s.isIos=!1,s.isDataLoading=!1,["SOCIAL_CALENDAR_SUNDAY","SOCIAL_CALENDAR_MONDAY","SOCIAL_CALENDAR_TUESDAY","SOCIAL_CALENDAR_WEDNESDAY","SOCIAL_CALENDAR_THURSDAY","SOCIAL_CALENDAR_FRIDAY","SOCIAL_CALENDAR_SATURDAY"].forEach((function(n){s.weeksDisplay.push(s.translate.instant(n))})),s.currentYearMonth=g.a.dateFormat(new Date),s.monthDays=s.createCalendar(s.currentYearMonth),s.getCheckInRecord(),s.isIos=s.nativeService.isIos(),s}return d.d(t,n),t.prototype.chooseDate=function(n){var t=new Date(n.substr(0,7));this.monthDays=this.createCalendar(t),this.getCheckInRecord(t.getFullYear().toString(),(t.getMonth()+1).toString())},t.prototype._getLastYearAndMonth=function(n){var t={year:0,month:0},e=new Date(n);return 0===e.getMonth()?(t.year=e.getFullYear()-1,t.month=12):(t.year=e.getFullYear(),t.month=e.getMonth()),new Date(t.year+"-"+(t.month>=10?t.month:"0"+t.month.toString())+"-01")},t.prototype._getNextYearAndMonth=function(n){var t={year:0,month:0},e=new Date(n);return 11===e.getMonth()?(t.year=e.getFullYear()+1,t.month=1):(t.year=e.getFullYear(),t.month=e.getMonth()+2),new Date(t.year+"-"+(t.month>=10?t.month:"0"+t.month.toString())+"-01")},t.prototype.createCalendar=function(n){var t=new Date(n),e=this._getLastYearAndMonth(t),l=this._getNextYearAndMonth(t),o=new m.a({today:new Date(n)}).weeks.map((function(n){return n.map((function(n){return n.day}))}));new m.a({today:new Date(e)}).weeks.map((function(n){return n.map((function(n){return n.day}))})),new m.a({today:new Date(l)}).weeks.map((function(n){return n.map((function(n){return n.day}))})),o[o.length-1][6]>7&&o.pop();for(var r=[],a=0,i=0,u=o;i<u.length;i++){for(var s=[],c=0,d=u[i];c<d.length;c++){var b=d[c],h={day:b,isCurrentMonth:!0,isToday:!1,date:null};0===a&&b>7?(e.setDate(b),h.date=g.a.dateFormat(e)):a>=o.length-2&&b<=7?(l.setDate(b),h.date=g.a.dateFormat(l)):(t.setDate(b),h.date=g.a.dateFormat(t),h.isToday=g.a.dateFormat(t)===g.a.dateFormat(new Date)),s.push(h)}r.push(s),a++}return r},t.prototype.doSign=function(){this.currentYearMonth=g.a.dateFormat(new Date),this.CheckIn()},t.prototype.getCheckInRecord=function(n,t){var e=this;if(!n||!t){var l=new Date;n=l.getFullYear().toString(),t=(l.getMonth()+1).toString()}this.isDataLoading=!0,this.socialProvider.CheckInRecord_New(n,t).subscribe((function(n){e.CheckInRecordList=n.result.checkInRecords,e.totalCheckedCount=n.result.continueDays,e.isDataLoading=!1;for(var t=0,l=n.result.checkInRecords;t<l.length;t++){var o=l[t];g.a.dateFormat(new Date(o.time))===g.a.dateFormat(new Date)&&o.isChecked&&(e.isSigned=!0);for(var r=0,a=e.monthDays;r<a.length;r++)for(var i=0,u=a[r];i<u.length;i++){var s=u[i];g.a.dateFormat(new Date(o.time))===g.a.dateFormat(new Date(s.date))&&Object.assign(s,o)}}}))},t.prototype.calcTotalCheckedCount=function(){this.totalCheckedCount=0;for(var n=0,t=this.monthDays;n<t.length;n++)for(var e=0,l=t[n];e<l.length;e++)l[e].isChecked&&this.totalCheckedCount++},t.prototype.setDateToSigned=function(n){for(var t=0,e=this.monthDays;t<e.length;t++)for(var l=0,o=e[t];l<o.length;l++){var r=o[l];n===r.date&&(r.isSigned=!0)}},t.prototype.CheckIn=function(){var n=this;this.socialProvider.CheckIn(g.a.dateFormat(new Date)).subscribe((function(t){return d.b(n,void 0,void 0,(function(){var n;return d.e(this,(function(e){switch(e.label){case 0:return 0!==t.errcode?[3,3]:(this.eventsService.emit(y.a.RefreshAssets),this.getCheckInRecord(),n={title:this.translate.instant("SOCIAL_CHECKIN_CHECKINREWARD_TITLE"),subtitle:'<span style="font-size: 2.5rem;">'+t.result.score+"</span>"+this.translate.instant("SOCIAL_IPROUD_POINTS"),imageUrl:"assets/img/achievement/sign_bg.png",buttonText:this.translate.instant("SOCIAL_CHECKIN_CHECKINREWARD_BUTTON_TEXT"),isShowCloseButton:!1},[4,this.modal.create({component:h.a,componentProps:{details:n},showBackdrop:!0,cssClass:["sp-backdrop","modal-transparency"]})]);case 1:return[4,e.sent().present()];case 2:e.sent(),this.isSigned=!0,e.label=3;case 3:return[2]}}))}))}))},t.prototype.getNextContinousDayObject=function(n){return!!n&&n.split("|")},t.prototype.ionViewWillEnter=function(){n.prototype.ionViewWillEnter.call(this)},t.prototype.ionViewWillLeave=function(){n.prototype.ionViewWillLeave.call(this)},t}(e("mGGX").c),_=e("ZYCi"),M=e("yrhi"),k=l.rb({encapsulation:0,styles:[[".header-md[_ngcontent-%COMP%]:after{height:0}.toolbar-background[_ngcontent-%COMP%]{background:0 0;border-color:transparent}ion-toolbar[_ngcontent-%COMP%]{--background:transparent!important;--border-width:0!important;--box-shadow:none;--color:white}ion-content[_ngcontent-%COMP%]{--color:white}ion-back-button[_ngcontent-%COMP%]{--color:#999}.title-ios[_ngcontent-%COMP%]{color:#f1f1f1}ion-grid[_ngcontent-%COMP%]{background:0 0!important}.calendar[_ngcontent-%COMP%]{position:absolute;bottom:10px;font-family:Microsoft JhengHei;overflow:visible;color:var(--text-primary-color);background:var(--bg-primary-color);margin:12px;width:calc(100% - 24px);font-size:1.4rem;box-shadow:0 1px 2px rgba(0,0,0,.3);border-radius:10px}.calendar[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{padding:0 0 15px}.calendar[_ngcontent-%COMP%]   .calendar-datetime[_ngcontent-%COMP%]{position:relative;padding:0;border-radius:10px 10px 0 0;width:100%}.calendar[_ngcontent-%COMP%]   .calendar-datetime[_ngcontent-%COMP%]   .signed-record[_ngcontent-%COMP%]{padding:9px 0;display:block;width:-webkit-max-content;width:-moz-max-content;width:max-content}.calendar[_ngcontent-%COMP%]   .calendar-header[_ngcontent-%COMP%]{padding:10px 0}.calendar[_ngcontent-%COMP%]   .header-border[_ngcontent-%COMP%]{width:90%;height:1px;margin:auto}.calendar[_ngcontent-%COMP%]   .sign-button-wrapper[_ngcontent-%COMP%]{height:0;position:absolute;right:1rem}.calendar[_ngcontent-%COMP%]   .sign-button-container[_ngcontent-%COMP%]{padding:8px;background-color:rgba(223,223,223,.5);border-radius:5px;top:-2rem;right:1rem;display:block;float:right;position:relative;z-index:999}.calendar[_ngcontent-%COMP%]   .sign-button-container[_ngcontent-%COMP%]   .can-click[_ngcontent-%COMP%]:active, .calendar[_ngcontent-%COMP%]   .sign-button-container[_ngcontent-%COMP%]   .can-click[_ngcontent-%COMP%]:hover{background:#134dab}.calendar[_ngcontent-%COMP%]   .sign-button-container[_ngcontent-%COMP%]   .sign-button[_ngcontent-%COMP%]{background-color:#44679f;color:#f0f8ff;padding:8px;border-radius:5px;width:100%;height:100%;display:-webkit-inline-box;display:inline-flex}.calendar[_ngcontent-%COMP%]   .sign-button-container[_ngcontent-%COMP%]   .sign-button[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%]{font-family:inherit;display:-webkit-box;display:flex;width:100%;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.calendar[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]{z-index:2}.calendar[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]   .coins-persent[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.calendar[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]   .coins[_ngcontent-%COMP%]{width:1rem;display:inline-block}.calendar[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.8rem;font-size:1rem;margin:auto;padding-top:0}.calendar[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]   .lastly[_ngcontent-%COMP%]{-webkit-animation:1s linear infinite present;animation:1s linear infinite present}.calendar[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]   .persent[_ngcontent-%COMP%]{white-space:nowrap;font-size:1rem}.calendar[_ngcontent-%COMP%]   .day-col[_ngcontent-%COMP%]{font-size:1.2rem;padding:5px 0}.calendar[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{padding:5px 0;position:relative;display:-webkit-box;display:flex;border-radius:50%;align-content:baseline;height:4rem;-webkit-box-pack:center;justify-content:center;font-weight:700;vertical-align:middle;font-size:1.5rem}.calendar[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .day-persent[_ngcontent-%COMP%]{padding:0}.calendar[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .not-current-month[_ngcontent-%COMP%]{font-weight:100}.calendar[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{z-index:2;-webkit-transition:1s .1s;transition:all 1s ease .1s}.calendar[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .sign-logo[_ngcontent-%COMP%]{width:1rem;margin:1px auto auto}.calendar[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]{z-index:1;width:2.5rem;position:absolute;height:2.5rem;border-radius:50%;background-image:-webkit-gradient(linear,left top,right bottom,from(#eeba0e),to(#e916eb));background-image:linear-gradient(to bottom right,#eeba0e,#e916eb);text-align:center;left:0;right:0;top:0;margin:auto}.calendar[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .today-ios[_ngcontent-%COMP%]{top:5px}@-webkit-keyframes present{from,to{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}}@keyframes present{from,to{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}}.today-color[_ngcontent-%COMP%]{color:#fff}.calendar-datetime[_ngcontent-%COMP%]{background-color:var(--bg-secondary-color);border-top-left-radius:10px;border-top-right-radius:10px}.not-current-month[_ngcontent-%COMP%]{color:gray}.persent[_ngcontent-%COMP%]{color:#c1c1c1}.header-border[_ngcontent-%COMP%]{background-color:var(--border-secondary-color)}.dark-theme[_ngcontent-%COMP%]   .today-color[_ngcontent-%COMP%]{color:#222}.dark-theme[_ngcontent-%COMP%]   .calendar-datetime[_ngcontent-%COMP%]{background-color:#343434}.dark-theme[_ngcontent-%COMP%]   .header-border[_ngcontent-%COMP%]{background-color:#8d8d8d}.dark-theme[_ngcontent-%COMP%]   .card-ios[_ngcontent-%COMP%]{background-color:#222}.dark-theme[_ngcontent-%COMP%]   .persent[_ngcontent-%COMP%]{color:#c1c1c1}"]],data:{}});function D(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,3,"div",[["class","can-click sign-button"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.doSign()&&l),l}),null,null)),(n()(),l.tb(1,0,null,null,2,"div",[["class","button-text"]],null,null,null,null,null)),(n()(),l.Lb(2,null,[" "," "])),l.Gb(131072,a.j,[a.k,l.h])],null,(function(n,t){n(t,2,0,l.Mb(t,2,0,l.Fb(t,3).transform("SOCIAL_CHECKIN_BUTTON")))}))}function P(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,3,"div",[["class"," sign-button"]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,2,"div",[["class","button-text"]],null,null,null,null,null)),(n()(),l.Lb(2,null,[" "," "])),l.Gb(131072,a.j,[a.k,l.h])],null,(function(n,t){n(t,2,0,l.Mb(t,2,0,l.Fb(t,3).transform("SOCIAL_CHECKIN_ALREADY_SIGN")))}))}function w(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,4,"div",[["class","sign-button-container"],["slot","end"]],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,D)),l.sb(2,16384,null,0,i.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.ib(16777216,null,null,1,null,P)),l.sb(4,16384,null,0,i.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component;n(t,2,0,!e.isSigned),n(t,4,0,e.isSigned)}),null)}function I(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,2,"ion-col",[],null,null,null,u.qb,u.m)),l.sb(1,49152,null,0,s.v,[l.h,l.k,l.z],null,null),(n()(),l.Lb(2,0,[" "," "]))],null,(function(n,t){n(t,2,0,t.context.$implicit)}))}function S(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,3,"div",[["class","today"]],null,null,null,null,null)),l.Ib(512,null,i.v,i.w,[l.s,l.t,l.k,l.D]),l.sb(2,278528,null,0,i.h,[i.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Hb(3,{"today-ios":0})],(function(n,t){var e=n(t,3,0,t.component.isIos);n(t,2,0,"today",e)}),null)}function x(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,0,"img",[["class","sign-logo"],["src","assets/img/correct.png"]],null,null,null,null,null))],null,null)}function N(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,6,"span",[["class","date"]],null,null,null,null,null)),l.Ib(512,null,i.v,i.w,[l.s,l.t,l.k,l.D]),l.sb(2,278528,null,0,i.h,[i.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Hb(3,{"not-current-month":0}),(n()(),l.Lb(4,null,[""," "])),(n()(),l.ib(16777216,null,null,1,null,x)),l.sb(6,16384,null,0,i.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=n(t,3,0,!t.parent.context.$implicit.isCurrentMonth);n(t,2,0,"date",e),n(t,6,0,t.parent.context.$implicit.isChecked)}),(function(n,t){n(t,4,0,t.parent.context.$implicit.day)}))}function A(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,5,"span",[["class","extra"]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,0,"img",[["class","lastly"]],[[8,"src",4]],null,null,null,null)),(n()(),l.tb(2,0,null,null,3,"span",[["class","coins-persent"]],null,null,null,null,null)),(n()(),l.tb(3,0,null,null,0,"img",[["class","coins"],["src","assets/img/points.png"]],null,null,null,null,null)),(n()(),l.tb(4,0,null,null,1,"span",[["class","persent"]],null,null,null,null,null)),(n()(),l.Lb(5,null,["",""]))],null,(function(n,t){var e=t.component;n(t,1,0,e.getNextContinousDayObject(t.parent.context.$implicit.nextContinousDayIcon)[1]),n(t,5,0,e.getNextContinousDayObject(t.parent.context.$implicit.nextContinousDayIcon)[0])}))}function E(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,11,"ion-col",[["class","day-col"]],null,null,null,u.qb,u.m)),l.sb(1,49152,null,0,s.v,[l.h,l.k,l.z],null,null),(n()(),l.tb(2,0,null,0,9,"div",[["class","day"]],null,null,null,null,null)),l.Ib(512,null,i.v,i.w,[l.s,l.t,l.k,l.D]),l.sb(4,278528,null,0,i.h,[i.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Hb(5,{"today-color":0}),(n()(),l.ib(16777216,null,null,1,null,S)),l.sb(7,16384,null,0,i.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.ib(16777216,null,null,1,null,N)),l.sb(9,16384,null,0,i.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.ib(16777216,null,null,1,null,A)),l.sb(11,16384,null,0,i.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=n(t,5,0,t.context.$implicit.isToday);n(t,4,0,"day",e),n(t,7,0,t.context.$implicit.isToday),n(t,9,0,!t.context.$implicit.nextContinousDayIcon||t.context.$implicit.isChecked),n(t,11,0,t.context.$implicit.nextContinousDayIcon&&!t.context.$implicit.isChecked)}),null)}function L(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,3,"ion-row",[],null,null,null,u.Pb,u.L)),l.sb(1,49152,null,0,s.lb,[l.h,l.k,l.z],null,null),(n()(),l.ib(16777216,null,0,1,null,E)),l.sb(3,278528,null,0,i.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){n(t,3,0,t.context.$implicit)}),null)}function R(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,12,"ion-header",[["class","ion-no-border"],["translucent",""]],null,null,null,u.wb,u.s)),l.sb(1,49152,null,0,s.D,[l.h,l.k,l.z],{translucent:[0,"translucent"]},null),(n()(),l.tb(2,0,null,0,10,"ion-toolbar",[["class","ion-no-border"]],null,null,null,u.hc,u.db)),l.sb(3,49152,null,0,s.Eb,[l.h,l.k,l.z],null,null),(n()(),l.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,u.jb,u.f)),l.sb(5,49152,null,0,s.n,[l.h,l.k,l.z],null,null),(n()(),l.tb(6,0,null,0,2,"ion-back-button",[["text"," "]],null,[[null,"click"]],(function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l.Fb(n,8).onClick(e)&&o),o}),u.gb,u.c)),l.sb(7,49152,null,0,s.i,[l.h,l.k,l.z],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),l.sb(8,16384,null,0,s.j,[[2,s.kb],s.Lb],{defaultHref:[0,"defaultHref"]},null),(n()(),l.tb(9,0,null,0,3,"ion-title",[],null,null,null,u.fc,u.bb)),l.sb(10,49152,null,0,s.Cb,[l.h,l.k,l.z],null,null),(n()(),l.Lb(11,0,["",""])),l.Gb(131072,a.j,[a.k,l.h]),(n()(),l.tb(13,0,null,null,34,"ion-content",[["fullscreen",""]],null,null,null,u.rb,u.n)),l.sb(14,49152,null,0,s.w,[l.h,l.k,l.z],{fullscreen:[0,"fullscreen"]},null),(n()(),l.tb(15,0,null,0,32,"ion-card",[["class","calendar"]],null,null,null,u.nb,u.g)),l.sb(16,49152,null,0,s.o,[l.h,l.k,l.z],null,null),(n()(),l.tb(17,0,null,0,30,"ion-grid",[["class","ion-text-center grid"]],null,null,null,u.vb,u.r)),l.sb(18,49152,null,0,s.C,[l.h,l.k,l.z],null,null),(n()(),l.tb(19,0,null,0,21,"ion-row",[["class","ion-text-center calendar-datetime"]],null,null,null,u.Pb,u.L)),l.sb(20,49152,null,0,s.lb,[l.h,l.k,l.z],null,null),(n()(),l.tb(21,0,null,0,2,"div",[["class","sign-button-wrapper"]],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,w)),l.sb(23,16384,null,0,i.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.tb(24,0,null,0,5,"ion-col",[],null,null,null,u.qb,u.m)),l.sb(25,49152,null,0,s.v,[l.h,l.k,l.z],null,null),(n()(),l.tb(26,0,null,0,3,"span",[["class","signed-record"]],null,null,null,null,null)),(n()(),l.Lb(27,null,[" "," "," "," "])),l.Gb(131072,a.j,[a.k,l.h]),l.Gb(131072,a.j,[a.k,l.h]),(n()(),l.tb(30,0,null,0,8,"ion-col",[],null,null,null,u.qb,u.m)),l.sb(31,49152,null,0,s.v,[l.h,l.k,l.z],null,null),(n()(),l.tb(32,0,null,0,6,"ion-datetime",[["displayFormat","YYYY-MM"],["pickerFormat","YYYY/MM"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,t,e){var o=!0,r=n.component;return"ionBlur"===t&&(o=!1!==l.Fb(n,34)._handleBlurEvent(e.target)&&o),"ionChange"===t&&(o=!1!==l.Fb(n,34)._handleChangeEvent(e.target)&&o),"ngModelChange"===t&&(o=!1!==(r.currentYearMonth=e)&&o),"ionChange"===t&&(o=!1!==r.chooseDate(r.currentYearMonth)&&o),o}),u.sb,u.o)),l.sb(33,49152,null,0,s.x,[l.h,l.k,l.z],{displayFormat:[0,"displayFormat"],pickerFormat:[1,"pickerFormat"]},null),l.sb(34,16384,null,0,s.Qb,[l.k],null,null),l.Ib(1024,null,c.i,(function(n){return[n]}),[s.Qb]),l.sb(36,671744,null,0,c.n,[[8,null],[8,null],[8,null],[6,c.i]],{model:[0,"model"]},{update:"ngModelChange"}),l.Ib(2048,null,c.j,null,[c.n]),l.sb(38,16384,null,0,c.k,[[4,c.j]],null,null),(n()(),l.tb(39,0,null,0,1,"ion-col",[],null,null,null,u.qb,u.m)),l.sb(40,49152,null,0,s.v,[l.h,l.k,l.z],null,null),(n()(),l.tb(41,0,null,0,3,"ion-row",[["class","calendar-header"]],null,null,null,u.Pb,u.L)),l.sb(42,49152,null,0,s.lb,[l.h,l.k,l.z],null,null),(n()(),l.ib(16777216,null,0,1,null,I)),l.sb(44,278528,null,0,i.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null),(n()(),l.tb(45,0,null,0,0,"div",[["class","header-border"]],null,null,null,null,null)),(n()(),l.ib(16777216,null,0,1,null,L)),l.sb(47,278528,null,0,i.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){var e=t.component;n(t,1,0,""),n(t,7,0,e.defaultUrl," "),n(t,8,0,e.defaultUrl),n(t,14,0,""),n(t,23,0,!e.isDataLoading),n(t,33,0,"YYYY-MM","YYYY/MM"),n(t,36,0,e.currentYearMonth),n(t,44,0,e.weeksDisplay),n(t,47,0,e.monthDays)}),(function(n,t){var e=t.component;n(t,11,0,l.Mb(t,11,0,l.Fb(t,12).transform("SOCIAL_CHECKIN_TITLE"))),n(t,27,0,l.Mb(t,27,0,l.Fb(t,28).transform("SOCIAL_CHECKIN_ACCUMULATE_DAYS")),e.totalCheckedCount,l.Mb(t,27,2,l.Fb(t,29).transform("SOCIAL_CHECKIN_ACCUMULATE_DAY"))),n(t,32,0,l.Fb(t,38).ngClassUntouched,l.Fb(t,38).ngClassTouched,l.Fb(t,38).ngClassPristine,l.Fb(t,38).ngClassDirty,l.Fb(t,38).ngClassValid,l.Fb(t,38).ngClassInvalid,l.Fb(t,38).ngClassPending)}))}function F(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"page-sign-in",[],null,null,null,R,k)),l.sb(1,49152,null,0,O,[s.Lb,s.Kb,p.a,_.m,f.a,M.a,a.k,v.a],null,null)],null,null)}var T=l.pb("page-sign-in",O,F,{},{},[]),Y=e("j1ZV");e.d(t,"SignInPageModuleNgFactory",(function(){return U}));var U=l.qb(o,[],(function(n){return l.Cb([l.Db(512,l.j,l.bb,[[8,[r.a,T]],[3,l.j],l.x]),l.Db(4608,i.l,i.k,[l.u,[2,i.A]]),l.Db(4608,s.c,s.c,[l.z,l.g]),l.Db(4608,s.Kb,s.Kb,[s.c,l.j,l.q]),l.Db(4608,s.Ob,s.Ob,[s.c,l.j,l.q]),l.Db(4608,c.r,c.r,[]),l.Db(4608,c.d,c.d,[]),l.Db(4608,a.g,a.f,[]),l.Db(4608,a.c,a.e,[]),l.Db(4608,a.i,a.d,[]),l.Db(4608,a.b,a.a,[]),l.Db(4608,a.k,a.k,[a.l,a.g,a.c,a.i,a.b,a.m,a.n]),l.Db(5120,l.d,(function(n,t,e){return[s.Ub(n,t,e)]}),[s.Tb,i.c,l.z]),l.Db(1073742336,_.n,_.n,[[2,_.t],[2,_.m]]),l.Db(1073742336,a.h,a.h,[]),l.Db(1073742336,i.b,i.b,[]),l.Db(1073742336,s.Gb,s.Gb,[]),l.Db(1073742336,c.q,c.q,[]),l.Db(1073742336,c.h,c.h,[]),l.Db(1073742336,c.o,c.o,[]),l.Db(1073742336,Y.a,Y.a,[]),l.Db(1073742336,o,o,[]),l.Db(256,a.n,void 0,[]),l.Db(256,a.m,void 0,[]),l.Db(256,s.Tb,void 0,[]),l.Db(1024,_.k,(function(){return[[{path:"",component:O}]]}),[])])}))},j2kG:function(n,t,e){"use strict";var l={english:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],french:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],spanish:["Domingo","Lunes","Martes","Mi\xe9rcoles","Jueves","Viernes","S\xe1bado"]},o={english:["January","February","March","April","May","June","July","August","September","October","November","December"],french:["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","D\xe9cembre"],spanish:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]};const r={english:"english",french:"french",spanish:"spanish"};n.exports=class{constructor(n={}){const t=n.today||new Date;n.language=r[n.language]||r.english;const e={year:t.getFullYear(),monthIndex:t.getMonth(),abbreviate:2,firstDayOfWeek:0,showToday:!0,previousMonth:" ",nextMonth:" "};this.options=Object.assign({},e,n),this.dayNames=l[this.options.language],this.monthNames=o[this.options.language],this.today=this.createDate(t.getFullYear(),t.getMonth(),t.getDate());for(var a={dayNames:[]},i=0,u=this.dayNames.length;i<u;i++){var s,c=this.dayNames[i];this.options.abbreviate?(s=c.substr(0,this.options.abbreviate),a.dayNames[i]={name:c,abbr:s}):a.dayNames[i]={name:c}}this.buildWeeksArray(),this.data=a}addDaysToDate(n,t){return new Date(n.getTime()+24*t*60*60*1e3)}buildWeeksArray(){var n,t,e,l,o=1,r=this.options;this.weeks=[];for(var a=this.createDate(r.year,r.monthIndex,1),i=this.getDaysInMonth(r.year,r.monthIndex),u=a.getDay(),s=0;s<6;s++){l=[];for(var{firstDayOfWeek:c}=this.options,d=c;d<c+7;d++)n=[],e={},0===s&&d<u?t=this.createDate(a.getFullYear(),a.getMonth(),1-(u-d)):o>i?(t=this.createDate(a.getFullYear(),a.getMonth(),o),o+=1):(n.push("month-day"),t=this.createDate(a.getFullYear(),a.getMonth(),o),o+=1,r.showToday&&t.toDateString()===this.today.toDateString()&&n.push("today")),this.isWeekend(t)&&n.push("weekend-day"),e.className=n.join(" "),e.id="day"+t.getTime(),e.day=t.getDate(),e.date=t,e.monthIndex=t.getMonth(),e.year=t.getFullYear(),t=void 0,l.push(e);this.weeks.push(l)}}changeMonth(n,t){this.options.year=n,this.options.monthIndex=t,this.buildWeeksArray()}createDate(n,t,e){return new Date(n,t,e,0,0)}getDaysInMonth(n,t){return n=n||this.today.getFullYear(),t=t||this.today.getMonth(),new Date(n,t+1,0).getDate()}getDayName(n){return this.dayNames[n]}getMonthName(n){return this.monthNames[n]}isWeekend(n){var t=n.getDay();return 0===t||6===t}}},mGGX:function(n,t,e){"use strict";var l=e("mrSG"),o=e("TDSW"),r=(e("wqKC"),e("93YN"),function(){function n(n,t){this.session=n,this.nativeService=t}return n.prototype.ionViewWillEnter=function(){this.session.isDarkMode||this.nativeService.setStyleLightContent()},n.prototype.ionViewWillLeave=function(){this.nativeService.statusBarStyle(this.session.isDarkMode)},n}());e.d(t,"i",(function(){return i})),e.d(t,"a",(function(){return u})),e.d(t,"e",(function(){return s})),e.d(t,"b",(function(){return c})),e.d(t,"f",(function(){return b})),e.d(t,"h",(function(){return h})),e.d(t,"g",(function(){return g})),e.d(t,"c",(function(){return f})),e.d(t,"d",(function(){return p}));var a=function(n){var t={},e=n.getCurrentNavigation().extras;return e&&e.state&&(t=e.state),t},i=function(n,t){var e=n||t.previousUrl;return t&&(e=t.previousUrl),e},u=function(){function n(n){this.events=n}return n.prototype.scrollWidth=function(n,t){return{width:n||window.screen.availWidth-5+"px",height:(t||44)+"px"}},n.prototype.completeRefresh=function(n){n&&n.target.complete()},n.prototype.completedoInfinite=function(n){n&&n.target.complete()},n}(),s=function(){return function(n,t){this.paramUrl=n,this.session=t,this.defaultUrl="",this.defaultUrl=i(n,this.session)}}(),c=function(){return function(n){this.router=n,this.params=a(n)}}(),d=function(n){function t(t,e){var l=n.call(this,e)||this;return l.router=t,l.events=e,l.params=a(t),l}return l.d(t,n),t}(u),b=function(n){function t(t,e,l){var o=n.call(this,e)||this;return o.paramUrl=t,o.events=e,o.session=l,o.defaultUrl="",o.defaultUrl=i(t,l),o}return l.d(t,n),t}(u),h=function(n){function t(t,e,l){var o=n.call(this,e,l)||this;return o.router=t,o.paramUrl=e,o.session=l,o.defaultUrl="",o.params=a(t),o}return l.d(t,n),t}(s),g=function(n){function t(t,e,l,o){var r=n.call(this,t,l)||this;return r.router=t,r.paramUrl=e,r.events=l,r.session=o,r.defaultUrl="",r.defaultUrl=i(e,r.session),r}return l.d(t,n),t}(d),f=function(n){function t(t,e,l,o){var r=n.call(this,t,e,l)||this;return r.router=t,r.session=e,r.nativeService=l,r.paramUrl=o,r.defaultUrl=i(o,e),r}return l.d(t,n),t}(function(n){function t(t,e,l){var o=n.call(this,e,l)||this;return o.router=t,o.session=e,o.nativeService=l,o.params=a(t),o}return l.d(t,n),t}(r)),p=function(n){function t(t,e,l,o,r,u,s,c){var d=n.call(this,t,e,l,o,r,u)||this;return d.router=t,d.modalCtrl=e,d.authProvider=l,d.navCtrl=o,d.translateService=r,d.nativeService=u,d.paramUrl=s,d.session=c,d.params=a(t),d.defaultUrl=i(s,c),d}return l.d(t,n),t}(function(n){function t(t,e,l,o,r,i){var u=n.call(this,e,l,o,t,r,i)||this;return u.router=t,u.modalCtrl=e,u.authProvider=l,u.navCtrl=o,u.translateService=r,u.nativeService=i,u.params=a(t),u}return l.d(t,n),t}(o.a))}}]);