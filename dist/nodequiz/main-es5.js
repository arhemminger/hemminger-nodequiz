(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cumulative-summary/cumulative-summary.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cumulative-summary/cumulative-summary.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n============================================\r\n; Title:  Hemminger NodeQuiz\r\n; Author: Andrew Hemminger\r\n; Date:  27 September 2019\r\n; Description: NodeQuiz application\r\n;===========================================\r\n-->\r\n<p>cumulative-summary works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n============================================\r\n; Title:  Hemminger NodeQuiz\r\n; Author: Andrew Hemminger\r\n; Date:  27 September 2019\r\n; Description: NodeQuiz application\r\n;===========================================\r\n-->\r\n<div class=\"heading\">\r\n  <h1>Quiz Selection</h1>\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row align-items-stretch\">\r\n    <div class=\"col align-items-stretch\">\r\n      <!-- Quiz 101 card -->\r\n      <mat-card class=\"quiz-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>Quiz 101</mat-card-title>\r\n          <mat-card-subtitle>JSON APIs</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <hr>\r\n        <mat-card-content>\r\n          <p>\r\n            This quiz covers the concepts around JavaScript Object Notation APIs.\r\n          </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-raised-button color=\"primary\" class=\"mat-button\" [routerLink]=\"['/presentation/101']\">View Presentation</button>\r\n          <button mat-raised-button color=\"primary\" class=\"mat-button\" [routerLink]=\"['/quiz/101']\">Take Quiz</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <!-- Quiz 102 card -->\r\n    <div class=\"col align-items-stretch\">\r\n      <mat-card class=\"quiz-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>Quiz 102</mat-card-title>\r\n          <mat-card-subtitle>Continuous Integration</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <hr>\r\n        <mat-card-content>\r\n          <p>\r\n            This quiz covers the concepts around Continuous Integration.\r\n          </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-raised-button color=\"primary\" class=\"mat-button\" [routerLink]=\"['/presentation/102']\">View Presentation</button>\r\n          <button mat-raised-button color=\"primary\" class=\"mat-button\" [routerLink]=\"['/quiz/102']\">Take Quiz</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <!-- Quiz 103 card -->\r\n    <div class=\"col align-items-stretch\">\r\n      <mat-card class=\"quiz-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>Quiz 103</mat-card-title>\r\n          <mat-card-subtitle>REST Methodologies</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <hr>\r\n        <mat-card-content>\r\n          <p>\r\n            This quiz covers the concepts around REST Methodologies.\r\n          </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-raised-button color=\"primary\" class=\"mat-button\" [routerLink]=\"['/presentation/103']\">View Presentation</button>\r\n          <button mat-raised-button color=\"primary\" class=\"mat-button\" [routerLink]=\"['/quiz/103']\">Take Quiz</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!--  presentation -->\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n============================================\r\n; Title:  Hemminger NodeQuiz\r\n; Author: Andrew Hemminger\r\n; Date:  27 September 2019\r\n; Description: NodeQuiz application\r\n;===========================================\r\n-->\r\n\r\n<div fxLayout=\"column\">\r\n  <mat-card fx-Flex style=\"margin-top: 10%; width: 50%; margin-left: 25%;\" class=\"mat-elevation-z8\">\r\n    <mat-card-title style=\"text-align: center; font-size: 48px\" class=\"mat-headline\">Employee Sign-in</mat-card-title>\r\n    <br>\r\n    <mat-card-subtitle style=\"text-align: center;\" class=\"mat-headline\">You must enter a valid employeeId to proceed</mat-card-subtitle>\r\n    <mat-card-content>\r\n\r\n\r\n      <!-- if there is an error message -->\r\n\r\n      <small style=\"color: red;\" *ngIf=\"errorMessage\">{{ errorMessage }}</small>\r\n\r\n      <mat-card class=\"mat-elevation-z0\" fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"login(); form.reset()\" #loginForm=\"ngForm\">\r\n          <mat-card-content>\r\n            <mat-form-field>\r\n                <input [formControl]=\"form.controls['employeeId']\" fxFlex type=\"text\" matInput placeholder=\"Employee ID\" />\r\n            </mat-form-field>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <button type=\"submit\" fxFlex mat-raised-button color=\"primary\">Submit</button>\r\n          </mat-card-actions>\r\n        </form>\r\n      </mat-card>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n============================================\r\n; Title:  Hemminger NodeQuiz\r\n; Author: Andrew Hemminger\r\n; Date:  27 September 2019\r\n; Description: NodeQuiz application\r\n;===========================================\r\n-->\r\n<h1>404 - Page Not Found</h1>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/presentation/presentation.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/presentation/presentation.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n============================================\r\n; Title:  Hemminger NodeQuiz\r\n; Author: Andrew Hemminger\r\n; Date:  6 October 2019\r\n; Description: NodeQuiz application\r\n;===========================================\r\n-->\r\n<br>\r\n\r\n<div class=\"heading\">\r\n  <h2>Presentation {{presentationId}}</h2>\r\n</div>\r\n\r\n<div fxLayout=\"column\" style=\"margin-left: 10%; width: 80%;\">\r\n    <mat-card class=\"mat-elevation-z8\">\r\n        <mat-card-title>PrimeNG Carousel Quiz {{presentationId}}</mat-card-title>\r\n        <mat-card-content>\r\n            <p-carousel [value]=\"images\" numVisible=\"1\">\r\n                <ng-template style=\"text-align: center;\" let-item pTemplate=\"item\">\r\n                    <br><br>\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        <div fxFlex>\r\n                            <img src=\"./assets/images/{{item.image}}\" width=\"80%\">\r\n                        </div>\r\n                        <div fxFlex>\r\n                            <p>{{item.name}}</p>\r\n                        </div>\r\n                    </div><br><br>\r\n                </ng-template>\r\n            </p-carousel>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <small>Presentation sourced from <a href=\"https://arhemminger.github.io/\" target=\"_blank\">https://arhemminger.github.io/</a></small>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>\r\n\r\n<div>\r\n  <br>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/quiz/quiz.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/quiz/quiz.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n============================================\r\n; Title:  Hemminger NodeQuiz\r\n; Author: Andrew Hemminger\r\n; Date:  2 October 2019\r\n; Description: NodeQuiz application\r\n;===========================================\r\n-->\r\n<div class=\"heading\">\r\n    <h1>Quiz</h1>\r\n  </div>\r\n\r\n  <br>\r\n\r\n  <!--quiz material card-->\r\n  <mat-card class=\"quiz-card\">\r\n    <mat-card-header>\r\n      <mat-card-title>Quiz 101</mat-card-title>\r\n      <mat-card-subtitle>JSON APIs</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <hr>\r\n\r\n    <mat-card-content>\r\n\r\n      <div>\r\n        <h5>1.\tWhat does “JSON” stand for?</h5>\r\n        <div>\r\n          <mat-radio-group [(ngModel)]=\"Answers\" aria-labelledby=\"radio-group-label\" class=\"radio-group\">\r\n            <mat-radio-button *ngFor=\"let answer of answers\" [value]=\"answer\" class=\"radio-button\">{{answer}}</mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n      </div>\r\n\r\n      <hr>\r\n\r\n    </mat-card-content>\r\n\r\n    <mat-card-actions>\r\n      <button mat-raised-button color=\"primary\" class=\"mat-button\">Submit</button>\r\n    </mat-card-actions>\r\n\r\n  </mat-card>\r\n\r\n<!-- Dynamic quiz card (in progress) -->\r\n<!--\r\n<mat-card class=\"quiz-card\">\r\n  <mat-card-header>\r\n    <mat-card-title style=\"text-align: center;\">{{quiz.name}}</mat-card-title>\r\n    <mat-card-subtitle style=\"text-align: center;\">{{quiz.description}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <br>\r\n\r\n  <mat-card-content *ngIf=\"quiz.questions\">\r\n    <div fxLayout=\"column\">\r\n      <!-quiz form->\r\n      <form #quizForm=\"ngForm\" (ngSubmit)=\"onSubmit(quizForm.value); quizForm.reset();\">\r\n\r\n      <div fxLayout=\"column\">\r\n        <!-questions->\r\n        <mat-list>\r\n          <div fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n            <p>Question: </p>\r\n            <p>{{question.text}}</p>\r\n          </div>\r\n        </mat-list>\r\n        <br>\r\n\r\n        <!-answers->\r\n        <div fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n          <label>Answers: </label>\r\n          <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n            <div *ngFor=\"let answer of question.answers\" style=\"flex-direction: column;\">\r\n              <input [{ngModel}]=\"questions[question.id]\" [checked]=\"questions[question.id]\" value=\"{{answer.id}};{{answer.isCorrect}}\" name=\"question{{question.id}}\" type=\"radio\" />\r\n              {{answer.text}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <br>\r\n\r\n  <!-submit button->\r\n  <mat-card-actions>\r\n      <button type=\"submit\" fxFlex mat-raised-button color=\"warn\">Submit</button>\r\n  </mat-card-actions>\r\n  <br>\r\n  </form>\r\n-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/base-layout/base-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n============================================\r\n; Title:  Hemminger NodeQuiz\r\n; Author: Andrew Hemminger\r\n; Date:  27 September 2019\r\n; Description: NodeQuiz application\r\n;===========================================\r\n-->\r\n<div>\r\n<!-- Page header -->\r\n<header>\r\n  <!-- Angular Material toolbar -->\r\n  <mat-toolbar class=\"menu\" role=\"header\" color=\"primary\">\r\n    <mat-toolbar-row>\r\n        <button mat-raised-button color=\"primary\" class=\"mat-button\" [routerLink]=\"['/']\" >Node Quiz</button>\r\n        <button mat-raised-button color=\"primary\" class=\"mat-button\" [routerLink]=\"['/cumulative-summary']\" >Cumulative Summary</button>\r\n      <div fxFlex></div>\r\n\r\n      <!-- Log out -->\r\n      <button mat-raised-button color=\"primary\" class=\"mat-button\" (click)=\"logout()\">Log out</button>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n</header>\r\n\r\n  <!-- Main page content -->\r\n  <main>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n\r\n<div>\r\n<footer>By: Andrew Hemminger</footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/




var AppComponent = /** @class */ (function () {
    function AppComponent(http, router, cookieService) {
        this.http = http;
        this.router = router;
        this.cookieService = cookieService;
        this.title = 'Hemminger Node Quiz';
    }
    AppComponent.prototype.validateEmployee = function (employee) {
        var _this = this;
        this.http.get('/api/employees/' + employee).subscribe(function (res) {
            if (res) {
                _this.router.navigate(['']);
            }
            else {
                console.log('Invalid employeeId');
            }
        }, function (err) {
            console.log('Invalid employeeId');
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/carousel.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_carousel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/cumulative-summary/cumulative-summary.component */ "./src/app/pages/cumulative-summary/cumulative-summary.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony import */ var _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/quiz/quiz.component */ "./src/app/pages/quiz/quiz.component.ts");
/* harmony import */ var _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/presentation/presentation.component */ "./src/app/pages/presentation/presentation.component.ts");

/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/
// modules













//import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// components









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _shared__WEBPACK_IMPORTED_MODULE_15__["BaseLayoutComponent"],
                _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_16__["CumulativeSummaryComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponent"],
                _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_20__["AuthLayoutComponent"],
                _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_21__["QuizComponent"],
                _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_22__["PresentationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"], { useHash: true, enableTracing: false }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                primeng_carousel__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"]
            ],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"],
                _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/cumulative-summary/cumulative-summary.component */ "./src/app/pages/cumulative-summary/cumulative-summary.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/quiz/quiz.component */ "./src/app/pages/quiz/quiz.component.ts");
/* harmony import */ var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/presentation/presentation.component */ "./src/app/pages/presentation/presentation.component.ts");
// pages imports





// shared imports




var AppRoutes = [
    {
        path: '',
        component: _shared__WEBPACK_IMPORTED_MODULE_6__["BaseLayoutComponent"],
        children: [
            {
                path: '',
                component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
                children: [
                    {
                        path: 'presentation/:presentationId',
                        component: _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_8__["PresentationComponent"],
                        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
                    },
                ]
            },
            {
                path: 'quiz/:quizId',
                component: _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__["QuizComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
            },
            {
                path: 'cumulative-summary',
                component: _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_0__["CumulativeSummaryComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
            }
        ]
    },
    {
        path: 'session',
        component: _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
        children: [
            {
                path: 'login',
                component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            },
            {
                path: 'not-found',
                component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'session/not-found'
    }
];


/***/ }),

/***/ "./src/app/pages/cumulative-summary/cumulative-summary.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/cumulative-summary/cumulative-summary.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1bXVsYXRpdmUtc3VtbWFyeS9jdW11bGF0aXZlLXN1bW1hcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/cumulative-summary/cumulative-summary.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cumulative-summary/cumulative-summary.component.ts ***!
  \**************************************************************************/
/*! exports provided: CumulativeSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CumulativeSummaryComponent", function() { return CumulativeSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/

var CumulativeSummaryComponent = /** @class */ (function () {
    function CumulativeSummaryComponent() {
    }
    CumulativeSummaryComponent.prototype.ngOnInit = function () {
    };
    CumulativeSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cumulative-summary',
            template: __webpack_require__(/*! raw-loader!./cumulative-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cumulative-summary/cumulative-summary.component.html"),
            styles: [__webpack_require__(/*! ./cumulative-summary.component.css */ "./src/app/pages/cumulative-summary/cumulative-summary.component.css")]
        })
    ], CumulativeSummaryComponent);
    return CumulativeSummaryComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quiz-card {\r\n  background-color: lightgrey;\r\n  height: 100%;\r\n}\r\n\r\n#presentation {\r\n  display: none;\r\n}\r\n\r\na:link, a:visited {\r\n  color: white;\r\n  padding: 5px;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n\r\na:active, a:hover {\r\n  color: cyan;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWl6LWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNwcmVzZW50YXRpb24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmE6bGluaywgYTp2aXNpdGVkIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmE6YWN0aXZlLCBhOmhvdmVyIHtcclxuICBjb2xvcjogY3lhbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    // Quiz selection function
    DashboardComponent.prototype.takeQuiz = function (quizId) {
        this.router.navigate(['quiz/' + quizId]);
        console.log(quizId);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/





var LoginComponent = /** @class */ (function () {
    //validEmployeeIds = [1007, 1008, 1009, 1010, 1011];
    function LoginComponent(router, cookieService, fb, http) {
        this.router = router;
        this.cookieService = cookieService;
        this.fb = fb;
        this.http = http;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            employeeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')])]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var employeeId = this.form.controls['employeeId'].value;
        console.log(employeeId);
        //If the employeeId is in the validEmployeeId's array, the user is authenticated and we will grant them access
        this.http.get('/api/employees/' + employeeId).subscribe(function (res) {
            if (res !== null) {
                _this.cookieService.set('isAuthenticated', 'true'); //add a cookie to the users browser with a value of true for the session.
                _this.cookieService.set('employeeId', employeeId); //save employeeId in cookies
                _this.router.navigate(['']);
                console.log(employeeId);
            }
            else {
                _this.errorMessage = 'The employee ID you entered is invalid.';
                console.log(employeeId);
            }
        });
        /*    if (this.validEmployeeIds.includes(parseInt(employeeId, 10))) {
              this.cookieService.set('isAuthenticated', 'true', 1); //add a cookie to the users browser with a value of true and exp. 1 day.
              this.router.navigate(['/']);
              } else {
                this.errorMessage = 'The employee ID you entered is invalid.';
              }
        */
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/pages/not-found/not-found.component.css")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/presentation/presentation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/presentation/presentation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/presentation/presentation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/presentation/presentation.component.ts ***!
  \**************************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  6 October 2019
; Description: NodeQuiz application
;===========================================
*/


var PresentationComponent = /** @class */ (function () {
    /* //use to pull presentation from json file -- http giving error need to fix
      getPresentations(id) {
        http.get('/assets/data/presentations.json').subscribe(res => {
          return this.getPresentations.filter(presentation => presentation.id === id)
        })
      }
    */
    function PresentationComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.title = 'Quiz presentation carousel';
        this.presentationId = 0; //setting an initial value
        // Subscribed
        this.route.paramMap.subscribe(function (params) {
            _this.presentationId = parseInt(params.get('presentationId'), 10);
            console.log("subscribed url id: " + _this.presentationId);
            if (_this.presentationId === 101) {
                _this.images = [
                    { name: 'Quiz 101 slide 1', image: 'q101s1.JPG' },
                    { name: 'Quiz 101 slide 2', image: 'q101s2.JPG' },
                    { name: 'Quiz 101 slide 3', image: 'q101s3.JPG' },
                    { name: 'Quiz 101 slide 4', image: 'q101s4.JPG' },
                    { name: 'Quiz 101 slide 5', image: 'q101s5.JPG' },
                    { name: 'Quiz 101 slide 6', image: 'q101s6.JPG' },
                    { name: 'Quiz 101 slide 7', image: 'q101s7.JPG' },
                    { name: 'Quiz 101 slide 8', image: 'q101s8.JPG' },
                    { name: 'Quiz 101 slide 9', image: 'q101s9.JPG' },
                    { name: 'Quiz 101 slide 10', image: 'q101s10.JPG' },
                    { name: 'Quiz 101 slide 11', image: 'q101s11.JPG' },
                    { name: 'Quiz 101 slide 12', image: 'q101s12.JPG' }
                ];
                console.log('presentation slides = ' + _this.images);
            }
            else if (_this.presentationId === 102) {
                _this.images = [
                    { name: 'Quiz 102 slide 1', image: 'q102s1.JPG' },
                    { name: 'Quiz 102 slide 2', image: 'q102s2.JPG' },
                    { name: 'Quiz 102 slide 3', image: 'q102s3.JPG' },
                    { name: 'Quiz 102 slide 4', image: 'q102s4.JPG' },
                    { name: 'Quiz 102 slide 5', image: 'q102s5.JPG' },
                    { name: 'Quiz 102 slide 6', image: 'q102s6.JPG' },
                    { name: 'Quiz 102 slide 7', image: 'q102s7.JPG' },
                    { name: 'Quiz 102 slide 8', image: 'q102s8.JPG' },
                    { name: 'Quiz 102 slide 9', image: 'q102s9.JPG' },
                    { name: 'Quiz 102 slide 10', image: 'q102s10.JPG' },
                    { name: 'Quiz 102 slide 11', image: 'q102s11.JPG' },
                    { name: 'Quiz 102 slide 12', image: 'q102s12.JPG' }
                ];
                console.log('presentation slides = ' + _this.images);
            }
            else if (_this.presentationId === 103) {
                _this.images = [
                    { name: 'Quiz 103 slide 1', image: 'q103s1.JPG' },
                    { name: 'Quiz 103 slide 2', image: 'q103s2.JPG' },
                    { name: 'Quiz 103 slide 3', image: 'q103s3.JPG' },
                    { name: 'Quiz 103 slide 4', image: 'q103s4.JPG' },
                    { name: 'Quiz 103 slide 5', image: 'q103s5.JPG' },
                    { name: 'Quiz 103 slide 6', image: 'q103s6.JPG' },
                    { name: 'Quiz 103 slide 7', image: 'q103s7.JPG' },
                    { name: 'Quiz 103 slide 8', image: 'q103s8.JPG' },
                    { name: 'Quiz 103 slide 9', image: 'q103s9.JPG' },
                    { name: 'Quiz 103 slide 10', image: 'q103s10.JPG' },
                    { name: 'Quiz 103 slide 11', image: 'q103s11.JPG' },
                    { name: 'Quiz 103 slide 12', image: 'q103s12.JPG' }
                ];
                console.log('presentation slides = ' + _this.images);
            }
            else {
                console.log('No valid presentation id for slides: ' + _this.presentationId);
            }
        });
    }
    PresentationComponent.prototype.ngOnInit = function () {
        // No Subscription
        //this.presentationId = parseInt(this.route.snapshot.paramMap.get("presentationId"), 10);
    };
    PresentationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PresentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-presentation',
            template: __webpack_require__(/*! raw-loader!./presentation.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/presentation/presentation.component.html"),
            styles: [__webpack_require__(/*! ./presentation.component.css */ "./src/app/pages/presentation/presentation.component.css")]
        })
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz/quiz.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/quiz/quiz.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quiz-card{\r\n  margin: 0 auto;\r\n  width: 70%;\r\n}\r\n\r\n.radio-group {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  margin: 15px 0;\r\n}\r\n\r\n.radio-button {\r\n  margin: 5px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXovcXVpei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1aXotY2FyZHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ucmFkaW8tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuLnJhZGlvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/quiz/quiz.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/quiz/quiz.component.ts ***!
  \**********************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/



var QuizComponent = /** @class */ (function () {
    //quizResults: any;
    //questions: any = [];
    //question: any = [];
    function QuizComponent(route, router, http) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.answers = ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'];
        this.quizzes = [];
        this.http.get('/api/quizzes/' + this.quizId).subscribe(function (res) {
            _this.quiz = res;
        });
    }
    QuizComponent.prototype.getQuizzes = function (id) {
        var _this = this;
        this.http.get('/assets/data/quizzes.json').subscribe(function (res) {
            return _this.quizzes.filter(function (quiz) { return quiz.id === id; });
        });
    };
    QuizComponent.prototype.ngOnInit = function () {
        // No Subscription
        this.quizId = parseInt(this.route.snapshot.paramMap.get("quizId"), 10);
        console.log('quizId is: ' + this.quizId);
    };
    QuizComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/pages/quiz/quiz.component.css")]
        })
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth-layout/auth-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/auth-layout/auth-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-layout',
            template: "<router-outlet></router-outlet>"
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9iYXNlLWxheW91dC9iYXNlLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/



var BaseLayoutComponent = /** @class */ (function () {
    function BaseLayoutComponent(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    BaseLayoutComponent.prototype.ngOnInit = function () {
    };
    BaseLayoutComponent.prototype.logout = function () {
        this.cookieService.delete('isAuthenticated'); //remove isAuthenticated cookie
        this.cookieService.delete('employeeId'); //remove employeeId cookie
        this.router.navigate(['/session/login']); //return user to login page.
        console.log("Employee logged out.");
    };
    BaseLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
    ]; };
    BaseLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-layout',
            template: __webpack_require__(/*! raw-loader!./base-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html"),
            styles: [__webpack_require__(/*! ./base-layout.component.css */ "./src/app/shared/base-layout/base-layout.component.css")]
        })
    ], BaseLayoutComponent);
    return BaseLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuthenticated = this.cookieService.get('isAuthenticated');
        if (isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(['/session/login']);
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: AuthLayoutComponent, BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_0__["BaseLayoutComponent"]; });

/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"]; });

/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/




/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\arhem\bu-webdev\hemminger-nodequiz\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map