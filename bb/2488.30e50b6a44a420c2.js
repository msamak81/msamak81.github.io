"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2488],{5136:(p,r,n)=>{n.d(r,{S:()=>d});var o=n(8256),v=n(4556);const w=[[["","content",""]]],h=["[content]"];let d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-content"]],ngContentSelectors:h,decls:4,vars:0,consts:[[1,"main-content"],[1,"shape-bg"],[1,"ion-padding","content-holder"]],template:function(c,m){1&c&&(o.F$t(w),o.TgZ(0,"ion-content",0),o._UZ(1,"div",1),o.TgZ(2,"ion-content",2),o.Hsn(3),o.qZA()())},dependencies:[v.W2],styles:['.main-content[_ngcontent-%COMP%]{position:relative}.main-content[_ngcontent-%COMP%]   .shape-bg[_ngcontent-%COMP%]{isolation:isolate;width:100%;height:30%;max-height:209px;position:absolute;inset:0;background:linear-gradient(180deg,var(--primary-color) 25%,rgba(255,255,255,.2231486345) 75%);z-index:1}.main-content[_ngcontent-%COMP%]   .shape-bg[_ngcontent-%COMP%]:before{content:"";width:100%;height:100%;max-height:209px;display:block;background:url(/assets/images/bg-shape.svg) no-repeat;z-index:1;position:absolute;inset:auto 0 -40px;background-size:101%}.main-content[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{z-index:3;position:relative;--background: transparent}']}),t})()},3915:(p,r,n)=>{n.d(r,{G:()=>d});var o=n(8256),v=n(4556);const w=[[["","start",""]],[["","end",""]]],h=["[start]","[end]"];let d=(()=>{class t{constructor(){this.title=""}ngOnInit(){}}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-header"]],inputs:{title:"title"},ngContentSelectors:h,decls:6,vars:2,consts:[[1,"main-app-header",3,"translucent"],[1,"ion-text-center"]],template:function(c,m){1&c&&(o.F$t(w),o.TgZ(0,"ion-header",0)(1,"ion-toolbar"),o.Hsn(2),o.TgZ(3,"ion-title",1),o._uU(4),o.qZA(),o.Hsn(5,1),o.qZA()()),2&c&&(o.Q6J("translucent",!1),o.xp6(4),o.Oqu(m.title))},dependencies:[v.Gu,v.wd,v.sr],styles:["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: var(--ion-color-primary);--color: #fff}"]}),t})()},8985:(p,r,n)=>{n.d(r,{q:()=>S});var o=n(8256),x=n(2598),u=n(6895),e=n(4556),z=n(6551);function k(a,l){if(1&a&&(o.TgZ(0,"ion-avatar",12),o._UZ(1,"img",13),o.qZA()),2&a){const s=o.oxw();o.xp6(1),o.s9C("src",s.details.img,o.LSH)}}function f(a,l){if(1&a&&(o.TgZ(0,"ion-text",14),o._uU(1),o._UZ(2,"br"),o.qZA()),2&a){const s=o.oxw();o.xp6(1),o.AsE("",s.details.location.city," , ",s.details.location.country,"")}}function B(a,l){if(1&a&&(o.TgZ(0,"ion-note",15),o._uU(1),o.qZA()),2&a){const s=o.oxw();o.xp6(1),o.hij("",s.details.distance," KM")}}function L(a,l){if(1&a&&(o.TgZ(0,"ion-note",16),o._uU(1),o.qZA()),2&a){const s=o.oxw();o.xp6(1),o.Oqu(s.details.date)}}function H(a,l){if(1&a&&(o.TgZ(0,"ion-note",16),o._uU(1),o.qZA()),2&a){const s=o.oxw();o.xp6(1),o.Oqu(s.subHeader)}}function V(a,l){if(1&a&&o._UZ(0,"app-blood-type",17),2&a){const s=o.oxw();o.Q6J("bloodType",s.details.bloodType)}}function C(a,l){1&a&&(o.TgZ(0,"ion-text",23)(1,"label",24)(2,"b"),o._uU(3,"Open Now"),o.qZA()()())}function A(a,l){if(1&a&&(o.TgZ(0,"span"),o._uU(1),o.qZA()),2&a){const s=l.$implicit;o.xp6(1),o.Oqu(s)}}function y(a,l){if(1&a&&(o.TgZ(0,"div",18)(1,"div",19)(2,"ion-text",14)(3,"label"),o._uU(4,"Availability"),o.qZA()(),o.YNc(5,C,4,0,"ion-text",20),o.qZA(),o.TgZ(6,"div",21),o.YNc(7,A,2,1,"span",22),o.qZA()()),2&a){const s=o.oxw();o.xp6(5),o.Q6J("ngIf","bank"==s.cardType),o.xp6(2),o.Q6J("ngForOf",s.details.time)}}let S=(()=>{class a{constructor(s,i){this.router=s,this.route=i,this.showDonateBtn=!1,this.isClickable=!0,this.details={},this.subHeader="",this.cardType="donor",this.detailsURL="",this.detailsType="page",this.clickEvent=new o.vpe,this.card="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M32 376a56 56 0 0056 56h336a56 56 0 0056-56V222H32zm66-76a30 30 0 0130-30h48a30 30 0 0130 30v20a30 30 0 01-30 30h-48a30 30 0 01-30-30zM424 80H88a56 56 0 00-56 56v26h448v-26a56 56 0 00-56-56z'/></svg>"}ngOnInit(){}openModal(){this.clickEvent.emit()}openDonorDetails(){"modal"===this.detailsType?this.openModal():this.router.navigate([this.detailsURL],{state:this.details})}}return a.\u0275fac=function(s){return new(s||a)(o.Y36(x.F0),o.Y36(x.gz))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-list-card"]],inputs:{showDonateBtn:"showDonateBtn",isClickable:"isClickable",details:"details",subHeader:"subHeader",cardType:"cardType",detailsURL:"detailsURL",detailsType:"detailsType"},outputs:{clickEvent:"clickEvent"},decls:17,vars:12,consts:[[3,"button","click"],["lines","none"],["slot","start",4,"ngIf"],["color","dark"],["color","medium",4,"ngIf"],["color","primary","class","ion-text-wrap",4,"ngIf"],["color","medium","class","ion-text-wrap",4,"ngIf"],["slot","end"],[1,"d-flex","ion-align-items-center","ion-justify-content-end","ion-gap-2"],[3,"bloodType",4,"ngIf"],["color","medium","name","chevron-forward","size","small"],["class","time-slots-holder ion-padding",4,"ngIf"],["slot","start"],["alt","",3,"src"],["color","medium"],["color","primary",1,"ion-text-wrap"],["color","medium",1,"ion-text-wrap"],[3,"bloodType"],[1,"time-slots-holder","ion-padding"],[1,"d-flex","ion-justify-content-between"],["color","success",4,"ngIf"],[1,"time-slots","d-flex","ion-justify-content-between","ion-gap-2"],[4,"ngFor","ngForOf"],["color","success"],[1,"fs-14"]],template:function(s,i){1&s&&(o.TgZ(0,"ion-card",0),o.NdJ("click",function(){return i.openDonorDetails()}),o.TgZ(1,"ion-item",1),o.YNc(2,k,2,1,"ion-avatar",2),o.TgZ(3,"ion-label")(4,"ion-text",3),o._uU(5),o._UZ(6,"br"),o.qZA(),o.YNc(7,f,3,2,"ion-text",4),o.YNc(8,B,2,1,"ion-note",5),o.YNc(9,L,2,1,"ion-note",6),o.YNc(10,H,2,1,"ion-note",6),o.qZA(),o.TgZ(11,"ion-note",7)(12,"div",8)(13,"div"),o.YNc(14,V,1,1,"app-blood-type",9),o.qZA(),o._UZ(15,"ion-icon",10),o.qZA()()(),o.YNc(16,y,8,2,"div",11),o.qZA()),2&s&&(o.Gre("list-card ion-margin-bottom ",i.cardType,""),o.Q6J("button",!0),o.xp6(2),o.Q6J("ngIf","bank"!=i.cardType),o.xp6(3),o.Oqu(i.details.name),o.xp6(2),o.Q6J("ngIf","donor"==i.cardType||"bank"==i.cardType),o.xp6(1),o.Q6J("ngIf","report"!=i.cardType&&"list"!=i.cardType),o.xp6(1),o.Q6J("ngIf","report"==i.cardType),o.xp6(1),o.Q6J("ngIf","list"==i.cardType),o.xp6(4),o.Q6J("ngIf","donor"==i.cardType||"bank"==i.cardType),o.xp6(2),o.Q6J("ngIf","bank"==i.cardType))},dependencies:[u.sg,u.O5,e.BJ,e.PM,e.gu,e.Ie,e.Q$,e.uN,e.yW,z.m],styles:[".list-card[_ngcontent-%COMP%]{background:#fff;border-radius:5px;box-shadow:0 0 50px -3px #1e1e1e14;position:relative}.list-card[_ngcontent-%COMP%]:is(.hospital, .report)[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{--border-radius: 4px}.list-card[_ngcontent-%COMP%]   .time-slots-holder[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]{margin-top:8px;overflow-x:auto}.list-card[_ngcontent-%COMP%]   .time-slots-holder[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-radius:14px;box-shadow:0 2px 4px #0000001a;border:solid 1px #040404;padding:4px;width:90px;text-align:center;height:30px;flex:0 0 90px}"]}),a})()}}]);