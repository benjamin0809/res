(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{Cf5d:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),i=function(){return function(){}}(),o=e("pMnS"),s=e("h5Qc"),r=e("qIgY"),a=e("n90K"),u=e("6m4Z"),c=e("riPR"),g=e("TY44"),p=e("4DE5"),b=e("ZYjt"),d=e("oBZk"),h=e("ZZ/e"),m=e("Ip0R"),f=e("gIcY"),v=e("mrSG"),C=e("OlR4"),M=e("VvKu"),P=e("bl9C"),_=e("w6Z3"),x=e("sj5I"),S=e("IfSK"),O=e("Zr1d"),k=e("VGsI"),y=e("fg/S"),w=e("ZwiA"),E=function(){function n(n,t,e,l,i,o,s,r,a,u,c,g,p,b,d,h,m,v,C,M,P,_,x){var S=this;this.navParams=n,this.navCtrl=t,this.formBuilder=e,this.session=l,this.messageProvider=i,this.sanitizer=o,this.storageService=s,this.element=r,this.nativeService=a,this.keyboard=u,this.preloadProvider=c,this.eventsService=g,this.alertCtrl=p,this.translateService=b,this.widgetProvider=d,this.clipboard=h,this.preload=m,this.cacheProvider=v,this.actionSheetCtrl=C,this.modal=M,this.cd=P,this.router=_,this.commonService=x,this.limit=15,this.offset=0,this.toUser={_id:"initialId",pic:"assets/imgs/logo.png",username:"reveiceUser"},this.user={_id:"initialId",pic:"assets/imgs/logo.png",username:"currentUser"},this.isShowChooser=!1,this.isSending=!1,this.messages=[],this.isTyping=!1,this.topId="",this.messageForm=e.group({message:new f.e("")}),this.keyboard.onKeyboardWillShow().subscribe((function(n){S.nativeService.isAndroid()&&S.setFooterPosition(S.session.keyboardHeight||243),S.ContentResize()})),this.keyboard.onKeyboardWillHide().subscribe((function(n){S.nativeService.isAndroid()&&S.setFooterPosition(0)})),this.navParams.data.messages&&(this.messages=this.navParams.data.messages.concat(this.messages),this.refreshDisplaytime(),this.transHtml(),this.ContentResize())}return n.prototype.ionViewCanEnter=function(){if(this.session&&this.session.userId&&"50709171857408"===this.session.userId)return"Beta"===this.session.user.nickName||(this.nativeService.showToast(this.translateService.instant("APP_COMMON_DISABLE_FUCTION")),!1)},n.prototype.ngOnInit=function(){var n=this;this.keyboard.setResizeMode(O.b.Body),this.nativeService.hideKeyboardAccessoryBar(!0),this.toUser._id=this.navParams.data.widgetId||"bot_001",this.session.messageWidgetId=this.navParams.data.widgetId||"bot_001",this.toUser.pic=this.navParams.data.widgetIcon||this.toUser.pic,this.toUser.username=this.navParams.data.widgetName||"bot",this.chatBox="",this.messageTitle=this.navParams.data.widgetName,this.user.pic=this.session.user?this.session.user.pictureUrl:this.user.pic,this.user._id=this.session.userId,this.navParams.data.messages||this.createArray(),this.eventsService.on(M.k.AddMessage,(function(t){-1===n.messages.findIndex((function(n){return n.id===t.id}))&&(n.messages.push(t),n.transHtml(),n.scrollToBottom(),n.cd.detectChanges())}))},n.prototype.ionViewWillUnload=function(){this.eventsService.off(M.k.AddMessage)},n.prototype.lowerCaseFormatType=function(n){return n?n.toLowerCase():""},n.prototype.ionViewDidLeave=function(){this.keyboard.setResizeMode(O.b.None),this.nativeService.hideKeyboardAccessoryBar(!1)},n.prototype.cancelTyping=function(){this.isShowChooser=!1,this.ContentResize(),this.cd.detectChanges()},n.prototype.blurInput=function(){var n=this;setTimeout((function(){n.isSending||n.isShowChooser||(n.ContentResize(),n.cd.detectChanges())}),10)},n.prototype.focusInput=function(){this.isShowChooser=!1},n.prototype.ionViewWillEnter=function(){},n.prototype.FormSubmit=function(n){},n.prototype.send=function(n){var t=this;n&&n.replace(/\s+/g,"")&&(this.isSending=!0,this.sendMessage(n,"text"),this.myInput.setFocus(),this.cd.detectChanges(),setTimeout((function(){t.isSending=!1}),30))},n.prototype.sendImageMessage=function(n,t,e,l){(n||this).sendMessage(e,"image",t)},n.prototype.sendMessage=function(n,t,e){if(n&&""!==n){var l={widgetId:0,id:this.session.userId+Date.now(),userId:this.user._id,widgetName:this.toUser.username,imageUrl:e,widgetIcon:this.toUser.pic,abstract:n,receiveTime:Date.now().toString(),formatType:t,isRead:!0,isSend:!0,status:this.messageProvider.STAUTS.SEND_MESSAGE_SENDING,extra:{groudId:0,senderAvator:this.user.pic,senderName:this.session.user.userName,senderId:Number(this.toUser._id),fromType:"Chat"}};this.messageProvider.insertMessage(l),this._sendMessageFromMessageProvider(l),this.messages.push(l),this.transHtml(),this.scrollToBottom()}this.chatBox="",this.refreshDisplaytime()},n.prototype._sendMessageFromMessageProvider=function(n){var t=this;this.messageProvider.sendMessage(n).subscribe((function(e){t._updateMessageStatus(e?t.messageProvider.STAUTS.SEND_MESSAGE_OK:t.messageProvider.STAUTS.SEND_MESSAGE_FAILED,n)}),(function(e){t._updateMessageStatus(t.messageProvider.STAUTS.SEND_MESSAGE_FAILED,n)}))},n.prototype._updateMessageStatus=function(n,t){var e=this;this.messageProvider.updateMessageStatus(n,t).subscribe((function(l){var i=e.messages.findIndex((function(n){return n.id===t.id}));i>-1&&(e.messages[i].status=n)}))},n.prototype.reSendMessage=function(n){return v.b(this,void 0,void 0,(function(){var t=this;return v.e(this,(function(e){switch(e.label){case 0:return[4,this.alertCtrl.create({header:this.translateService.instant("MESSAGE_CHAT_RESEND"),buttons:[{text:this.translateService.instant("MESSAGE_DELETE_CANCEL"),handler:function(){}},{text:this.translateService.instant("MESSAGE_DELETE_CONFIRM"),handler:function(){var e=t.messages.findIndex((function(t){return t.id===n.id}));e>-1&&(n.receiveTime=Date.now().toString(),n.status=t.messageProvider.STAUTS.SEND_MESSAGE_SENDING,t.messages.splice(e,1),t.messages.push(n),t.refreshDisplaytime(),t.messageProvider.updateMessage(n).subscribe((function(e){t._sendMessageFromMessageProvider(n)})))}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}}))}))},n.prototype.AlterSendMessage=function(n,t){this.messageProvider.insertMessage(n),t?this.messageProvider.sendMessage(n).subscribe():this.messageProvider.receiveMessageNew(n),this.messages.push(n),this.transHtml(),this.scrollToBottom()},n.prototype.scrollToBottom=function(n){var t=this;void 0===n&&(n=300),setTimeout((function(){t.content.scrollToBottom(n)}),10)},n.prototype.setInputHeight=function(n){void 0===n&&(n=36),this.myInput._elementRef.nativeElement.style.height=n+"px"},n.prototype.doRefresh=function(n){this.messages&&this.messages.length>0&&(this.topId=this.messages[0].id),this.createArray(n)},n.prototype.refreshDisplaytime=function(){for(var n=0,t=null,e=0,l=this.messages;e<l.length;e++){var i=l[e],o=Number(i.receiveTime);i.displayTime=k.a.formatMessageTime(this.session.language,o),n>0?o-t>18e4?t=o:i.displayTime="":t=o,n++}},n.prototype.scrollTopByHandle=function(){this.topId&&this.element.nativeElement.querySelector("#messageid-"+this.topId)},n.prototype.transHtml=function(){for(var n=0,t=this.messages;n<t.length;n++){var e=t[n];e.abstract&&(e.displayAbstract=this.messageProvider.transformHtml(e.abstract),e.displayAbstract=this.sanitizer.bypassSecurityTrustHtml(e.displayAbstract))}},n.prototype.abstractOnClick=function(n,t){n.stopPropagation();var e=n.target||n.srcElement;this.goMessageDetail(t,"javascript:void(0)"===e.href?e.title||e.innerText:"")},n.prototype.onHold=function(n){var t=this,e=null,l=[];l.push({text:this.translateService.instant("MESSAGE_DELETE"),handler:function(){t.showDeleteMsg(n)}}),n.redirectUrl||n.formatType.indexOf("Image")>-1?l.push({text:this.translateService.instant("SHARE_MODAL_TITLE"),handler:function(){t.openSharePage(n)}}):l.push({text:this.translateService.instant("APP_COMMON_COPY_MESSAGE"),handler:function(){t.clipboard.copy(n.abstract)}}),l.push({text:this.translateService.instant("MESSAGE_DELETE_CANCEL"),role:"cancel"}),this.cacheProvider.decodeQRCode(n.imageUrl).subscribe((function(i){return v.b(t,void 0,void 0,(function(){var t=this;return v.e(this,(function(o){switch(o.label){case 0:return l.splice(l.length-1,1,{text:this.translateService.instant("APP_COMMON_EXTRACT_QRCODE"),handler:function(){t.openQRCodeUrl(i,n)}}),l.push({text:this.translateService.instant("MESSAGE_DELETE_CANCEL"),role:"cancel"}),[4,this.actionSheetCtrl.create({buttons:l})];case 1:return[4,o.sent().present()];case 2:return o.sent(),e&&e.dismiss(),[2]}}))}))}),(function(n){(e=t.actionSheetCtrl.create({buttons:l})).present()}))},n.prototype.showDeleteMsg=function(n){return v.b(this,void 0,void 0,(function(){var t=this;return v.e(this,(function(e){switch(e.label){case 0:return[4,this.alertCtrl.create({header:this.translateService.instant("MESSAGE_DELETE_TITLE"),message:this.translateService.instant("MESSAGE_DELETE_MESSAGE"),buttons:[{text:this.translateService.instant("MESSAGE_DELETE_CANCEL"),handler:function(){}},{text:this.translateService.instant("MESSAGE_DELETE_CONFIRM"),handler:function(){var e=t.messages.findIndex((function(t){return t.id===n.id}));t.messages.splice(e,1),t.messageProvider.deleteMessage(n.id)}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}}))}))},n.prototype.openSharePage=function(n){this.commonService.openShareModal({shareMessage:{title:n.title,description:n.abstract,thumb:n.imageUrl||P.k,resource:n.redirectUrl||n.imageUrl},callback:function(n){},isShareImage:!n.redirectUrl,navigationDockTargetMapIds:[1,2]})},n.prototype.openQRCodeUrl=function(n,t){var e={url:n,title:t.title,description:t.abstract,imageUrl:t.imageUrl,appId:t.widgetId.toString(),options:{}};this.widgetProvider.openWebpage(e,this.router)},n.prototype.goMessageDetail=function(n,t){if(n.isRead=!0,this.messageProvider.setMessageIsRead(n.id),n.redirectUrl||t){var e={url:t||n.redirectUrl,title:null==n.title?n.widgetName:n.title,description:n.abstract,imageUrl:n.imageUrl,appId:null==n.widgetId?"":n.widgetId.toString(),options:{}};this.widgetProvider.openWebpage(e,this.router,!0)}},n.prototype.getPictureByPhotoLibrary=function(n){var t=this;n.stopPropagation(),this.nativeService.isMobile()?this.nativeService.getFullPictureByPhotoLibrary({}).subscribe((function(n){t.nativeService.compressImage(n,{MaxWidthOrHeight:1024}).subscribe((function(n){t.sendImageMessage(t,n.dataURL,"Image")}))}),(function(n){t.nativeService.showToast(n)})):k.a.generateQRCode("https://iproud.fihmb.com/Resources/Widgets/66295698871296.png").then((function(n){t.sendImageMessage(t,n,"Image")}))},n.prototype.getPictureByCamera=function(n){var t=this;n.stopPropagation(),this.nativeService.isMobile()?this.nativeService.getFullPictureByCamera({}).subscribe((function(n){t.nativeService.compressImage(n,{MaxWidthOrHeight:1024}).subscribe((function(n){t.sendImageMessage(t,n.dataURL,"Image")}))}),(function(n){t.nativeService.showToast(n)})):k.a.generateQRCode("https://iproud.fihmb.com/Resources/Widgets/66295698871296.png").then((function(n){t.sendImageMessage(t,n,"Image")}))},n.prototype.showOptions=function(){return v.b(this,void 0,void 0,(function(){return v.e(this,(function(n){switch(n.label){case 0:return this.cd.detectChanges(),this.ContentResize(),[4,this.modal.create({component:"MessageImagePickerPage",componentProps:{callback:this.sendImageMessage,scope:this},cssClass:"pick-modal"})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},n.prototype.ContentResize=function(){var n=this;setTimeout((function(){setTimeout((function(){n.scrollToBottom()}),50)}),50)},n.prototype.setFooterPosition=function(n){this.footer.nativeElement.style.setProperty("padding-bottom",n+"px","important"),this.ContentResize(),this.cd.detectChanges()},n.prototype.getFooterPaddingBottomHeight=function(){return this.footer.nativeElement.style.getPropertyValue("padding-bottom")},n.prototype.clickOnImage=function(n,t){t.stopPropagation();for(var e=[],l=0,i=this.messages;l<i.length;l++){var o=i[l];"image"===o.formatType.toLowerCase()&&e.push({id:o.id,pictureUrl:o.imageUrl})}if(e.length>0){var s=e.findIndex((function(t){return t.id===n.id}));this.preloadProvider.previewImage({pictures:e,index:s})}},n.prototype.openMemberPage=function(n){this.router.navigate(["ContactDetailPage"],{state:{friendId:n}})},n.prototype.createArray=function(n){var t=this;this.messageProvider.queryMessage(this.toUser._id,this.limit,this.messages.length||this.offset).subscribe((function(n){n&&(t.messages=n.concat(t.messages),t.refreshDisplaytime(),t.transHtml(),setTimeout((function(){t.scrollTopByHandle()}),10))})),n&&n.target.complete()},n.prototype.shareContactCard=function(){this.preload.openContactChooserPage({callback:this.AfterShare,type:1})},n.prototype.AfterShare=function(n){return v.b(this,void 0,void 0,(function(){var t=this;return v.e(this,(function(e){switch(e.label){case 0:return[4,this.alertCtrl.create({header:"Share contact card",message:n[0].name,buttons:[{text:this.translateService.instant("MESSAGE_DELETE_CANCEL"),handler:function(){}},{text:this.translateService.instant("MESSAGE_DELETE_CONFIRM"),handler:function(){var e={widgetId:0,id:n[0].id,userId:t.user._id,widgetName:t.toUser.username,imageUrl:n[0].avator,widgetIcon:t.toUser.pic,abstract:n[0].name,receiveTime:Date.now().toString(),formatType:"card",isRead:!0,isSend:!0,status:"success"};t.AlterSendMessage(e,!0)}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}}))}))},n}(),I=e("A7o+"),T=e("ZYCi"),D=l.rb({encapsulation:0,styles:[['@charset "UTF-8";.bar-footer[_ngcontent-%COMP%]{overflow:visible!important}.bar-footer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none;height:25px}button.ion-android-send[_ngcontent-%COMP%]{padding-top:2px}.footer-btn[_ngcontent-%COMP%]{font-size:x-large}img.profile-pic[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;position:absolute;top:20px}img.profile-pic.left[_ngcontent-%COMP%]{left:10px}img.profile-pic.right[_ngcontent-%COMP%]{right:10px}.ion-email[_ngcontent-%COMP%]{float:right;font-size:32px;vertical-align:middle}.message[_ngcontent-%COMP%]{font-size:14px;word-break:break-all}.message-detail[_ngcontent-%COMP%]{white-space:nowrap;font-size:14px}.bar.item-input-inset[_ngcontent-%COMP%]   .item-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%!important}.message-wrapper[_ngcontent-%COMP%]{touch-action:inherit!important;position:relative}.message-wrapper[_ngcontent-%COMP%]:last-child{margin-bottom:10px}.chat-bubble[_ngcontent-%COMP%]{border-radius:5px;display:-webkit-inline-box;display:inline-flex;padding:10px 12px;position:relative;margin:10px}.chat-bubble[_ngcontent-%COMP%]:before{content:"\xa0";display:block;height:16px;width:9px;position:absolute;top:2.5px}.chat-bubble.left[_ngcontent-%COMP%]{float:left;margin-left:58px;margin-right:55px}.chat-bubble.left[_ngcontent-%COMP%]:before{left:-2px;-webkit-transform:rotate(50deg) skew(5deg);transform:rotate(50deg) skew(5deg)}.chat-bubble-container[_ngcontent-%COMP%]{float:right;margin-right:55px;margin-left:55px}.chat-bubble-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin:15px 0;padding-right:5px}.chat-bubble.right[_ngcontent-%COMP%]{background-color:#158ffe;color:#fff;float:right}.chat-bubble-image-right[_ngcontent-%COMP%]{float:right;border-radius:2px;padding:10px 0}.chat-bubble-image-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:200px;border-radius:5px}.chat-bubble-image-left[_ngcontent-%COMP%]{float:left;margin-right:55px;margin-left:55px;border-radius:2px;padding:10px 0}.chat-bubble-image-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:200px;border-radius:5px}.chat-bubble.right[_ngcontent-%COMP%]:before{background-color:#158ffe;right:-1px;top:2.5px;-webkit-transform:rotate(135deg) skew(-5deg);transform:rotate(135deg) skew(-5deg)}.chat-bubble.right[_ngcontent-%COMP%]   a.autolinker[_ngcontent-%COMP%]{color:#fff;font-weight:700}.user-messages-top-icon[_ngcontent-%COMP%]{font-size:28px;display:inline-block;vertical-align:middle;position:relative;top:-3px;right:5px}.msg-header-username[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;position:relative;top:-3px}.bold[_ngcontent-%COMP%]{font-weight:700}.cf[_ngcontent-%COMP%]{clear:both!important}a.autolinker[_ngcontent-%COMP%]{color:#3b88c3;text-decoration:none}.loader-center[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;flex-direction:row;flex-wrap:nowrap;-webkit-box-pack:center;justify-content:center;align-content:stretch;-webkit-box-align:center;align-items:center}.loader[_ngcontent-%COMP%]   .ion-loading-c[_ngcontent-%COMP%]{font-size:64px}ion-card[_ngcontent-%COMP%]{background-color:#fff}.card-ios[_ngcontent-%COMP%]{box-shadow:0 0 1px rgba(0,0,0,.3)}.card-ios-canClick[_ngcontent-%COMP%]{background:var(--bg-primary-color)!important;box-shadow:0 0 5px --text-primary-color}.label-ios[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{white-space:normal}.datetime[_ngcontent-%COMP%]{text-align:center;font-size:12px;margin-bottom:-5px;margin-top:10px}.no-datetime[_ngcontent-%COMP%]{text-align:center;color:#999;font-size:12px;margin-bottom:-5px;margin-top:0}.titleInImage[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.8rem;line-height:16px;margin-top:-33px;z-index:2;padding:8px 5px;background-color:#fff;opacity:.8;position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.no-message[_ngcontent-%COMP%]{color:#838383;height:60px;padding:15px;text-align:center;font-size:12px}.no-more[_ngcontent-%COMP%]{text-align:center;color:#838383;height:60px;padding:15px;font-size:12px}.red-point[_ngcontent-%COMP%]{position:relative}.red-point[_ngcontent-%COMP%]::after{content:"\u25cf";position:absolute;z-index:2;left:0;margin-left:-16px;margin-top:0;color:#ae0000;font-size:90%}input[_ngcontent-%COMP%]{width:100%;border:0}.col[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:36px;height:36px}.col[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:0 0}.send-more-container[_ngcontent-%COMP%]{background-color:var(--bg-primary-color);height:243px;position:absolute;bottom:0;width:100%;z-index:99}.footer-container[_ngcontent-%COMP%]{-webkit-transition:.5s;transition:all .5s;-webkit-animation:.5s input;animation:.5s input;padding:0;border-bottom:none!important;border-top:var(--border-primary)}.footer-container[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{padding:5px}.footer-container[_ngcontent-%COMP%]   .item-ios[_ngcontent-%COMP%]{padding-left:5px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.footer-container[_ngcontent-%COMP%]   .item-ios[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border:0!important}.footer-container[_ngcontent-%COMP%]   .text-input[_ngcontent-%COMP%]{padding:5px;border-radius:5px;font-size:1.5rem}.input-focus[_ngcontent-%COMP%], .input-focus[_ngcontent-%COMP%]   .toolbar-background[_ngcontent-%COMP%]{position:relative}.dark-theme[_ngcontent-%COMP%]   .item-input-wrapper[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{background-color:#555!important}.dark-theme[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]{background-color:transparent!important}.dark-theme[_ngcontent-%COMP%]   .card-content-ios[_ngcontent-%COMP%]{background:#555}.dark-theme[_ngcontent-%COMP%]   .text-input[_ngcontent-%COMP%]{background-color:#555}.dark-theme[_ngcontent-%COMP%]   .datetime[_ngcontent-%COMP%]{color:#777}.dark-theme[_ngcontent-%COMP%]   .content-ios[_ngcontent-%COMP%]{color:#ccc}.dark-theme[_ngcontent-%COMP%]   .chat-bubble.left[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .chat-bubble.left[_ngcontent-%COMP%]:before{background-color:#424242}.chat-bubble.left[_ngcontent-%COMP%], .chat-bubble.left[_ngcontent-%COMP%]:before{background-color:#e6e5eb}.scroll-content[_ngcontent-%COMP%]{background-color:#f6f6f6!important}.item-input[_ngcontent-%COMP%], .item-input-wrapper[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{background-color:#f4f4f4!important}.card-ios[_ngcontent-%COMP%], .item-ios[_ngcontent-%COMP%]{background:#fff!important}.datetime[_ngcontent-%COMP%]{color:#bbb}.card[_ngcontent-%COMP%]{margin:0}@-webkit-keyframes input{from{-webkit-transform:translateY(20%);transform:translateY(20%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes input{from{-webkit-transform:translateY(20%);transform:translateY(20%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}']],data:{}});function A(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,2,"div",[["class","datetime "]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l.Lb(2,null,["",""]))],null,(function(n,t){n(t,2,0,t.parent.context.$implicit.displayTime)}))}function U(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,2,"div",[["class","chat-bubble left slide-left"]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,1,"div",[["class","toUser"]],null,null,null,null,null)),(n()(),l.tb(2,0,null,null,0,"div",[["class","message"]],[[8,"innerHTML",1]],[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.abstractOnClick(e,n.parent.parent.context.$implicit)&&l),l}),null,null))],null,(function(n,t){n(t,2,0,t.parent.parent.context.$implicit.displayAbstract)}))}function z(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,3,"div",[["class","chat-bubble-image-left  left slide-left"]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,2,"div",[["class","toUser"]],null,null,null,null,null)),(n()(),l.tb(2,0,null,null,1,"img-lazy-load",[],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.clickOnImage(n.parent.parent.context.$implicit)&&l),l}),s.b,s.a)),l.sb(3,638976,null,0,r.a,[a.a,l.h,u.a,c.a,g.a,p.a,b.b],{src:[0,"src"]},null)],(function(n,t){n(t,3,0,t.parent.parent.context.$implicit.imageUrl)}),null)}function L(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,12,"div",[["class","chat-bubble-image-left  left slide-left"]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,11,"div",[["class","toUser"]],null,null,null,null,null)),(n()(),l.tb(2,0,null,null,6,"ion-item",[],null,null,null,d.Fb,d.y)),l.sb(3,49152,null,0,h.J,[l.h,l.k,l.z],null,null),(n()(),l.tb(4,0,null,0,2,"ion-avatar",[["item-start",""]],null,null,null,d.fb,d.b)),l.sb(5,49152,null,0,h.h,[l.h,l.k,l.z],null,null),(n()(),l.tb(6,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),l.tb(7,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),l.Lb(8,null,["",""])),(n()(),l.tb(9,0,null,null,3,"ion-item",[["no-lines",""]],null,null,null,d.Fb,d.y)),l.sb(10,49152,null,0,h.J,[l.h,l.k,l.z],null,null),(n()(),l.tb(11,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),l.Lb(-1,null,["Contact Card"]))],null,(function(n,t){n(t,6,0,t.parent.parent.context.$implicit.imageUrl),n(t,8,0,t.parent.parent.context.$implicit.abstract)}))}function N(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,10,"div",[],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,3,"img",[["class","profile-pic left"]],[[8,"src",4]],[[null,"click"]],(function(n,t,e){var l=!0,i=n.component;return"click"===t&&(l=!1!==i.openMemberPage(i.toUser._id)&&l),l}),null,null)),l.Ib(512,null,m.x,m.y,[l.k,l.t,l.D]),l.sb(3,278528,null,0,m.m,[m.x],{ngStyle:[0,"ngStyle"]},null),l.Hb(4,{top:0}),(n()(),l.ib(16777216,null,null,1,null,U)),l.sb(6,278528,null,0,m.o,[l.O,l.L,m.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),l.ib(16777216,null,null,1,null,z)),l.sb(8,278528,null,0,m.o,[l.O,l.L,m.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),l.ib(16777216,null,null,1,null,L)),l.sb(10,278528,null,0,m.o,[l.O,l.L,m.n],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(n,t){var e=n(t,4,0,null!=t.parent.context.$implicit&&t.parent.context.$implicit.displayTime?"20px":"10px");n(t,3,0,e),n(t,6,0,"text"),n(t,8,0,"image"),n(t,10,0,"card")}),(function(n,t){n(t,1,0,t.component.toUser.pic)}))}function F(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"ion-spinner",[["class","icon"],["name","lines-small"]],null,null,null,d.Yb,d.U)),l.sb(1,49152,null,0,h.ub,[l.h,l.k,l.z],{name:[0,"name"]},null)],(function(n,t){n(t,1,0,"lines-small")}),null)}function R(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"ion-icon",[["class","icon"],["color","danger"],["name","alert"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.reSendMessage(n.parent.parent.context.$implicit)&&l),l}),d.xb,d.t)),l.sb(1,49152,null,0,h.E,[l.h,l.k,l.z],{color:[0,"color"],name:[1,"name"]},null)],(function(n,t){n(t,1,0,"danger","alert")}),null)}function G(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"div",[["class","chat-bubble right slide-right"]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,0,"div",[["class","message"]],[[8,"innerHTML",1]],[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.abstractOnClick(e,n.parent.parent.context.$implicit)&&l),l}),null,null))],null,(function(n,t){n(t,1,0,t.parent.parent.context.$implicit.displayAbstract)}))}function $(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"div",[["class"," chat-bubble-image-right right slide-right"]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,0,"img",[],[[8,"src",4]],[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.clickOnImage(n.parent.parent.context.$implicit,e)&&l),l}),null,null))],null,(function(n,t){n(t,1,0,t.parent.parent.context.$implicit.imageUrl)}))}function B(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,13,"div",[["class"," chat-bubble-image-right right slide-right"]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,8,"ion-list",[["class","card"]],null,null,null,d.Ib,d.D)),l.sb(2,49152,null,0,h.Q,[l.h,l.k,l.z],null,null),(n()(),l.tb(3,0,null,0,6,"ion-item",[["no-lines",""]],null,null,null,d.Fb,d.y)),l.sb(4,49152,null,0,h.J,[l.h,l.k,l.z],null,null),(n()(),l.tb(5,0,null,0,2,"ion-avatar",[["item-start",""]],null,null,null,d.fb,d.b)),l.sb(6,49152,null,0,h.h,[l.h,l.k,l.z],null,null),(n()(),l.tb(7,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),l.tb(8,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),l.Lb(9,null,["",""])),(n()(),l.tb(10,0,null,null,3,"ion-item",[["no-lines",""]],null,null,null,d.Fb,d.y)),l.sb(11,49152,null,0,h.J,[l.h,l.k,l.z],null,null),(n()(),l.tb(12,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),l.Lb(-1,null,["Contact Card"]))],null,(function(n,t){n(t,7,0,t.parent.parent.context.$implicit.imageUrl),n(t,9,0,t.parent.parent.context.$implicit.abstract)}))}function H(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,12,"div",[],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,0,"img",[["class","profile-pic right"]],[[8,"src",4]],[[null,"click"]],(function(n,t,e){var l=!0,i=n.component;return"click"===t&&(l=!1!==i.openMemberPage(i.user._id)&&l),l}),null,null)),(n()(),l.tb(2,0,null,null,8,"div",[["class","chat-bubble-container"]],null,[[null,"press"]],(function(n,t,e){var l=!0;return"press"===t&&(l=!1!==n.component.onHold(n.parent.context.$implicit)&&l),l}),null,null)),(n()(),l.ib(16777216,null,null,1,null,F)),l.sb(4,16384,null,0,m.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.ib(16777216,null,null,1,null,R)),l.sb(6,16384,null,0,m.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.ib(16777216,null,null,1,null,G)),l.sb(8,278528,null,0,m.o,[l.O,l.L,m.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),l.ib(16777216,null,null,1,null,$)),l.sb(10,278528,null,0,m.o,[l.O,l.L,m.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),l.ib(16777216,null,null,1,null,B)),l.sb(12,278528,null,0,m.o,[l.O,l.L,m.n],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(n,t){n(t,4,0,"sending"==t.parent.context.$implicit.status),n(t,6,0,"failed"==t.parent.context.$implicit.status),n(t,8,0,"text"),n(t,10,0,"image"),n(t,12,0,"card")}),(function(n,t){n(t,1,0,t.component.user.pic)}))}function Y(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,9,"div",[["class","message-wrapper"]],[[8,"id",0]],null,null,null,null)),l.sb(1,16384,null,0,m.n,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),l.ib(16777216,null,null,1,null,A)),l.sb(3,16384,null,0,m.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.tb(4,0,null,null,2,"div",[],null,[[null,"press"]],(function(n,t,e){var l=!0;return"press"===t&&(l=!1!==n.component.onHold(n.context.$implicit)&&l),l}),null,null)),(n()(),l.ib(16777216,null,null,1,null,N)),l.sb(6,16384,null,0,m.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.ib(16777216,null,null,1,null,H)),l.sb(8,16384,null,0,m.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.tb(9,0,null,null,0,"div",[["class","cf"]],null,null,null,null,null))],(function(n,t){n(t,1,0,t.component.lowerCaseFormatType(t.context.$implicit.formatType)),n(t,3,0,null==t.context.$implicit?null:t.context.$implicit.displayTime),n(t,6,0,!t.context.$implicit.isSend),n(t,8,0,t.context.$implicit.isSend)}),(function(n,t){n(t,0,0,"messageid-"+t.context.$implicit.id)}))}function j(n){return l.Nb(0,[l.Jb(671088640,1,{content:0}),l.Jb(671088640,2,{myInput:0}),l.Jb(671088640,3,{footer:0}),(n()(),l.tb(3,0,null,null,6,"ion-header",[],null,null,null,d.wb,d.s)),l.sb(4,49152,null,0,h.D,[l.h,l.k,l.z],null,null),(n()(),l.tb(5,0,null,0,4,"ion-toolbar",[],null,null,null,d.hc,d.db)),l.sb(6,49152,null,0,h.Eb,[l.h,l.k,l.z],null,null),(n()(),l.tb(7,0,null,0,2,"ion-title",[],null,null,null,d.fc,d.bb)),l.sb(8,49152,null,0,h.Cb,[l.h,l.k,l.z],null,null),(n()(),l.Lb(9,0,["",""])),(n()(),l.tb(10,0,null,null,7,"ion-content",[],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.cancelTyping()&&l),l}),d.rb,d.n)),l.sb(11,49152,[[1,4]],0,h.w,[l.h,l.k,l.z],null,null),(n()(),l.tb(12,0,null,0,3,"ion-refresher",[],null,[[null,"ionRefresh"]],(function(n,t,e){var l=!0;return"ionRefresh"===t&&(l=!1!==n.component.doRefresh(e)&&l),l}),d.Nb,d.I)),l.sb(13,49152,null,0,h.fb,[l.h,l.k,l.z],null,null),(n()(),l.tb(14,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"]],null,null,null,d.Mb,d.J)),l.sb(15,49152,null,0,h.gb,[l.h,l.k,l.z],{pullingIcon:[0,"pullingIcon"]},null),(n()(),l.ib(16777216,null,0,1,null,Y)),l.sb(17,278528,null,0,m.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null),(n()(),l.tb(18,0,null,null,18,"ion-footer",[["class","footer-container"]],null,null,null,d.ub,d.q)),l.sb(19,49152,[[3,4],["footer",4]],0,h.B,[l.h,l.k,l.z],null,null),(n()(),l.tb(20,0,null,0,16,"ion-toolbar",[],null,null,null,d.hc,d.db)),l.sb(21,49152,null,0,h.Eb,[l.h,l.k,l.z],null,null),(n()(),l.tb(22,0,null,0,14,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,t,e){var i=!0,o=n.component;return"submit"===t&&(i=!1!==l.Fb(n,24).onSubmit(e)&&i),"reset"===t&&(i=!1!==l.Fb(n,24).onReset()&&i),"submit"===t&&(i=!1!==o.FormSubmit(o.chatBox)&&i),i}),null,null)),l.sb(23,16384,null,0,f.t,[],null,null),l.sb(24,4210688,null,0,f.m,[[8,null],[8,null]],null,null),l.Ib(2048,null,f.b,null,[f.m]),l.sb(26,16384,null,0,f.l,[[4,f.b]],null,null),(n()(),l.tb(27,0,null,null,9,"ion-item",[["no-lines",""]],null,null,null,d.Fb,d.y)),l.sb(28,49152,null,0,h.J,[l.h,l.k,l.z],null,null),(n()(),l.tb(29,0,null,0,3,"ion-button",[["fill","clear"],["item-start",""]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.showOptions()&&l),l}),d.ib,d.e)),l.sb(30,49152,null,0,h.m,[l.h,l.k,l.z],{fill:[0,"fill"]},null),(n()(),l.tb(31,0,null,0,1,"ion-icon",[["class","footer-btn"],["name","ios-add-circle-outline"]],null,null,null,d.xb,d.t)),l.sb(32,49152,null,0,h.E,[l.h,l.k,l.z],{name:[0,"name"]},null),(n()(),l.tb(33,0,null,0,3,"ion-button",[["fill","clear"],["item-end",""]],null,[[null,"click"]],(function(n,t,e){var l=!0,i=n.component;return"click"===t&&(l=!1!==i.send(i.chatBox)&&l),l}),d.ib,d.e)),l.sb(34,49152,null,0,h.m,[l.h,l.k,l.z],{fill:[0,"fill"]},null),(n()(),l.tb(35,0,null,0,1,"ion-icon",[["class","footer-btn"],["name","send"]],null,null,null,d.xb,d.t)),l.sb(36,49152,null,0,h.E,[l.h,l.k,l.z],{name:[0,"name"]},null)],(function(n,t){var e=t.component;n(t,15,0,"arrow-dropdown"),n(t,17,0,e.messages),n(t,30,0,"clear"),n(t,32,0,"ios-add-circle-outline"),n(t,34,0,"clear"),n(t,36,0,"send")}),(function(n,t){n(t,9,0,t.component.messageTitle),n(t,22,0,l.Fb(t,26).ngClassUntouched,l.Fb(t,26).ngClassTouched,l.Fb(t,26).ngClassPristine,l.Fb(t,26).ngClassDirty,l.Fb(t,26).ngClassValid,l.Fb(t,26).ngClassInvalid,l.Fb(t,26).ngClassPending)}))}function J(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"page-message-chat",[],null,null,null,j,D)),l.sb(1,114688,null,0,E,[h.Mb,h.Lb,f.d,w.a,y.a,b.b,a.a,l.k,u.a,O.a,S.a,c.a,h.b,I.k,x.a,_.a,S.a,g.a,h.a,h.Kb,l.h,T.m,C.a],null,null)],(function(n,t){n(t,1,0)}),null)}var K=l.pb("page-message-chat",E,J,{},{},[]),W=e("j1ZV"),Z=e("FUS3");e.d(t,"MessageChatPageModuleNgFactory",(function(){return q}));var q=l.qb(i,[],(function(n){return l.Cb([l.Db(512,l.j,l.bb,[[8,[o.a,K]],[3,l.j],l.x]),l.Db(4608,m.l,m.k,[l.u,[2,m.A]]),l.Db(4608,h.c,h.c,[l.z,l.g]),l.Db(4608,h.Kb,h.Kb,[h.c,l.j,l.q]),l.Db(4608,h.Ob,h.Ob,[h.c,l.j,l.q]),l.Db(4608,f.r,f.r,[]),l.Db(4608,f.d,f.d,[]),l.Db(4608,I.g,I.f,[]),l.Db(4608,I.c,I.e,[]),l.Db(4608,I.i,I.d,[]),l.Db(4608,I.b,I.a,[]),l.Db(4608,I.k,I.k,[I.l,I.g,I.c,I.i,I.b,I.m,I.n]),l.Db(5120,l.d,(function(n,t,e){return[h.Ub(n,t,e)]}),[h.Tb,m.c,l.z]),l.Db(1073742336,m.b,m.b,[]),l.Db(1073742336,h.Gb,h.Gb,[]),l.Db(1073742336,T.n,T.n,[[2,T.t],[2,T.m]]),l.Db(1073742336,I.h,I.h,[]),l.Db(1073742336,f.q,f.q,[]),l.Db(1073742336,f.h,f.h,[]),l.Db(1073742336,f.o,f.o,[]),l.Db(1073742336,W.a,W.a,[]),l.Db(1073742336,Z.a,Z.a,[]),l.Db(1073742336,i,i,[]),l.Db(256,I.n,void 0,[]),l.Db(256,I.m,void 0,[]),l.Db(256,h.Tb,void 0,[]),l.Db(1024,T.k,(function(){return[[{path:"",component:E}]]}),[])])}))}}]);