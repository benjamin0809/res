(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"0DNq":function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),i=function(){return function(){}}(),r=e("pMnS"),s=e("1bmy"),u=e("liwm"),a=e("riPR"),o=e("ZwiA"),c=e("A7o+"),b=e("oBZk"),p=e("ZZ/e"),h=e("Ip0R"),d=e("h5Qc"),g=e("qIgY"),f=e("n90K"),m=e("6m4Z"),v=e("TY44"),S=e("4DE5"),C=e("ZYjt"),E=e("mrSG"),y=e("mGGX"),O=e("U7T7"),I=e("w6Z3"),w=(e("Q1LM"),e("o0su")),M=e("hAUF"),_=function(n){function t(t,e,l,i,r,s,u,a,o,c,b,p,h,d,g,f,m){var v=n.call(this,m,M.b.MessagePage,a)||this;return v.navCtrl=t,v.actionSheetCtrl=e,v.eventsService=l,v.messageProvider=i,v.alertCtrl=r,v.widgetProvider=s,v.translateService=u,v.session=a,v.sanitizer=o,v.clipboard=c,v.cacheProvider=b,v.element=p,v.clubProvider=h,v.storage=d,v.commonService=g,v.cdf=f,v.router=m,v.messages=[],v.messageTitle="",v.isDataLoading=!1,v.isDataEmpty=!1,v.pageCount=10,v.unreadCount=0,v}return E.d(t,n),t.prototype.ngOnInit=function(){var n=this;this.messageTitle=this.params.widgetName,this.session.messageWidgetId=this.params.widgetId,this.unreadCount=this.messageProvider.getUnreadCount(),this.getCurrentWidget(),this.params.messages?(this.messages.push.apply(this.messages,this.params.messages.reverse()),this.finiteScroll=this.messages.length>=this.pageCount,this.refreshDisplaytime(),this.transHtml()):this.createArray(),this.eventsService.on(O.r.Changed,(function(){n.refreshDisplaytime()})),this.eventsService.on(O.y.Logined,(function(t){n.createArray()})),this.eventsService.on(O.u.AddMessage,(function(t){n.refreshSingleMessageTime(t),n.transSingleHtml(t),n.messages.unshift(t),n.unreadCount=n.messageProvider.getUnreadCount(),n.detectChanges()}))},t.prototype.ngAfterViewInit=function(){this.setMessageTimer()},t.prototype.ngOnDestroy=function(){clearTimeout(this.timer)},t.prototype.backButtonText=function(){return this.unreadCount>99?"99+":0===this.unreadCount?"":this.unreadCount},t.prototype.getCurrentWidget=function(){return E.b(this,void 0,void 0,(function(){var n,t,e,l;return E.e(this,(function(i){switch(i.label){case 0:return this.currentWidget=this.widgetProvider.getWidgetById(this.session.messageWidgetId),this.currentWidget?[3,2]:(n="",null!=this.session.user&&(n=this.session.user.employeeInfo.siteCode),[4,this.storage.getItem("siteCode")]);case 1:(t=i.sent())&&(n=t),e=this.params.fromType,["board","video","club"].some((function(n){return w.a.containsStringIgnore(n,e)}))&&(l={id:this.params.widgetId,widgetName:this.params.widgetName,appPageName:"",iconUrl:this.params.widgetIcon,homeUrl:this.clubProvider.BoardDetail(this.params.widgetId,e,n)},this.currentWidget=l),i.label=2;case 2:return[2]}}))}))},t.prototype.openWidget=function(n){var t={url:n.appPageName||n.homeUrl,title:n.widgetName,description:"",imageUrl:n.iconUrl,appId:n.id.toString(),options:{canShare:n.canShare,allowCopyLink:n.allowCopyLink,allowOpenInBrowser:n.allowOpenInBrowser,useNativeBrowser:n.useNativeBrowser}};this.widgetProvider.openWebpage(t,this.router)},t.prototype.doRefresh=function(n){this.messages=[],this.createArray(n)},t.prototype.doInfinite=function(n){this.createArray(n)},t.prototype.createArray=function(n){var t=this;this.isDataLoading=!0,this.messageProvider.queryMessage(this.session.messageWidgetId,this.pageCount,this.messages?this.messages.length:0,!0).subscribe((function(n){n&&(t.finiteScroll=n.length===t.pageCount,t.isDataLoading=!1,t.messages.push.apply(t.messages,n),t.refreshDisplaytime(),t.transHtml())}),(function(n){t.isDataEmpty=!0,t.isDataLoading=!1})),n&&n.target.complete()},t.prototype.scrollTopByHandle=function(){this.topId&&this.element.nativeElement.querySelector("#"+this.topId)},t.prototype.options=function(){return E.b(this,void 0,void 0,(function(){var n,t=this;return E.e(this,(function(e){switch(e.label){case 0:return n=[],this.currentWidget&&n.push({text:this.translateService.instant("APP_COMMON_ENTER")+" "+this.currentWidget.widgetName,handler:function(){t.openWidget(t.currentWidget)}}),n.push({text:this.translateService.instant("APP_COMMON_CLEAR_MESSAGES"),handler:function(){t.clearMessage()}}),n.push({text:this.translateService.instant("MESSAGE_DELETE_CANCEL"),role:"cancel"}),[4,this.actionSheetCtrl.create({buttons:n})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}}))}))},t.prototype.onHold=function(n,t){var e=this;t.target.classList.add("img-scaling");var l=null,i=[];i.push({text:this.translateService.instant("MESSAGE_DELETE"),handler:function(){e.showDeleteMsg(n)}}),w.a.containsStringIgnore(n.formatType,"image")&&i.push({text:this.translateService.instant("APP_COMMON_RELOAD_IAMGE"),handler:function(){e.cacheProvider.reloadImage(n.imageUrl).subscribe(),n.imageUrl=n.imageUrl+"#reload"}}),n.redirectUrl||w.a.containsStringIgnore(n.formatType,"image")?i.push({text:this.translateService.instant("SHARE_MODAL_TITLE"),handler:function(){e.openSharePage(n)}}):i.push({text:this.translateService.instant("APP_COMMON_COPY_MESSAGE"),handler:function(){e.clipboard.copy(n.abstract)}}),i.push({text:this.translateService.instant("MESSAGE_DELETE_CANCEL"),role:"cancel"}),this.cacheProvider.decodeQRCode(n.imageUrl).subscribe((function(r){return E.b(e,void 0,void 0,(function(){var e,s=this;return E.e(this,(function(u){switch(u.label){case 0:return i.splice(i.length-1,1,{text:this.translateService.instant("APP_COMMON_EXTRACT_QRCODE"),handler:function(){s.openQRCodeUrl(r,n)}}),i.push({text:this.translateService.instant("MESSAGE_DELETE_CANCEL"),role:"cancel"}),[4,this.actionSheetCtrl.create({buttons:i})];case 1:return[4,(e=u.sent()).present()];case 2:return u.sent(),l&&l.dismiss(),e.onDidDismiss().then((function(){t.target.classList.remove("img-scaling")})),[2]}}))}))}),(function(n){return E.b(e,void 0,void 0,(function(){return E.e(this,(function(n){switch(n.label){case 0:return[4,this.actionSheetCtrl.create({buttons:i})];case 1:return[4,(l=n.sent()).present()];case 2:return n.sent(),l.onDidDismiss().then((function(){t.target.classList.remove("img-scaling")})),[2]}}))}))}))},t.prototype.openSharePage=function(n){this.commonService.openShareModal({shareMessage:{title:n.title,description:n.abstract,thumb:n.imageUrl||O.f,resource:n.redirectUrl||n.imageUrl},callback:function(n){},isShareImage:!n.redirectUrl,navigationDockTargetMapIds:[1,2]})},t.prototype.openQRCodeUrl=function(n,t){var e={url:n,title:t.title,description:t.abstract,imageUrl:t.imageUrl,appId:t.widgetId.toString(),options:{canShare:!0}};this.widgetProvider.openWebpage(e,this.router,!0)},t.prototype.buildMessageForWechatShare=function(n){return{title:n.title||n.abstract||n.formatType,description:n.abstract,thumb:n.widgetIcon,resource:n.imageUrl}},t.prototype.goMessageDetail=function(n,t){if(n.isRead=!0,this.messageProvider.setMessageIsRead(n.id),n.redirectUrl||t){var e={url:t||n.redirectUrl,title:null==n.title?n.widgetName:n.title,description:n.abstract,imageUrl:n.imageUrl,appId:null==n.widgetId?"":n.widgetId.toString(),options:{}};this.widgetProvider.openWebpage(e,this.router)}},t.prototype.clearMessage=function(){return E.b(this,void 0,void 0,(function(){var n=this;return E.e(this,(function(t){switch(t.label){case 0:return[4,this.alertCtrl.create({header:this.translateService.instant("APP_COMMON_HANDLE_TIPS"),message:this.translateService.instant("MESSAGE_CLEAR_MESSAGE"),buttons:[{text:this.translateService.instant("MESSAGE_DELETE_CANCEL"),handler:function(){}},{text:this.translateService.instant("MESSAGE_DELETE_CONFIRM"),handler:function(){n.messages=[],n.isDataEmpty=!0,n.messageProvider.deleteMessageBySessionId(n.session.messageWidgetId)}}]})];case 1:return t.sent().present(),[2]}}))}))},t.prototype.showDeleteMsg=function(n){return E.b(this,void 0,void 0,(function(){var t=this;return E.e(this,(function(e){switch(e.label){case 0:return[4,this.alertCtrl.create({header:this.translateService.instant("MESSAGE_DELETE_TITLE"),message:this.translateService.instant("MESSAGE_DELETE_MESSAGE"),buttons:[{text:this.translateService.instant("MESSAGE_DELETE_CANCEL"),handler:function(){}},{text:this.translateService.instant("MESSAGE_DELETE_CONFIRM"),handler:function(){var e=t.messages.findIndex((function(t){return t.id===n.id}));t.messages.splice(e,1),t.detectChanges(),t.messageProvider.deleteMessage(n.id)}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}}))}))},t.prototype.setMessageTimer=function(){var n=this;this.timer=setInterval((function(){n.refreshDisplaytime()}),6e4)},t.prototype.detectChanges=function(){this.cdf.destroyed||this.cdf.detectChanges()},t.prototype.refreshDisplaytime=function(){for(var n=0,t=this.messages;n<t.length;n++){var e=t[n];e.displayTime=w.a.formatMessageTime(this.session.language,e.receiveTime)}},t.prototype.lowerCaseFormatType=function(n){return n?n.toLowerCase():""},t.prototype.refreshSingleMessageTime=function(n){n.displayTime=w.a.formatMessageTime(this.session.language,n.receiveTime)},t.prototype.transSingleHtml=function(n){n.abstract&&(n.displayAbstract=this.messageProvider.transformHtml(n.abstract),n.displayAbstract=this.sanitizer.bypassSecurityTrustHtml(n.displayAbstract))},t.prototype.transHtml=function(){for(var n=0,t=this.messages;n<t.length;n++){var e=t[n];e.abstract&&(e.displayAbstract=this.messageProvider.transformHtml(e.abstract),e.displayAbstract=this.sanitizer.bypassSecurityTrustHtml(e.displayAbstract))}},t.prototype.abstractOnClick=function(n,t){n.stopPropagation();var e=(n=n||window.event).target||n.srcElement;this.goMessageDetail(t,"javascript:void(0)"===e.href?e.title||e.innerText:"")},t.prototype.scrollToBottom=function(){var n=this;setTimeout((function(){n.content.scrollToBottom()}),10)},t}(y.h),T=e("fg/S"),D=e("sj5I"),P=e("kkXu"),x=e("OlR4"),L=e("ZYCi"),k=l.rb({encapsulation:0,styles:[['@charset "UTF-8";ion-item[_ngcontent-%COMP%]{--border-width:0;--border-color:transparent}.item-options-ios.item-options-end[_ngcontent-%COMP%]{border-bottom-width:0}ion-card-title[_ngcontent-%COMP%]{padding:0 16px}.card-ios[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]{touch-action:inherit!important;box-shadow:0 0 0!important}.sc-ion-card-ios-h[_ngcontent-%COMP%]{margin-top:10px}.image[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.img-scaling[_ngcontent-%COMP%]{-webkit-transform:scale(.95)!important;transform:scale(.95)!important;box-shadow:0 0 10px 1px #ccc}.label-ios[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{white-space:normal}.image-container[_ngcontent-%COMP%]{width:100%;padding-bottom:56.25%;position:relative}.image-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{position:absolute;top:0;width:100%}.datetime[_ngcontent-%COMP%]{text-align:center;font-size:.8rem;margin-bottom:-5px;margin-top:20px}.titleInImage[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--bg-primary-color);font-size:1.8rem;line-height:16px;margin-top:-33px;z-index:2;padding:8px 5px;opacity:.8;position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.no-message[_ngcontent-%COMP%]{color:#838383;height:60px;padding:15px;text-align:center;font-size:12px}.no-more[_ngcontent-%COMP%]{text-align:center;color:#838383;height:100px;padding:15px;font-size:12px;margin:50% auto}.red-point[_ngcontent-%COMP%]{position:relative}.red-point[_ngcontent-%COMP%]::after{content:"\u25cf";position:absolute;z-index:2;left:0;margin-left:-16px;margin-top:0;color:#1a83d4;opacity:.8;font-size:90%}.message-container[_ngcontent-%COMP%]{padding-bottom:30px}.item-ios[_ngcontent-%COMP%]{background:var(-bg-primary-color)!important}.datetime[_ngcontent-%COMP%]{color:#bbb}']],data:{}});function A(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,2,"nodata",[["translateKey","MESSAGE_EMPTY"]],null,null,null,s.b,s.a)),l.sb(1,114688,null,0,u.a,[a.a,o.a,l.h,c.k],{text:[0,"text"],translateKey:[1,"translateKey"]},null),l.Gb(131072,c.j,[c.k,l.h])],(function(n,t){n(t,1,0,l.xb(1,"",l.Mb(t,1,0,l.Fb(t,2).transform("MESSAGE_EMPTY")),""),"MESSAGE_EMPTY")}),null)}function N(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,0,"span",[["class","red-point"]],null,null,null,null,null))],null,null)}function U(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,3,"ion-card-title",[],null,null,null,b.mb,b.j)),l.sb(1,49152,null,0,p.s,[l.h,l.k,l.z],null,null),(n()(),l.tb(2,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),l.Lb(3,null,["",""]))],null,(function(n,t){n(t,3,0,t.parent.parent.context.$implicit.title)}))}function R(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,U)),l.sb(2,16384,null,0,h.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.tb(3,0,null,null,2,"ion-card-content",[],null,null,null,b.kb,b.h)),l.sb(4,49152,null,0,p.p,[l.h,l.k,l.z],null,null),(n()(),l.tb(5,0,null,0,0,"div",[],[[8,"innerHTML",1]],[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.abstractOnClick(e,n.parent.context.$implicit)&&l),l}),null,null))],(function(n,t){n(t,2,0,null!=t.parent.context.$implicit.title)}),(function(n,t){n(t,5,0,t.parent.context.$implicit.displayAbstract)}))}function z(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,1,"img-lazy-load",[["class","image"]],null,null,null,d.b,d.a)),l.sb(2,638976,null,0,g.a,[f.a,l.h,m.a,a.a,v.a,S.a,C.b],{src:[0,"src"]},null)],(function(n,t){n(t,2,0,t.parent.context.$implicit.imageUrl)}),null)}function G(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,3,"ion-card-title",[],null,null,null,b.mb,b.j)),l.sb(1,49152,null,0,p.s,[l.h,l.k,l.z],null,null),(n()(),l.tb(2,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),l.Lb(3,null,["",""]))],null,(function(n,t){n(t,3,0,t.parent.parent.context.$implicit.title)}))}function W(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,G)),l.sb(2,16384,null,0,h.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.tb(3,0,null,null,1,"img-lazy-load",[["class","image"]],null,null,null,d.b,d.a)),l.sb(4,638976,null,0,g.a,[f.a,l.h,m.a,a.a,v.a,S.a,C.b],{src:[0,"src"]},null)],(function(n,t){n(t,2,0,null!=t.parent.context.$implicit.title),n(t,4,0,t.parent.context.$implicit.imageUrl)}),null)}function $(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),l.Lb(1,null,[" "," "]))],null,(function(n,t){n(t,1,0,t.parent.parent.context.$implicit.title)}))}function j(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,4,"div",[["class","titleInImage"]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,1,"img-lazy-load",[["class","image"]],null,null,null,d.b,d.a)),l.sb(2,638976,null,0,g.a,[f.a,l.h,m.a,a.a,v.a,S.a,C.b],{src:[0,"src"]},null),(n()(),l.ib(16777216,null,null,1,null,$)),l.sb(4,16384,null,0,h.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,2,0,t.parent.context.$implicit.imageUrl),n(t,4,0,null!=t.parent.context.$implicit.title)}),null)}function H(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,3,"ion-card-title",[],null,null,null,b.mb,b.j)),l.sb(1,49152,null,0,p.s,[l.h,l.k,l.z],null,null),(n()(),l.tb(2,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),l.Lb(3,null,["",""]))],null,(function(n,t){n(t,3,0,t.parent.parent.context.$implicit.title)}))}function B(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"img-lazy-load",[["class","image"]],null,null,null,d.b,d.a)),l.sb(1,638976,null,0,g.a,[f.a,l.h,m.a,a.a,v.a,S.a,C.b],{src:[0,"src"]},null)],(function(n,t){n(t,1,0,t.parent.parent.context.$implicit.imageUrl)}),null)}function F(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,7,"div",[],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,H)),l.sb(2,16384,null,0,h.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.ib(16777216,null,null,1,null,B)),l.sb(4,16384,null,0,h.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.tb(5,0,null,null,2,"ion-card-content",[],null,null,null,b.kb,b.h)),l.sb(6,49152,null,0,p.p,[l.h,l.k,l.z],null,null),(n()(),l.tb(7,0,null,0,0,"div",[],[[8,"innerHTML",1]],[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.abstractOnClick(e,n.parent.context.$implicit)&&l),l}),null,null))],(function(n,t){n(t,2,0,null!=t.parent.context.$implicit.title),n(t,4,0,t.parent.context.$implicit.imageUrl)}),(function(n,t){n(t,7,0,t.parent.context.$implicit.displayAbstract)}))}function Y(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,3,"ion-card-title",[],null,null,null,b.mb,b.j)),l.sb(1,49152,null,0,p.s,[l.h,l.k,l.z],null,null),(n()(),l.tb(2,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),l.Lb(3,null,["",""]))],null,(function(n,t){n(t,3,0,t.parent.parent.context.$implicit.title)}))}function q(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"img-lazy-load",[["class","image"]],null,null,null,d.b,d.a)),l.sb(1,638976,null,0,g.a,[f.a,l.h,m.a,a.a,v.a,S.a,C.b],{src:[0,"src"]},null)],(function(n,t){n(t,1,0,t.parent.parent.context.$implicit.imageUrl)}),null)}function X(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,7,"div",[],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,Y)),l.sb(2,16384,null,0,h.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.ib(16777216,null,null,1,null,q)),l.sb(4,16384,null,0,h.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.tb(5,0,null,null,2,"ion-card-content",[],null,null,null,b.kb,b.h)),l.sb(6,49152,null,0,p.p,[l.h,l.k,l.z],null,null),(n()(),l.tb(7,0,null,0,0,"div",[],[[8,"innerHTML",1]],[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.abstractOnClick(e,n.parent.context.$implicit)&&l),l}),null,null))],(function(n,t){n(t,2,0,null!=t.parent.context.$implicit.title),n(t,4,0,t.parent.context.$implicit.imageUrl)}),(function(n,t){n(t,7,0,t.parent.context.$implicit.displayAbstract)}))}function Z(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,23,"div",[],null,null,null,null,null)),l.sb(1,16384,null,0,h.n,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),l.tb(2,0,null,null,4,"div",[["class","datetime "]],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,N)),l.sb(4,16384,null,0,h.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.tb(5,0,null,null,1,"span",[["class","time-value"]],null,null,null,null,null)),(n()(),l.Lb(6,null,["",""])),(n()(),l.tb(7,0,null,null,16,"ion-card",[],[[8,"id",0]],[[null,"press"],[null,"click"]],(function(n,t,e){var l=!0,i=n.component;return"press"===t&&(l=!1!==i.onHold(n.context.$implicit,e)&&l),"click"===t&&(l=!1!==i.goMessageDetail(n.context.$implicit)&&l),l}),b.nb,b.g)),l.sb(8,49152,null,0,p.o,[l.h,l.k,l.z],null,null),l.Ib(512,null,h.v,h.w,[l.s,l.t,l.k,l.D]),l.sb(10,278528,null,0,h.h,[h.v],{ngClass:[0,"ngClass"]},null),l.Hb(11,{"card-ios-canClick":0}),(n()(),l.ib(16777216,null,0,1,null,R)),l.sb(13,278528,null,0,h.o,[l.O,l.L,h.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),l.ib(16777216,null,0,1,null,z)),l.sb(15,278528,null,0,h.o,[l.O,l.L,h.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),l.ib(16777216,null,0,1,null,W)),l.sb(17,278528,null,0,h.o,[l.O,l.L,h.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),l.ib(16777216,null,0,1,null,j)),l.sb(19,278528,null,0,h.o,[l.O,l.L,h.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),l.ib(16777216,null,0,1,null,F)),l.sb(21,278528,null,0,h.o,[l.O,l.L,h.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),l.ib(16777216,null,0,1,null,X)),l.sb(23,16384,null,0,h.p,[l.O,l.L,h.n],null,null)],(function(n,t){n(t,1,0,t.component.lowerCaseFormatType(t.context.$implicit.formatType)),n(t,4,0,!t.context.$implicit.isRead);var e=n(t,11,0,t.context.$implicit.redirectUrl);n(t,10,0,e),n(t,13,0,"text"),n(t,15,0,"image"),n(t,17,0,"headerimage"),n(t,19,0,"titleinimage"),n(t,21,0,"richtextimage")}),(function(n,t){n(t,6,0,t.context.$implicit.displayTime),n(t,7,0,t.context.$implicit.id)}))}function V(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],(function(n,t,e){var l=!0;return"ionInfinite"===t&&(l=!1!==n.component.doInfinite(e)&&l),l}),b.Ab,b.v)),l.sb(1,49152,null,0,p.G,[l.h,l.k,l.z],null,null),(n()(),l.tb(2,0,null,0,1,"ion-infinite-scroll-content",[["aria-posinset","button"],["loadingSpinner","bubbles"]],null,null,null,b.zb,b.w)),l.sb(3,49152,null,0,p.H,[l.h,l.k,l.z],{loadingSpinner:[0,"loadingSpinner"]},null)],(function(n,t){n(t,3,0,"bubbles")}),null)}function K(n){return l.Nb(0,[l.Jb(671088640,1,{content:0}),(n()(),l.tb(1,0,null,null,17,"ion-header",[],null,null,null,b.wb,b.s)),l.sb(2,49152,null,0,p.D,[l.h,l.k,l.z],null,null),(n()(),l.tb(3,0,null,0,15,"ion-toolbar",[],null,null,null,b.hc,b.db)),l.sb(4,49152,null,0,p.Eb,[l.h,l.k,l.z],null,null),(n()(),l.tb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.jb,b.f)),l.sb(6,49152,null,0,p.n,[l.h,l.k,l.z],null,null),(n()(),l.tb(7,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,t,e){var i=!0;return"click"===t&&(i=!1!==l.Fb(n,9).onClick(e)&&i),i}),b.gb,b.c)),l.sb(8,49152,null,0,p.i,[l.h,l.k,l.z],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),l.sb(9,16384,null,0,p.j,[[2,p.kb],p.Lb],{defaultHref:[0,"defaultHref"]},null),(n()(),l.tb(10,0,null,0,2,"ion-title",[["class","title"]],null,null,null,b.fc,b.bb)),l.sb(11,49152,null,0,p.Cb,[l.h,l.k,l.z],null,null),(n()(),l.Lb(12,0,["",""])),(n()(),l.tb(13,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,b.jb,b.f)),l.sb(14,49152,null,0,p.n,[l.h,l.k,l.z],null,null),(n()(),l.tb(15,0,null,0,3,"ion-button",[["icon-only",""]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.options()&&l),l}),b.ib,b.e)),l.sb(16,49152,null,0,p.m,[l.h,l.k,l.z],null,null),(n()(),l.tb(17,0,null,0,1,"ion-icon",[["name","ios-more"]],null,null,null,b.xb,b.t)),l.sb(18,49152,null,0,p.E,[l.h,l.k,l.z],{name:[0,"name"]},null),(n()(),l.tb(19,0,null,null,12,"ion-content",[["class","cards-bg"]],null,null,null,b.rb,b.n)),l.sb(20,49152,[[1,4]],0,p.w,[l.h,l.k,l.z],null,null),(n()(),l.tb(21,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(n,t,e){var l=!0;return"ionRefresh"===t&&(l=!1!==n.component.doRefresh(e)&&l),l}),b.Nb,b.I)),l.sb(22,49152,null,0,p.fb,[l.h,l.k,l.z],null,null),(n()(),l.tb(23,0,null,0,1,"ion-refresher-content",[],null,null,null,b.Mb,b.J)),l.sb(24,49152,null,0,p.gb,[l.h,l.k,l.z],null,null),(n()(),l.ib(16777216,null,0,1,null,A)),l.sb(26,16384,null,0,h.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.tb(27,0,null,0,2,"div",[["class","message-container"]],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,Z)),l.sb(29,278528,null,0,h.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null),(n()(),l.ib(16777216,null,0,1,null,V)),l.sb(31,16384,null,0,h.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component;n(t,8,0,e.defaultUrl,l.xb(1,"",e.backButtonText(),"")),n(t,9,0,e.defaultUrl),n(t,18,0,"ios-more"),n(t,26,0,e.isDataEmpty&&!e.isDataLoading),n(t,29,0,e.messages),n(t,31,0,e.finiteScroll)}),(function(n,t){n(t,12,0,t.component.messageTitle)}))}function Q(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"page-message-list",[],null,null,null,K,k)),l.sb(1,4440064,null,0,_,[p.Lb,p.a,a.a,T.a,p.b,D.a,c.k,o.a,C.b,I.a,v.a,l.k,P.a,f.a,x.a,l.h,L.m],null,null)],(function(n,t){n(t,1,0)}),null)}var J=l.pb("page-message-list",_,Q,{},{},[]),nn=e("gIcY"),tn=e("iTUp"),en=e("j1ZV");e.d(t,"MessageListPageModuleNgFactory",(function(){return ln}));var ln=l.qb(i,[],(function(n){return l.Cb([l.Db(512,l.j,l.bb,[[8,[r.a,J]],[3,l.j],l.x]),l.Db(4608,h.l,h.k,[l.u,[2,h.A]]),l.Db(4608,p.c,p.c,[l.z,l.g]),l.Db(4608,p.Kb,p.Kb,[p.c,l.j,l.q]),l.Db(4608,p.Ob,p.Ob,[p.c,l.j,l.q]),l.Db(4608,nn.r,nn.r,[]),l.Db(4608,nn.d,nn.d,[]),l.Db(4608,c.g,c.f,[]),l.Db(4608,c.c,c.e,[]),l.Db(4608,c.i,c.d,[]),l.Db(4608,c.b,c.a,[]),l.Db(4608,c.k,c.k,[c.l,c.g,c.c,c.i,c.b,c.m,c.n]),l.Db(5120,l.d,(function(n,t,e){return[p.Ub(n,t,e)]}),[p.Tb,h.c,l.z]),l.Db(1073742336,tn.a,tn.a,[]),l.Db(1073742336,h.b,h.b,[]),l.Db(1073742336,p.Gb,p.Gb,[]),l.Db(1073742336,c.h,c.h,[]),l.Db(1073742336,nn.q,nn.q,[]),l.Db(1073742336,nn.h,nn.h,[]),l.Db(1073742336,nn.o,nn.o,[]),l.Db(1073742336,en.a,en.a,[]),l.Db(1073742336,L.n,L.n,[[2,L.t],[2,L.m]]),l.Db(1073742336,i,i,[]),l.Db(256,c.n,void 0,[]),l.Db(256,c.m,void 0,[]),l.Db(256,p.Tb,void 0,[]),l.Db(1024,L.k,(function(){return[[{path:"",component:_}]]}),[])])}))},TDSW:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var l=e("mrSG"),i=e("hAUF"),r=e("ZOGp"),s=e("YsCg"),u=e("93YN"),a=function(){function n(n,t,e,l,i,r){this.modalCtrl=n,this.authProvider=t,this.navCtrl=e,this.router=l,this.translateService=i,this.nativeService=r}return n.prototype.doSelectCountry=function(){var n=this;return new Promise((function(t,e){return l.b(n,void 0,void 0,(function(){var n;return l.e(this,(function(l){switch(l.label){case 0:return[4,this.modalCtrl.create({component:u.a,componentProps:{isNeedAll:!0}})];case 1:return(n=l.sent()).onDidDismiss().then((function(n){t(n.data)})).catch((function(n){e(n)})),[4,n.present()];case 2:return l.sent(),[2]}}))}))}))},n.prototype.SendSecurityCode=function(n){var t=this;return new Promise((function(e,i){return l.b(t,void 0,void 0,(function(){return l.e(this,(function(t){return this.authProvider.SendSecurityCode2(n).subscribe((function(n){e("")}),(function(n){e(n)})),[2]}))}))}))},n.prototype.LoginByWFAccount=function(n){var t=this;return new Promise((function(e,i){return l.b(t,void 0,void 0,(function(){var t=this;return l.e(this,(function(l){return this.authProvider.LoginByWFAccount2(n).subscribe((function(n){t.setTabsToRoot()}),(function(n){e(n)})),[2]}))}))}))},n.prototype.Login=function(n){var t=this;return new Promise((function(e,i){return l.b(t,void 0,void 0,(function(){var t=this;return l.e(this,(function(l){return this.authProvider.Login2(n).subscribe((function(n){t.setTabsToRoot()}),(function(n){e(n)})),[2]}))}))}))},n.prototype.login=function(n,t,e,i){var r=this;return new Promise((function(e,i){return l.b(r,void 0,void 0,(function(){var i=this;return l.e(this,(function(l){switch(n){case s.j.SendSecurityCodeBefore:this.authProvider.SendSecurityCode2(t).subscribe((function(n){e("")}),(function(n){e(n)}));break;case s.j.LoginByWFAccountBefore:this.authProvider.LoginByWFAccount2(t).subscribe((function(n){i.setTabsToRoot()}),(function(n){e(n)}));break;case s.j.LoginByMobileBefore:this.authProvider.Login2(t).subscribe((function(n){i.setTabsToRoot()}),(function(n){e(n)}))}return[2]}))}))}))},n.prototype.setTabsToRoot=function(){this.router.navigate([i.b.HomePage],{replaceUrl:!0})},n.prototype.verificationErrorHandle=function(n,t){return n.errcode===r.a.USER.INCORRECT_VERIFICATION_CODE?this.translateService.instant("VERIFICATION_CODE_INCORRECT")+";"+Date.now():n.errcode===r.a.USER.VERIFICATION_CODE_EXPIRED?this.translateService.instant("VERIFICATION_CODE_EXPIRED")+";"+Date.now():void this.loginError(n)},n.prototype.loginError=function(n){var t="";switch(n.errcode){case r.a.USER.INACTIVE_USER:t="ACCOUNT_LOCKED";break;case r.a.USER.USER_NOT_EXIST:t="LOGIN_ERROR_USER_NOT_EXIST";break;case r.a.USER.MOBILE_NOT_EXIST:t="LOGIN_ERROR_PHONE_NUMBER_NOT_EXIST";break;case r.a.USER.INCORRECT_ACCOUNT_AND_PASSWORD:case r.a.USER.INCORRECT_PASSWORD:t="LOGIN_ERROR_INCORRECT_PASSWORD";break;default:t="LOGIN_ERROR"}this.nativeService.alert(n.errcode+","+this.translateService.instant(t))},n}()},mGGX:function(n,t,e){"use strict";var l=e("mrSG"),i=e("TDSW"),r=(e("wqKC"),e("93YN"),function(){function n(n,t){this.session=n,this.nativeService=t}return n.prototype.ionViewWillEnter=function(){this.session.isDarkMode||this.nativeService.setStyleLightContent()},n.prototype.ionViewWillLeave=function(){this.nativeService.statusBarStyle(this.session.isDarkMode)},n}());e.d(t,"i",(function(){return u})),e.d(t,"a",(function(){return a})),e.d(t,"e",(function(){return o})),e.d(t,"b",(function(){return c})),e.d(t,"f",(function(){return p})),e.d(t,"h",(function(){return h})),e.d(t,"g",(function(){return d})),e.d(t,"c",(function(){return g})),e.d(t,"d",(function(){return f}));var s=function(n){var t={},e=n.getCurrentNavigation().extras;return e&&e.state&&(t=e.state),t},u=function(n,t){var e=n||t.previousUrl;return t&&(e=t.previousUrl),e},a=function(){function n(n){this.events=n}return n.prototype.scrollWidth=function(n,t){return{width:n||window.screen.availWidth-5+"px",height:(t||44)+"px"}},n.prototype.completeRefresh=function(n){n&&n.target.complete()},n.prototype.completedoInfinite=function(n){n&&n.target.complete()},n}(),o=function(){return function(n,t){this.paramUrl=n,this.session=t,this.defaultUrl="",this.defaultUrl=u(n,this.session)}}(),c=function(){return function(n){this.router=n,this.params=s(n)}}(),b=function(n){function t(t,e){var l=n.call(this,e)||this;return l.router=t,l.events=e,l.params=s(t),l}return l.d(t,n),t}(a),p=function(n){function t(t,e,l){var i=n.call(this,e)||this;return i.paramUrl=t,i.events=e,i.session=l,i.defaultUrl="",i.defaultUrl=u(t,l),i}return l.d(t,n),t}(a),h=function(n){function t(t,e,l){var i=n.call(this,e,l)||this;return i.router=t,i.paramUrl=e,i.session=l,i.defaultUrl="",i.params=s(t),i}return l.d(t,n),t}(o),d=function(n){function t(t,e,l,i){var r=n.call(this,t,l)||this;return r.router=t,r.paramUrl=e,r.events=l,r.session=i,r.defaultUrl="",r.defaultUrl=u(e,r.session),r}return l.d(t,n),t}(b),g=function(n){function t(t,e,l,i){var r=n.call(this,t,e,l)||this;return r.router=t,r.session=e,r.nativeService=l,r.paramUrl=i,r.defaultUrl=u(i,e),r}return l.d(t,n),t}(function(n){function t(t,e,l){var i=n.call(this,e,l)||this;return i.router=t,i.session=e,i.nativeService=l,i.params=s(t),i}return l.d(t,n),t}(r)),f=function(n){function t(t,e,l,i,r,a,o,c){var b=n.call(this,t,e,l,i,r,a)||this;return b.router=t,b.modalCtrl=e,b.authProvider=l,b.navCtrl=i,b.translateService=r,b.nativeService=a,b.paramUrl=o,b.session=c,b.params=s(t),b.defaultUrl=u(o,c),b}return l.d(t,n),t}(function(n){function t(t,e,l,i,r,u){var a=n.call(this,e,l,i,t,r,u)||this;return a.router=t,a.modalCtrl=e,a.authProvider=l,a.navCtrl=i,a.translateService=r,a.nativeService=u,a.params=s(t),a}return l.d(t,n),t}(i.a))}}]);