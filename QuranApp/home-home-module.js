(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content dir=\"rtl\">\n  <div class=\"shazam_cont isalmic_pattern\">\n      <div class=\"app_sections start\"  [class.current]=\"startScreen\">\n        <h1 class=\"animated expose\" style=\"--delay:250ms;--duration:700ms\">\n            <span>اضغط للإستماع ومعرفة اسم القارئ والسورة</span>\n        </h1>\n        <ion-button (click)=\"startListen()\" fill=\"clear\" class=\"btns btns_circle btns_pulse animated fadeIn\" style=\"--delay:300ms;--duration:700ms\" >\n          <i class=\"icon-mic\"></i>\n        </ion-button>\n      </div>\n\n      <div class=\"app_sections listen\"   [class.current]=\"listenScreen\">\n          <h1 class=\"animated expose\" style=\"--delay:250ms;--duration:700ms\">\n              <span class=\"loading\">جاري الاستماع<span>.</span><span>.</span><span>.</span></span>\n          </h1>\n          <ion-button (click)=\"displayResults()\" fill=\"clear\" class=\"btns btns_circle btns_ripple animated fadeIn\" style=\"--delay:300ms;--duration:700ms\" >\n              <span style=\"--delay:0s;\"></span>\n              <span style=\"--delay:4s;\"></span>\n              <span style=\"--delay:8s;\"></span>\n              <i class=\"icon-stop\"></i>\n\n          </ion-button>\n      </div>\n\n      <div class=\"app_sections noresults\" [class.current]=\"noResults\">\n          <h1 class=\"animated expose\" style=\"--delay:250ms;--duration:700ms\">\n              <span>لم يتم العثور<br/> علي نتائج</span>\n          </h1>\n          <ion-button (click)=\"startListen()\" fill=\"clear\" class=\"btns btns_circle btns_pulse animated fadeIn\" style=\"--delay:300ms;--duration:700ms\" >\n              <i class=\"icon-mic\"></i>\n          </ion-button>\n      </div>\n\n      <div class=\"app_sections results_cont results_c2\" [class.current]=\"resultsConcept2\">\n            <div class=\"recieter_info\">\n                <img src=\"/assets/images/abdulbasit-abdulsamad.jpg\" class=\"animated expose\" style=\"--delay:300ms;--duration:700ms\"/>\n                <h2 class=\"animated expose\" style=\"--delay:350ms;--duration:700ms\">عبد الباسط عبد  الصمد</h2>\n                <h3 class=\"animated expose\" style=\"--delay:400ms;--duration:700ms\">سورة آل عمران</h3>\n            </div>\n          <ion-button (click)=\"goHome2()\" fill=\"clear\" class=\"btns btns_circle  animated expose\" style=\"--delay:450ms;--duration:700ms\">\n              <i class=\"icon-home\"></i>\n          </ion-button>\n      </div>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
        this.startScreen = false;
        this.listenScreen = false;
        this.noResults = false;
        this.resultsConcept1 = false;
        this.resultsConcept2 = false;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.startScreen = !_this.startScreen;
        }, 500);
    };
    HomePage.prototype.startListen = function () {
        this.startScreen = !this.startScreen;
        this.listenScreen = !this.listenScreen;
    };
    HomePage.prototype.displayResults = function () {
        this.listenScreen = !this.listenScreen;
        this.resultsConcept2 = !this.resultsConcept2;
    };
    HomePage.prototype.goHome = function () {
        this.startScreen = !this.startScreen;
        this.resultsConcept1 = !this.resultsConcept1;
    };
    HomePage.prototype.goHome2 = function () {
        this.startScreen = !this.startScreen;
        this.resultsConcept2 = !this.resultsConcept2;
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map