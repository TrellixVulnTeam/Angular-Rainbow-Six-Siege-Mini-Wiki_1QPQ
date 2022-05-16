"use strict";
(self["webpackChunkkartvizit_app"] = self["webpackChunkkartvizit_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 938);
/* harmony import */ var _operators_operators2_operators2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operators/operators2/operators2.component */ 2047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
    },
    {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
    },
    {
        path: 'header',
        component: _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent
    },
    { path: 'operators', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_operators_operators_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./operators/operators.module */ 9226)).then(m => m.OperatorsModule) },
    {
        path: 'operators2',
        component: _operators_operators2_operators2_component__WEBPACK_IMPORTED_MODULE_3__.Operators2Component
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor() {
        this.title = 'Rainbow Six Siege Wiki';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ 938);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule] }); })();


/***/ }),

/***/ 2468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutComponent {
    constructor() {
        this.aboutPage = {
            firstTitle: '"RAINBOW SIX SIEGE DAHA BÜYÜK VE DAHA İYİ OLDU"',
            secondTitle: 'IGN, WEB DERGİLERİNİN 1 NUMARASI',
            gameplay: 'Oynayış',
            players: 'EKİBİ TOPLAYIN VE İÇERİ GİRİN!',
            friends1: 'DERECELI FPS',
            friends2: "AKSIYON DOLU 5'E 5 PVP AKSIYON OYUNU",
            friends3: 'YOK EDILEBILIR ORTAM',
            mods: '3 MODLAR',
            bomb: 'BOMBA',
            control: 'BÖLGE KONTROLÜ',
            rescue: 'REHİNE KURTARMA'
        };
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 28, vars: 11, consts: [[1, "about-bg"], ["src", "assets/images/r6logo.png", 1, "logo-img"], [1, "r6-mega"], [1, "r6-best"], [1, "about2-bg"], [1, "gameplay"], [1, "play-t"], [1, "three-p"], [1, "three-m"], [1, "images-p", "bomb-m"], ["src", "assets/images/bomb.png"], [1, "images-p", "control-m"], ["src", "assets/images/control.png"], [1, "images-p", "rescue-m"], ["src", "assets/images/rescue.png"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main", 4)(7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aboutPage.firstTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aboutPage.secondTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aboutPage.gameplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aboutPage.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.aboutPage.friends1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.aboutPage.friends2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.aboutPage.friends3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aboutPage.mods);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aboutPage.bomb);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aboutPage.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aboutPage.rescue);
    } }, styles: [".about-bg[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/about.png\");\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n\n.about2-bg[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/about2.png\");\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n\n.logo-img[_ngcontent-%COMP%] {\n  margin-left: 500px;\n  margin-top: 250px;\n}\n\n.r6-mega[_ngcontent-%COMP%] {\n  font-size: 46px;\n  letter-spacing: -0.04em;\n  font-family: Roboto Condensed, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  color: #00ffe5;\n  margin-top: 275px;\n  text-transform: uppercase;\n  text-shadow: 0 0 2px #151d30, 0 0 2px #151d30, 0 0 2px #151d30;\n  text-align: center;\n}\n\n.r6-best[_ngcontent-%COMP%] {\n  font-size: 36px;\n  letter-spacing: -0.04em;\n  font-family: Roboto Condensed, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  color: #fff;\n  margin-top: 50px;\n  text-transform: uppercase;\n  text-shadow: 0 0 2px #151d30, 0 0 2px #151d30, 0 0 2px #151d30;\n  text-align: center;\n}\n\n.gameplay[_ngcontent-%COMP%] {\n  font-size: 42px;\n  letter-spacing: -0.04em;\n  line-height: 50px;\n  text-transform: unset;\n  text-shadow: 0 0 2px #151d30, 0 0 2px #151d30, 0 0 2px #151d30;\n  font-family: Roboto Condensed, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n  margin-block-start: 0.83em;\n  margin-block-end: 0.83em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  display: block;\n  text-align: center;\n  color: #fff;\n}\n\n.play-t[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-text-size-adjust: 100%;\n  color: #00ffe5;\n  font-size: 46px;\n  letter-spacing: -0.04em;\n  font-family: Roboto Condensed, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  text-transform: uppercase;\n  text-shadow: 0 0 2px #151d30, 0 0 2px #151d30, 0 0 2px #151d30;\n}\n\n.three-p[_ngcontent-%COMP%] {\n  font-size: 33px;\n  letter-spacing: -0.04em;\n  font-family: Roboto Condensed, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  line-height: 40px;\n  margin: 15px 0;\n  color: #fff;\n  -webkit-font-smoothing: antialiased;\n  text-transform: uppercase;\n  text-shadow: 0 0 2px #151d30, 0 0 2px #151d30, 0 0 2px #151d30;\n  box-sizing: border-box;\n  text-align: center;\n  margin-top: 200px;\n}\n\n.three-m[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-text-size-adjust: 100%;\n  color: #00ffe5;\n  font-size: 33px;\n  letter-spacing: -0.04em;\n  font-family: Roboto Condensed, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  text-transform: uppercase;\n  text-shadow: 0 0 2px #151d30, 0 0 2px #151d30, 0 0 2px #151d30;\n  margin-top: 200px;\n}\n\n.images-p[_ngcontent-%COMP%] {\n  font-size: 25px;\n  letter-spacing: -0.04em;\n  font-family: Roboto Condensed, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  text-transform: uppercase;\n  text-shadow: 0 0 2px #151d30, 0 0 2px #151d30, 0 0 2px #151d30;\n  color: #fff;\n  width: 100px;\n  padding-top: 100px;\n  line-height: 30px;\n  position: relative;\n  display: inline-flex;\n  flex-direction: column;\n  height: auto;\n}\n\n.bomb-m[_ngcontent-%COMP%] {\n  margin-left: 625px;\n}\n\n.control-m[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n\n.rescue-m[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaURBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrREFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOERBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4REFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOERBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOERBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOERBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw4REFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWJne1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2Fib3V0LnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmFib3V0Mi1iZ3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9hYm91dDIucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ubG9nby1pbWd7XG4gICAgbWFyZ2luLWxlZnQ6IDUwMHB4O1xuICAgIG1hcmdpbi10b3A6IDI1MHB4O1xufVxuXG4ucjYtbWVnYXtcbiAgICBmb250LXNpemU6IDQ2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDRlbTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAjMDBmZmU1O1xuICAgIG1hcmdpbi10b3A6IDI3NXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggIzE1MWQzMCwgMCAwIDJweCAjMTUxZDMwLCAwIDAgMnB4ICMxNTFkMzA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucjYtYmVzdHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDRlbTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCAjMTUxZDMwLCAwIDAgMnB4ICMxNTFkMzAsIDAgMCAycHggIzE1MWQzMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nYW1lcGxheXtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDRlbTtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggIzE1MWQzMCwgMCAwIDJweCAjMTUxZDMwLCAwIDAgMnB4ICMxNTFkMzA7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBDb25kZW5zZWQsc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC44M2VtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDAuODNlbTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5wbGF5LXR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICBjb2xvcjogIzAwZmZlNTtcbiAgICBmb250LXNpemU6IDQ2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDRlbTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggIzE1MWQzMCwgMCAwIDJweCAjMTUxZDMwLCAwIDAgMnB4ICMxNTFkMzA7XG59XG5cbi50aHJlZS1we1xuICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLS4wNGVtO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gQ29uZGVuc2VkLHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCAjMTUxZDMwLCAwIDAgMnB4ICMxNTFkMzAsIDAgMCAycHggIzE1MWQzMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuLnRocmVlLW17XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICBjb2xvcjogIzAwZmZlNTtcbiAgICBmb250LXNpemU6IDMzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDRlbTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggIzE1MWQzMCwgMCAwIDJweCAjMTUxZDMwLCAwIDAgMnB4ICMxNTFkMzA7XG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG5cbi5pbWFnZXMtcHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDRlbTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggIzE1MWQzMCwgMCAwIDJweCAjMTUxZDMwLCAwIDAgMnB4ICMxNTFkMzA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ib21iLW17XG4gICAgbWFyZ2luLWxlZnQ6IDYyNXB4O1xufVxuXG4uY29udHJvbC1te1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cbi5yZXNjdWUtbXtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG59Il19 */"] });


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const _c0 = function () { return { exact: true }; };
class HeaderComponent {
    constructor() {
        this.headerPage = {
            title: 'Rainbow Six Siege Wiki'
        };
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 16, vars: 3, consts: [[1, "header"], ["color", "primary"], [1, "op-font", "text-light", "link-none"], ["href", "index.html"], [1, "example-spacer"], [1, "header-menu"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active"], ["routerLink", "/operators", "routerLinkActive", "active"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "mat-toolbar", 1)(2, "span", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5)(7, "li")(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ana Sayfa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Hakk\u0131nda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Operat\u00F6rler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerPage.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.header-menu[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n}\n\n.header-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 0 10px;\n  text-decoration: none;\n  font-size: 15px;\n  opacity: 0.7;\n}\n\n.header-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.link-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.link-none[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.op-font[_ngcontent-%COMP%] {\n  font-family: Roboto Condensed, sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ007RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDUjs7QUFBUTtFQUVFLFVBQUE7QUFDVjs7QUFLQTtFQUVJLHFCQUFBO0FBSEo7O0FBRUk7RUFBSSxjQUFBO0FBQ1I7O0FBR0E7RUFDSSx5Q0FBQTtBQUFKOztBQUdBO0VBQ0UscUJBQUE7QUFBRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbiAgLmhlYWRlci1tZW51e1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXtcbiAgICAgIGF7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbi5saW5rLW5vbmV7XG4gICAgYSB7IGNvbG9yOiBpbmhlcml0OyB9IFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm9wLWZvbnR7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBDb25kZW5zZWQsc2Fucy1zZXJpZjtcbn1cblxuYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"] });


/***/ }),

/***/ 938:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HomeComponent {
    constructor() {
        this.homePage = {
            firstTitle: "Stratejini belirle",
            secondTitle: 'SALDIRAN KARŞISINDA SAVUNAN',
            thirdTitle: 'OYUNDA 55 ÖZGÜN OPERATÖR SEÇENEĞİ, HER BİRİNİN SAVAŞTA SİZE YARDIM EDEBİLECEK CİHAZLARIYLA SUNULUYOR!',
            checkOperators: 'BÜTÜN OPERATÖRLERİ İNCELE',
            season: 'Her sezon',
            explore: "KEŞFEDILECEK YENI İÇERIKLER",
            newOps: 'YENİ OPERATÖRLER',
            newSkins: 'YENİ KAPLAMALAR',
            newEvents: 'YENİ ETKİNLİKLER',
            season1: 'HER SEZON OYUNA AKSİYONU TAZE VE HEYECANLI KILMAK İÇİN BİRÇOK',
            season2: ' ÜCRETSİZ İÇERİK VE DİĞER SÜRPRİZLER EKLENİYOR.'
        };
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 27, vars: 11, consts: [[1, "home-bg"], [1, "strat"], [1, "attack-or-def"], [1, "op-info"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "op-btn"], [1, "home2-bg"], [1, "season"], [1, "discover"], [1, "images-p", "new-ops", "green-t"], ["src", "assets/images/newops.png"], [1, "images-p", "new-skins", "green-t"], ["src", "assets/images/newskins.png"], [1, "images-p", "new-events", "green-t"], ["src", "assets/images/newevents.png"], [1, "every-season"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "main", 5)(10, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homePage.firstTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homePage.secondTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homePage.thirdTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homePage.checkOperators);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homePage.season);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homePage.explore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homePage.newOps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homePage.newSkins);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homePage.newEvents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homePage.season1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homePage.season2);
    } }, styles: [".home-bg[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/homebg.png\");\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n\n.home2-bg[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/season.png\");\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n\n.strat[_ngcontent-%COMP%] {\n  font-size: 42px;\n  letter-spacing: -0.04em;\n  line-height: 50px;\n  text-shadow: 0 0 2px #151d30, 0 0 2px #151d30, 0 0 2px #151d30;\n  text-transform: unset;\n  font-family: Roboto Condensed, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  text-align: center;\n}\n\n.attack-or-def[_ngcontent-%COMP%] {\n  font-size: 58px;\n  letter-spacing: -0.04em;\n  line-height: 70px;\n  color: #00ffe5;\n  text-shadow: 0 0 2px #151d30, 0 0 2px #151d30, 0 0 2px #151d30;\n  font-family: Roboto Condensed, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  -webkit-font-smoothing: antialiased;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.op-info[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n  font-size: 33px;\n  letter-spacing: -0.04em;\n  font-family: Roboto Condensed, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  padding-top: 600px;\n  margin-left: 400px;\n  max-width: 960px;\n  text-shadow: 0 0 2px #151d30, 0 0 2px #151d30, 0 0 2px #151d30;\n  line-height: 40px;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased;\n  text-transform: uppercase;\n}\n\n.op-btn[_ngcontent-%COMP%] {\n  margin-left: 700px;\n  border-radius: 0;\n  color: #000;\n  text-shadow: none;\n  font-family: Roboto Condensed, sans-serif;\n  font-style: italic;\n}\n\n.season[_ngcontent-%COMP%] {\n  font-size: 42px;\n  letter-spacing: -0.04em;\n  line-height: 50px;\n  font-family: Roboto Condensed, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  text-align: center;\n  padding-top: 350px;\n}\n\n.discover[_ngcontent-%COMP%] {\n  font-size: 58px;\n  letter-spacing: -0.04em;\n  line-height: 70px;\n  color: #00ffe5;\n  text-shadow: 0 0 2px #151d30, 0 0 2px #151d30, 0 0 2px #151d30;\n  font-family: Roboto Condensed, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.images-p[_ngcontent-%COMP%] {\n  font-size: 25px;\n  letter-spacing: -0.04em;\n  font-family: Roboto Condensed, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  text-transform: uppercase;\n  text-shadow: 0 0 2px #151d30, 0 0 2px #151d30, 0 0 2px #151d30;\n  color: #fff;\n  width: 100px;\n  padding-top: 100px;\n  line-height: 30px;\n  position: relative;\n  display: inline-flex;\n  flex-direction: column;\n  height: auto;\n}\n\n.new-ops[_ngcontent-%COMP%] {\n  margin-left: 625px;\n}\n\n.new-skins[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n\n.new-events[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n\n.green-t[_ngcontent-%COMP%] {\n  color: #00ffe5;\n}\n\n.every-season[_ngcontent-%COMP%] {\n  font-size: 28px;\n  letter-spacing: -0.04em;\n  line-height: 40px;\n  font-family: Roboto Condensed, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  text-align: center;\n  text-transform: uppercase;\n  text-shadow: 0 0 2px #151d30, 0 0 2px #151d30, 0 0 2px #151d30;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrREFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGtEQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4REFBQTtFQUNBLHFCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDhEQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4REFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw4REFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOERBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw4REFBQTtBQUVKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1iZ3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9ob21lYmcucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uaG9tZTItYmd7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvc2Vhc29uLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnN0cmF0e1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLS4wNGVtO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4ICMxNTFkMzAsIDAgMCAycHggIzE1MWQzMCwgMCAwIDJweCAjMTUxZDMwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1bnNldDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmF0dGFjay1vci1kZWZ7XG4gICAgZm9udC1zaXplOiA1OHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtLjA0ZW07XG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gICAgY29sb3I6ICMwMGZmZTU7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggIzE1MWQzMCwgMCAwIDJweCAjMTUxZDMwLCAwIDAgMnB4ICMxNTFkMzA7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBDb25kZW5zZWQsc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm9wLWluZm97XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLS4wNGVtO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gQ29uZGVuc2VkLHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgcGFkZGluZy10b3A6IDYwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MDBweDtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4ICMxNTFkMzAsIDAgMCAycHggIzE1MWQzMCwgMCAwIDJweCAjMTUxZDMwO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm9wLWJ0bntcbiAgICBtYXJnaW4tbGVmdDogNzAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnNlYXNvbntcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDRlbTtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMzUwcHg7XG59XG5cbi5kaXNjb3ZlcntcbiAgICBmb250LXNpemU6IDU4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDRlbTtcbiAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICBjb2xvcjogIzAwZmZlNTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCAjMTUxZDMwLCAwIDAgMnB4ICMxNTFkMzAsIDAgMCAycHggIzE1MWQzMDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2VzLXB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtLjA0ZW07XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBDb25kZW5zZWQsc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4ICMxNTFkMzAsIDAgMCAycHggIzE1MWQzMCwgMCAwIDJweCAjMTUxZDMwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubmV3LW9wc3tcbiAgICBtYXJnaW4tbGVmdDogNjI1cHg7XG59XG5cbi5uZXctc2tpbnN7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuLm5ldy1ldmVudHN7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG4uZ3JlZW4tdHtcbiAgICBjb2xvcjogIzAwZmZlNTtcbn1cblxuLmV2ZXJ5LXNlYXNvbntcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDRlbTtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4ICMxNTFkMzAsIDAgMCAycHggIzE1MWQzMCwgMCAwIDJweCAjMTUxZDMwO1xufSJdfQ== */"] });


/***/ }),

/***/ 6315:
/*!****************************************************!*\
  !*** ./src/app/operators/amaru/amaru.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmaruComponent": () => (/* binding */ AmaruComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 1961);


class AmaruComponent {
    constructor() { }
    ngOnInit() {
    }
}
AmaruComponent.ɵfac = function AmaruComponent_Factory(t) { return new (t || AmaruComponent)(); };
AmaruComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AmaruComponent, selectors: [["app-amaru"]], inputs: { amaruOperator: "amaruOperator" }, decls: 51, vars: 19, consts: [[1, "card-item", "bg-transparent", "border", "border-light"], [1, "d-flex", "justify-content-center"], [1, "text-center", "op-font", "text-light"], [1, "op-font", "text-light"], ["src", "assets/images/amaru_card.png", "alt", "...", 1, "img-thumbnail", "rounded", "mx-auto", "d-block"], ["src", "assets/images/amaru.png", "alt", "amaru", 1, "rounded", "mx-auto", "d-block", 2, "width", "5rem"], [1, "list-group", "border", "border-light"], [1, "list-group-item", "bg-transparent", "op-font", "text-light", "border", "border-light"], [1, "col", "text-center"], ["href", "https://www.ubisoft.com/tr-tr/game/rainbow-six/siege/game-info/operators/amaru"], [1, "btn", "btn-primary", "op-font", "text-light", "link-none"]], template: function AmaruComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header", 1)(2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4)(8, "br")(9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 2)(11, "strong")(12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 6)(18, "li", 7)(19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7)(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7)(28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7)(32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 7)(36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 7)(40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 7)(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8)(48, "a", 9)(49, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.playSide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.playStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.operatorRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.health);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.operatorHealth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.speed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.operatorSpeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.primaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.operatorPrimaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.secondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.operatorSecondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.device);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.operatorDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.specialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.operatorSpecialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amaruOperator.operatorDetailButton);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent], styles: [".card-item[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.link-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.link-none[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.op-font[_ngcontent-%COMP%] {\n  font-family: Roboto Condensed, sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFtYXJ1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUVJLHFCQUFBO0FBQUo7O0FBREk7RUFBSSxjQUFBO0FBSVI7O0FBQUE7RUFDSSx5Q0FBQTtBQUdKOztBQUFBO0VBQ0kscUJBQUE7QUFHSiIsImZpbGUiOiJhbWFydS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWl0ZW17XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmxpbmstbm9uZXtcbiAgICBhIHsgY29sb3I6IGluaGVyaXQ7IH0gXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ub3AtZm9udHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZCxzYW5zLXNlcmlmO1xufVxuXG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"] });


/***/ }),

/***/ 7754:
/*!**************************************************!*\
  !*** ./src/app/operators/goyo/goyo.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoyoComponent": () => (/* binding */ GoyoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 1961);


class GoyoComponent {
    constructor() { }
    ngOnInit() {
    }
}
GoyoComponent.ɵfac = function GoyoComponent_Factory(t) { return new (t || GoyoComponent)(); };
GoyoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoyoComponent, selectors: [["app-goyo"]], inputs: { goyoOperator: "goyoOperator" }, decls: 51, vars: 19, consts: [[1, "card-item", "bg-transparent", "border", "border-light"], [1, "d-flex", "justify-content-center"], [1, "text-center", "op-font", "text-light"], [1, "op-font", "text-light"], ["src", "assets/images/goyo_card.png", "alt", "...", 1, "img-thumbnail", "rounded", "mx-auto", "d-block"], ["src", "assets/images/goyo.png", "alt", "goyo", 1, "rounded", "mx-auto", "d-block", 2, "width", "5rem"], [1, "list-group", "border", "border-light"], [1, "list-group-item", "bg-transparent", "op-font", "text-light", "border", "border-light"], [1, "col", "text-center"], ["href", "https://www.ubisoft.com/tr-tr/game/rainbow-six/siege/game-info/operators/goyo"], [1, "btn", "btn-primary", "op-font", "text-light", "link-none"]], template: function GoyoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header", 1)(2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4)(8, "br")(9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 2)(11, "strong")(12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 6)(18, "li", 7)(19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7)(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7)(28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7)(32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 7)(36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 7)(40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 7)(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8)(48, "a", 9)(49, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.playSide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.playStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.operatorRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.health);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.operatorHealth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.speed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.operatorSpeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.primaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.operatorPrimaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.secondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.operatorSecondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.device);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.operatorDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.specialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.operatorSpecialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goyoOperator.operatorDetailButton);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent], styles: [".card-item[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.link-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.link-none[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.op-font[_ngcontent-%COMP%] {\n  font-family: Roboto Condensed, sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdveW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBRUkscUJBQUE7QUFBSjs7QUFESTtFQUFJLGNBQUE7QUFJUjs7QUFBQTtFQUNJLHlDQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtBQUdKIiwiZmlsZSI6ImdveW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pdGVte1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5saW5rLW5vbmV7XG4gICAgYSB7IGNvbG9yOiBpbmhlcml0OyB9IFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm9wLWZvbnR7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBDb25kZW5zZWQsc2Fucy1zZXJpZjtcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"] });


/***/ }),

/***/ 4578:
/*!**************************************************!*\
  !*** ./src/app/operators/iana/iana.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IanaComponent": () => (/* binding */ IanaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 1961);


class IanaComponent {
    constructor() { }
    ngOnInit() {
    }
}
IanaComponent.ɵfac = function IanaComponent_Factory(t) { return new (t || IanaComponent)(); };
IanaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IanaComponent, selectors: [["app-iana"]], inputs: { ianaOperator: "ianaOperator" }, decls: 51, vars: 19, consts: [[1, "card-item", "bg-transparent", "border", "border-light"], [1, "d-flex", "justify-content-center"], [1, "text-center", "op-font", "text-light"], [1, "op-font", "text-light"], ["src", "assets/images/iana_card.png", "alt", "...", 1, "img-thumbnail", "rounded", "mx-auto", "d-block"], ["src", "assets/images/iana.png", "alt", "iana", 1, "rounded", "mx-auto", "d-block", 2, "width", "5rem"], [1, "list-group", "border", "border-light"], [1, "list-group-item", "bg-transparent", "op-font", "text-light", "border", "border-light"], [1, "col", "text-center"], ["href", "https://www.ubisoft.com/tr-tr/game/rainbow-six/siege/game-info/operators/iana"], [1, "btn", "btn-primary", "op-font", "text-light", "link-none"]], template: function IanaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header", 1)(2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4)(8, "br")(9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 2)(11, "strong")(12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 6)(18, "li", 7)(19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7)(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7)(28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7)(32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 7)(36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 7)(40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 7)(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8)(48, "a", 9)(49, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.playSide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.playStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.operatorRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.health);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.operatorHealth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.speed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.operatorSpeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.primaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.operatorPrimaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.secondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.operatorSecondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.device);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.operatorDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.specialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.operatorSpecialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ianaOperator.operatorDetailButton);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent], styles: [".card-item[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.link-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.link-none[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.op-font[_ngcontent-%COMP%] {\n  font-family: Roboto Condensed, sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlhbmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBRUkscUJBQUE7QUFBSjs7QUFESTtFQUFJLGNBQUE7QUFJUjs7QUFBQTtFQUNJLHlDQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtBQUdKIiwiZmlsZSI6ImlhbmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pdGVte1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5saW5rLW5vbmV7XG4gICAgYSB7IGNvbG9yOiBpbmhlcml0OyB9IFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm9wLWZvbnR7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBDb25kZW5zZWQsc2Fucy1zZXJpZjtcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"] });


/***/ }),

/***/ 1986:
/*!**************************************************!*\
  !*** ./src/app/operators/kali/kali.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KaliComponent": () => (/* binding */ KaliComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 1961);


class KaliComponent {
    constructor() { }
    ngOnInit() {
    }
}
KaliComponent.ɵfac = function KaliComponent_Factory(t) { return new (t || KaliComponent)(); };
KaliComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KaliComponent, selectors: [["app-kali"]], inputs: { kaliOperator: "kaliOperator" }, decls: 51, vars: 19, consts: [[1, "card-item", "bg-transparent", "border", "border-light"], [1, "d-flex", "justify-content-center"], [1, "text-center", "op-font", "text-light"], [1, "op-font", "text-light"], ["src", "assets/images/kali_card.png", "alt", "...", 1, "img-thumbnail", "rounded", "mx-auto", "d-block"], ["src", "assets/images/kali.png", "alt", "kali", 1, "rounded", "mx-auto", "d-block", 2, "width", "5rem"], [1, "list-group", "border", "border-light"], [1, "list-group-item", "bg-transparent", "op-font", "text-light", "border", "border-light"], [1, "col", "text-center"], ["href", "https://www.ubisoft.com/tr-tr/game/rainbow-six/siege/game-info/operators/kali"], [1, "btn", "btn-primary", "op-font", "text-light", "link-none"]], template: function KaliComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header", 1)(2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4)(8, "br")(9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 2)(11, "strong")(12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 6)(18, "li", 7)(19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7)(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7)(28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7)(32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 7)(36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 7)(40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 7)(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8)(48, "a", 9)(49, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.playSide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.playStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.operatorRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.health);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.operatorHealth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.speed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.operatorSpeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.primaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.operatorPrimaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.secondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.operatorSecondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.device);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.operatorDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.specialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.operatorSpecialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kaliOperator.operatorDetailButton);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent], styles: [".card-item[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.link-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.link-none[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.op-font[_ngcontent-%COMP%] {\n  font-family: Roboto Condensed, sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImthbGkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBRUkscUJBQUE7QUFBSjs7QUFESTtFQUFJLGNBQUE7QUFJUjs7QUFBQTtFQUNJLHlDQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtBQUdKIiwiZmlsZSI6ImthbGkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pdGVte1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5saW5rLW5vbmV7XG4gICAgYSB7IGNvbG9yOiBpbmhlcml0OyB9IFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm9wLWZvbnR7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBDb25kZW5zZWQsc2Fucy1zZXJpZjtcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"] });


/***/ }),

/***/ 4434:
/*!******************************************************!*\
  !*** ./src/app/operators/melusi/melusi.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MelusiComponent": () => (/* binding */ MelusiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 1961);


class MelusiComponent {
    constructor() { }
    ngOnInit() {
    }
}
MelusiComponent.ɵfac = function MelusiComponent_Factory(t) { return new (t || MelusiComponent)(); };
MelusiComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MelusiComponent, selectors: [["app-melusi"]], inputs: { melusiOperator: "melusiOperator" }, decls: 51, vars: 19, consts: [[1, "card-item", "bg-transparent", "border", "border-light"], [1, "d-flex", "justify-content-center"], [1, "text-center", "op-font", "text-light"], [1, "op-font", "text-light"], ["src", "assets/images/melusi_card.png", "alt", "...", 1, "img-thumbnail", "rounded", "mx-auto", "d-block"], ["src", "assets/images/melusi.png", "alt", "melusi", 1, "rounded", "mx-auto", "d-block", 2, "width", "5rem"], [1, "list-group", "border", "border-light"], [1, "list-group-item", "bg-transparent", "op-font", "text-light", "border", "border-light"], [1, "col", "text-center"], ["href", "https://www.ubisoft.com/tr-tr/game/rainbow-six/siege/game-info/operators/melusi"], [1, "btn", "btn-primary", "op-font", "text-light", "link-none"]], template: function MelusiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header", 1)(2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4)(8, "br")(9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 2)(11, "strong")(12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 6)(18, "li", 7)(19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7)(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7)(28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7)(32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 7)(36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 7)(40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 7)(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8)(48, "a", 9)(49, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.playSide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.playStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.operatorRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.health);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.operatorHealth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.speed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.operatorSpeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.primaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.operatorPrimaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.secondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.operatorSecondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.device);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.operatorDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.specialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.operatorSpecialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.melusiOperator.operatorDetailButton);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent], styles: [".card-item[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.link-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.link-none[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.op-font[_ngcontent-%COMP%] {\n  font-family: Roboto Condensed, sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbHVzaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFFSSxxQkFBQTtBQUFKOztBQURJO0VBQUksY0FBQTtBQUlSOztBQUFBO0VBQ0kseUNBQUE7QUFHSjs7QUFBQTtFQUNJLHFCQUFBO0FBR0oiLCJmaWxlIjoibWVsdXNpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaXRlbXtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubGluay1ub25le1xuICAgIGEgeyBjb2xvcjogaW5oZXJpdDsgfSBcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5vcC1mb250e1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gQ29uZGVuc2VkLHNhbnMtc2VyaWY7XG59XG5cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"] });


/***/ }),

/***/ 5886:
/*!**************************************************!*\
  !*** ./src/app/operators/nokk/nokk.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NokkComponent": () => (/* binding */ NokkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 1961);


class NokkComponent {
    constructor() { }
    ngOnInit() {
    }
}
NokkComponent.ɵfac = function NokkComponent_Factory(t) { return new (t || NokkComponent)(); };
NokkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NokkComponent, selectors: [["app-nokk"]], inputs: { nokkOperator: "nokkOperator" }, decls: 51, vars: 19, consts: [[1, "card-item", "bg-transparent", "border", "border-light"], [1, "d-flex", "justify-content-center"], [1, "text-center", "op-font", "text-light"], [1, "op-font", "text-light"], ["src", "assets/images/nokk_card.png", "alt", "...", 1, "img-thumbnail", "rounded", "mx-auto", "d-block"], ["src", "assets/images/nokk.png", "alt", "nokk", 1, "rounded", "mx-auto", "d-block", 2, "width", "5rem"], [1, "list-group", "border", "border-light"], [1, "list-group-item", "bg-transparent", "op-font", "text-light", "border", "border-light"], [1, "col", "text-center"], ["href", "https://www.ubisoft.com/tr-tr/game/rainbow-six/siege/game-info/operators/nokk"], [1, "btn", "btn-primary", "op-font", "text-light", "link-none"]], template: function NokkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header", 1)(2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4)(8, "br")(9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 2)(11, "strong")(12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 6)(18, "li", 7)(19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7)(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7)(28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7)(32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 7)(36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 7)(40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 7)(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8)(48, "a", 9)(49, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.playSide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.playStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.operatorRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.health);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.operatorHealth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.speed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.operatorSpeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.primaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.operatorPrimaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.secondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.operatorSecondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.device);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.operatorDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.specialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.operatorSpecialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nokkOperator.operatorDetailButton);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent], styles: [".card-item[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.link-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.link-none[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.op-font[_ngcontent-%COMP%] {\n  font-family: Roboto Condensed, sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5va2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBRUkscUJBQUE7QUFBSjs7QUFESTtFQUFJLGNBQUE7QUFJUjs7QUFBQTtFQUNJLHlDQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtBQUdKIiwiZmlsZSI6Im5va2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pdGVte1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5saW5rLW5vbmV7XG4gICAgYSB7IGNvbG9yOiBpbmhlcml0OyB9IFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm9wLWZvbnR7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBDb25kZW5zZWQsc2Fucy1zZXJpZjtcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"] });


/***/ }),

/***/ 2047:
/*!**************************************************************!*\
  !*** ./src/app/operators/operators2/operators2.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Operators2Component": () => (/* binding */ Operators2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _melusi_melusi_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../melusi/melusi.component */ 4434);
/* harmony import */ var _oryx_oryx_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../oryx/oryx.component */ 7840);
/* harmony import */ var _iana_iana_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../iana/iana.component */ 4578);
/* harmony import */ var _wamai_wamai_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wamai/wamai.component */ 1364);
/* harmony import */ var _kali_kali_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kali/kali.component */ 1986);
/* harmony import */ var _amaru_amaru_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../amaru/amaru.component */ 6315);
/* harmony import */ var _goyo_goyo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../goyo/goyo.component */ 7754);
/* harmony import */ var _nokk_nokk_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nokk/nokk.component */ 5886);
/* harmony import */ var _operatorsfooter_operatorsfooter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../operatorsfooter/operatorsfooter.component */ 1782);










class Operators2Component {
    constructor() {
        this.pageTitle = {
            title: 'Operatörler',
            info: 'Bu sayfada Rainbow Six Siege oyununun operatörleri hakkında detaylı bilgiler bulunmaktadır.'
        };
        this.melusiOperator = {
            name: 'MELUSI',
            playSide: 'TARAF: SAVUNAN',
            playStyle: 'ÖZEL KABİLİYETLER VE OYNAYIŞ STİLİ',
            info: "Banshee Ses Dalgası Savunması, aynı Maestro’nun Kem Gözü gibi yüzeylere kurulabilir; ama manuel kontrol gerektirmez. Bir rakip yeterince yakınına geldiği an bir çığlık koparır ve rakibini yavaşlatır. Yok edilebilir; ama kurşun geçirmez olduğu için Saldıranların bazı cihazlar kullanmaları veya çok yakından saldırmaları gerekir.",
            role: 'ROL:',
            operatorRole: ' Kitle Kontrolü, İstihbarat Toplayan, Kontrole Al',
            health: 'SAĞLIK:',
            operatorHealth: ' ✓ x x',
            speed: 'HIZ:',
            operatorSpeed: ' ✓ ✓ ✓',
            primaryWeapon: 'BİRİNCİL SİLAH:',
            operatorPrimaryWeapon: ' MP5 HAFİF MAKİNELİ TÜFEK VEYA SUPER 90 YİVSİZ TÜFEK',
            secondaryWeapon: 'İKİNCİL SİLAH:',
            operatorSecondaryWeapon: ' RG15 TABANCA',
            device: 'CİHAZ:',
            operatorDevice: ' ALAN ETKİLİ BOMBA VEYA NİTRO PATLAYICI',
            specialAbility: 'ÖZEL KABİLİYET:',
            operatorSpecialAbility: ' BANSHEE SES DALGASI',
            operatorDetailButton: "Resmi Sayfada İncele"
        };
        this.oryxOperator = {
            name: 'ORYX',
            playSide: 'TARAF: SAVUNAN',
            playStyle: 'ÖZGÜN KABİLİYETLERİ VE OYNANIŞ STİLİ',
            info: "Remah Atılımı'nın hızı ona hızlıca etrafı dolanmasını ve kısa mesafeleri inanılmaz bir çabuklukla geçmesini sağlar. Aynı zamanda rakipleri yere düşürür ve yıkılabilir duvarları yıkarak büyük açıklar yaratır. Ancak dikkatli olun, Remah Atılımı yıkım için kullanıldığında can değeri kaybına yol açar. Ek olarak Oryx'in özgün bir kabiliyeti de kırılmış boşluklarla etkileşimi var.",
            role: 'ROL:',
            operatorRole: ' Gezi, Hafif Patlatıcı',
            health: 'SAĞLIK:',
            operatorHealth: ' ✓ ✓ x',
            speed: 'HIZ:',
            operatorSpeed: ' ✓ ✓ x',
            primaryWeapon: 'BİRİNCİL SİLAH:',
            operatorPrimaryWeapon: ' SPAS-12 YİVSİZ TÜFEK VEYA T-5 SMG HAFİF MAKİNELİ TÜFEK',
            secondaryWeapon: 'İKİNCİL SİLAH:',
            operatorSecondaryWeapon: ' BAİLİFF 410 TABANCA VEYA USP40',
            device: 'CİHAZ:',
            operatorDevice: ' DİKENLİ TEL VEYA YAKINLIK ALARMI',
            specialAbility: 'ÖZEL KABİLİYET:',
            operatorSpecialAbility: ' REMAH DASH',
            operatorDetailButton: "Resmi Sayfada İncele"
        };
        this.ianaOperator = {
            name: 'IANA',
            playSide: 'TARAF: SALDIRAN',
            playStyle: 'ÖZGÜN KABİLİYETLER VE OYNANIŞ STİLİ',
            info: "İkiz Çoğaltıcı, Iana'nın uzaktan kontrol edilebilien holografik bir kopyasıdır. Hareket edebilir ve ses çıkarabilir, ancak ateş edemez, yakın savaşa giremez veya ikincil cihazlarını kullanamaz. Bir zaman limiti vardır, ancak istendiği zaman kapanabilir. İki kullanım arasında her zaman bir soğuma vardır ve eğer yok edilirse, bu süreç daha uzun olur.",
            role: 'ROL:',
            operatorRole: ' İstihbarat Reddi, İstihbarat Toplayan',
            health: 'SAĞLIK:',
            operatorHealth: ' ✓ ✓ x',
            speed: 'HIZ:',
            operatorSpeed: ' ✓ ✓ x',
            primaryWeapon: 'BİRİNCİL SİLAH:',
            operatorPrimaryWeapon: ' ARX200 PİYADE TÜFEĞİ VEYA G36C PİYADE TÜFEĞİ',
            secondaryWeapon: 'İKİNCİL SİLAH:',
            operatorSecondaryWeapon: ' MK1 9MM TABANCA VEYA GONNE-6',
            device: 'CİHAZ:',
            operatorDevice: ' EL BOMBASI VEYA DUMAN BOMBASI',
            specialAbility: 'ÖZEL KABİLİYET:',
            operatorSpecialAbility: ' GEMINI REPLICATOR',
            operatorDetailButton: "Resmi Sayfada İncele"
        };
        this.wamaiOperator = {
            name: 'WAMAI',
            playSide: 'TARAF: SAVUNAN',
            playStyle: 'BENZERSİZ KABİLİYETLER VE OYNANIŞ TARZI',
            info: "Mag-NET Sistemi fırlatılan, yapışkan bir cihazdır. Yüzeylere yapışır ve durur. İşlevi, rakibinin mühimmatını bulunduğu yere çekmek ve daha sonra o mühimmatı patlatmak için kendini imha etmektir. Bu şekilde, Wamai sadece Saldıranların el bombalarını ve mühimmat cihazlarını işe yaramaz hale getirir ve karşı saldırı için kullanabilir.",
            role: 'ROL:',
            operatorRole: ' Çapa, Kontrol Altına Al',
            health: 'SAĞLIK:',
            operatorHealth: ' ✓ ✓ x',
            speed: 'HIZ:',
            operatorSpeed: ' ✓ ✓ x',
            primaryWeapon: 'BİRİNCİL SİLAH:',
            operatorPrimaryWeapon: ' AUG A2 PİYADE TÜFEĞİ VEYA MP5K HAFİF MAKİNELİ TÜFEK',
            secondaryWeapon: 'İKİNCİL SİLAH:',
            operatorSecondaryWeapon: ' D-40 TABANCA VEYA P12 TABANCA',
            device: 'CİHAZ:',
            operatorDevice: ' YAKINLIK ALARMI VEYA ALAN ETKİLİ BOMBA',
            specialAbility: 'ÖZEL KABİLİYET:',
            operatorSpecialAbility: ' MAG-NET SİSTEMİ',
            operatorDetailButton: "Resmi Sayfada İncele"
        };
        this.kaliOperator = {
            name: 'KALI',
            playSide: 'TARAF: SALDIRAN',
            playStyle: 'BENZERSİZ KABİLİYETLER VE OYNANIŞ TARZI',
            info: "DH Patlayıcı Mızrak hakkında konuşmak için, Kali’nin CSRX 300’ünden bahsetmemiz gerekiyor. Barikatları ve zeminleri tek seferde delebilen ve kırılabilir duvarlarda büyük delikler yaratabilen tehlikeli bir silahtır. LV, namlunun altında yer alır ve aynı zamanda CSRX 300’ün dürbünü olarak da kullanılabilir. Rolü, belli bir yarıçap içinde hafif bir patlama ile aletlerin yok etmektir.",
            role: 'ROL:',
            operatorRole: ' Arka Hat, Koruma Ateşi, Devre Dışı',
            health: 'SAĞLIK:',
            operatorHealth: ' ✓ ✓ x',
            speed: 'HIZ:',
            operatorSpeed: ' ✓ ✓ x',
            primaryWeapon: 'BİRİNCİL SİLAH:',
            operatorPrimaryWeapon: ' SADECE CSRX 300 NİŞANCI TÜFEĞİ',
            secondaryWeapon: 'İKİNCİL SİLAH:',
            operatorSecondaryWeapon: ' SPSMG9 VEYA C75 AUTO MAKİNELİ',
            device: 'CİHAZ:',
            operatorDevice: ' UZAKTAN PATLAYICI VEYA TUZAKLI MAYIN',
            specialAbility: 'ÖZEL KABİLİYET:',
            operatorSpecialAbility: ' DH PATLAYICI MIZRAK',
            operatorDetailButton: "Resmi Sayfada İncele"
        };
        this.amaruOperator = {
            name: 'AMARU',
            playSide: 'TARAF: SALDIRAN',
            playStyle: 'BENZERSİZ KABİLİYETLER VE OYNANIŞ TARZI',
            info: "Garra Kancası gerçekten eşsiz bir mekanizma. Bunu kullanarak Amaru kendisini pervazlara ve pencerelere tutturarak çok kısa sürede yukarı çekebilir. Rakipleri artık sadece yukarıdan gelecek saldırılara değil, aynı zamanda aşağıdan gelecek saldırılara karşı da tetikte olacaklar. Garra ile Amaru bir açıklığa yukarıdan değil de aşağıdan ulaşabilen tek operatördür.",
            role: 'ROL:',
            operatorRole: ' Kuşat, Cephe Hattı',
            health: 'SAĞLIK:',
            operatorHealth: ' ✓ ✓ x',
            speed: 'HIZ:',
            operatorSpeed: ' ✓ ✓ x',
            primaryWeapon: 'BİRİNCİL SİLAH:',
            operatorPrimaryWeapon: ' G8A1 HAFİF MAKİNELİ TÜFEK VEYA SUPERNOVA YİVSİZ TÜFEK',
            secondaryWeapon: 'İKİNCİL SİLAH:',
            operatorSecondaryWeapon: ' GONNE-6 VEYA SMG-11 MAKİNELİ',
            device: 'CİHAZ:',
            operatorDevice: ' SERSEMLETME & SERT PATLATICI BOMBA',
            specialAbility: 'ÖZEL KABİLİYET:',
            operatorSpecialAbility: ' GARRA KANCASI',
            operatorDetailButton: "Resmi Sayfada İncele"
        };
        this.goyoOperator = {
            name: 'GOYO',
            playSide: 'TARAF: SAVUNAN',
            playStyle: 'BENZERSİZ KABİLİYETLER VE OYNANIŞ TARZI',
            info: "Alışılmış Kurulabilir Kalkan da olduğu gibi, Volcán Kalkanı koruma sağlar ve Savunanların geçiş yollarını engellemesine izin verir. Fakat Goyo üzerine eklenmiş yakıcı bombasıyla ortalığı ateşe verir. Yine de, önden bakıldığında hangisi olduğunu belli eden küçük bir işaret taşıyor. Birisi üzerindeki bombayı patlatmak için ateş edene dek, kalkan Saldıranlar için bir engel olmaya devam eder.",
            role: 'ROL:',
            operatorRole: ' Bölge Reddi, Kontrol Altına Al',
            health: 'SAĞLIK:',
            operatorHealth: ' ✓ ✓ x',
            speed: 'HIZ:',
            operatorSpeed: ' ✓ ✓ x',
            primaryWeapon: 'BİRİNCİL SİLAH:',
            operatorPrimaryWeapon: ' VECTOR .45 ACP HAFİF MAKİNELİ TÜFEK VEYA TCSG12 YİVSİZ TÜFEK',
            secondaryWeapon: 'İKİNCİL SİLAH:',
            operatorSecondaryWeapon: ' P229 RC TABANCA',
            device: 'CİHAZ:',
            operatorDevice: ' YAKINLIK ALARMI VEYA NİTRO PATLAYICI',
            specialAbility: 'ÖZEL KABİLİYET:',
            operatorSpecialAbility: ' VOLCÁN KALKANI',
            operatorDetailButton: "Resmi Sayfada İncele"
        };
        this.nokkOperator = {
            name: 'NØKK',
            playSide: 'TARAF: SALDIRAN',
            playStyle: 'BENZERSİZ KABİLİYETLER VE OYNANIŞ TARZI',
            info: "HEL bir eldiven eklentisidir ve etkinleştirildiğinde Nøkk'un çıkardığı çevre gürültüsünü azaltıp rakibin izleme cihazlarındaki görüntüsünü gizler. Dolayısıyla Dronlar, Kurşun Geçirmez Kameralar, Kem Gözler ve diğer cihazlar, Nøkk haritada gizlice gezerken varlığını kaydedemez. Nøkk rakip operatörleri gizlice takip ederken ayak sesleri duyulmaz. Ama Nøkk'un adımları hızlandıkça çıkardığı seslerde belirginleşir.",
            role: 'ROL:',
            operatorRole: ' Kuşat, İstihbarat Reddi',
            health: 'SAĞLIK:',
            operatorHealth: ' ✓ ✓ x',
            speed: 'HIZ:',
            operatorSpeed: ' ✓ ✓ x',
            primaryWeapon: 'BİRİNCİL SİLAH:',
            operatorPrimaryWeapon: ' FMG-9 HAFİF MAKİNELİ TÜFEK VEYA SIX12 SD YİVSİZ TÜFEK',
            secondaryWeapon: 'İKİNCİL SİLAH:',
            operatorSecondaryWeapon: ' 5.7 USG VEYA D-50 TABANCA',
            device: 'CİHAZ:',
            operatorDevice: ' SERT PATLATICI VEYA EL BOMBASI',
            specialAbility: 'ÖZEL KABİLİYET:',
            operatorSpecialAbility: ' HEL VARLIK AZALTMA',
            operatorDetailButton: "Resmi Sayfada İncele"
        };
    }
    ngOnInit() {
    }
}
Operators2Component.ɵfac = function Operators2Component_Factory(t) { return new (t || Operators2Component)(); };
Operators2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: Operators2Component, selectors: [["app-operators2"]], inputs: { operators2Component: "operators2Component" }, decls: 26, vars: 10, consts: [[1, "background-g"], [1, "page-title", "text-center", "op-font", "text-light"], [1, "page-description", "text-center", "op-font", "text-light"], [1, "cards"], [1, "row"], [1, "col-12", "col-md-4", "col-lg-3", 2, "width", "28rem"], [3, "melusiOperator"], [3, "oryxOperator"], [3, "ianaOperator"], [3, "wamaiOperator"], [3, "kaliOperator"], [3, "amaruOperator"], [3, "goyoOperator"], [3, "nokkOperator"], ["role", "toolbar", "aria-label", "Toolbar with button groups", 1, "btn-toolbar", "d-flex", "justify-content-center"]], template: function Operators2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "main", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "app-melusi", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "app-oryx", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "app-iana", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "app-wamai", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "app-kali", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "app-amaru", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "app-goyo", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "app-nokk", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "app-operatorsfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.pageTitle.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.pageTitle.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("melusiOperator", ctx.melusiOperator);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("oryxOperator", ctx.oryxOperator);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ianaOperator", ctx.ianaOperator);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("wamaiOperator", ctx.wamaiOperator);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("kaliOperator", ctx.kaliOperator);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("amaruOperator", ctx.amaruOperator);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("goyoOperator", ctx.goyoOperator);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nokkOperator", ctx.nokkOperator);
    } }, directives: [_melusi_melusi_component__WEBPACK_IMPORTED_MODULE_0__.MelusiComponent, _oryx_oryx_component__WEBPACK_IMPORTED_MODULE_1__.OryxComponent, _iana_iana_component__WEBPACK_IMPORTED_MODULE_2__.IanaComponent, _wamai_wamai_component__WEBPACK_IMPORTED_MODULE_3__.WamaiComponent, _kali_kali_component__WEBPACK_IMPORTED_MODULE_4__.KaliComponent, _amaru_amaru_component__WEBPACK_IMPORTED_MODULE_5__.AmaruComponent, _goyo_goyo_component__WEBPACK_IMPORTED_MODULE_6__.GoyoComponent, _nokk_nokk_component__WEBPACK_IMPORTED_MODULE_7__.NokkComponent, _operatorsfooter_operatorsfooter_component__WEBPACK_IMPORTED_MODULE_8__.OperatorsfooterComponent], styles: [".card-item[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.link-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.link-none[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.op-font[_ngcontent-%COMP%] {\n  font-family: Roboto Condensed, sans-serif;\n}\n\n.background-g[_ngcontent-%COMP%] {\n  background-image: url(\"/../assets/images/background.png\");\n  background-size: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdG9yczIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBRUkscUJBQUE7QUFBSjs7QUFESTtFQUFJLGNBQUE7QUFJUjs7QUFBQTtFQUNJLHlDQUFBO0FBR0o7O0FBQUE7RUFDSSx5REFBQTtFQUNBLHFCQUFBO0FBR0oiLCJmaWxlIjoib3BlcmF0b3JzMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWl0ZW17XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmxpbmstbm9uZXtcbiAgICBhIHsgY29sb3I6IGluaGVyaXQ7IH0gXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ub3AtZm9udHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZCxzYW5zLXNlcmlmO1xufVxuXG4uYmFja2dyb3VuZC1ne1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 1782:
/*!************************************************************************!*\
  !*** ./src/app/operators/operatorsfooter/operatorsfooter.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperatorsfooterComponent": () => (/* binding */ OperatorsfooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class OperatorsfooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
OperatorsfooterComponent.ɵfac = function OperatorsfooterComponent_Factory(t) { return new (t || OperatorsfooterComponent)(); };
OperatorsfooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OperatorsfooterComponent, selectors: [["app-operatorsfooter"]], decls: 8, vars: 0, consts: [["role", "group", "aria-label", "First group", 1, "btn-group", "me-2"], ["href", "operators"], ["type", "button", 1, "btn", "btn-primary", "link-none", "op-font", "text-light"], ["href", "operators2"]], template: function OperatorsfooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3)(6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".link-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.link-none[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.op-font[_ngcontent-%COMP%] {\n  font-family: Roboto Condensed, sans-serif;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdG9yc2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFCQUFBO0FBQUo7QUFESTtFQUFJLGNBQUE7QUFJUjtBQUFBO0VBQ0kseUNBQUE7QUFHSjtBQUFBO0VBQ0kscUJBQUE7QUFHSiIsImZpbGUiOiJvcGVyYXRvcnNmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluay1ub25le1xuICAgIGEgeyBjb2xvcjogaW5oZXJpdDsgfSBcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5vcC1mb250e1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gQ29uZGVuc2VkLHNhbnMtc2VyaWY7XG59XG5cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"] });


/***/ }),

/***/ 7840:
/*!**************************************************!*\
  !*** ./src/app/operators/oryx/oryx.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OryxComponent": () => (/* binding */ OryxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 1961);


class OryxComponent {
    constructor() { }
    ngOnInit() {
    }
}
OryxComponent.ɵfac = function OryxComponent_Factory(t) { return new (t || OryxComponent)(); };
OryxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OryxComponent, selectors: [["app-oryx"]], inputs: { oryxOperator: "oryxOperator" }, decls: 51, vars: 19, consts: [[1, "card-item", "bg-transparent", "border", "border-light"], [1, "d-flex", "justify-content-center"], [1, "text-center", "op-font", "text-light"], [1, "op-font", "text-light"], ["src", "assets/images/oryx_card.png", "alt", "...", 1, "img-thumbnail", "rounded", "mx-auto", "d-block"], ["src", "assets/images/oryx.png", "alt", "oryx", 1, "rounded", "mx-auto", "d-block", 2, "width", "5rem"], [1, "list-group", "border", "border-light"], [1, "list-group-item", "bg-transparent", "op-font", "text-light", "border", "border-light"], [1, "col", "text-center"], ["href", "https://www.ubisoft.com/tr-tr/game/rainbow-six/siege/game-info/operators/oryx"], [1, "btn", "btn-primary", "op-font", "text-light", "link-none"]], template: function OryxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header", 1)(2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4)(8, "br")(9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 2)(11, "strong")(12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 6)(18, "li", 7)(19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7)(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7)(28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7)(32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 7)(36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 7)(40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 7)(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8)(48, "a", 9)(49, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.playSide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.playStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.operatorRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.health);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.operatorHealth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.speed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.operatorSpeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.primaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.operatorPrimaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.secondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.operatorSecondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.device);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.operatorDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.specialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.operatorSpecialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.oryxOperator.operatorDetailButton);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent], styles: [".card-item[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.link-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.link-none[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.op-font[_ngcontent-%COMP%] {\n  font-family: Roboto Condensed, sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yeXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBRUkscUJBQUE7QUFBSjs7QUFESTtFQUFJLGNBQUE7QUFJUjs7QUFBQTtFQUNJLHlDQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtBQUdKIiwiZmlsZSI6Im9yeXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pdGVte1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5saW5rLW5vbmV7XG4gICAgYSB7IGNvbG9yOiBpbmhlcml0OyB9IFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm9wLWZvbnR7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBDb25kZW5zZWQsc2Fucy1zZXJpZjtcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"] });


/***/ }),

/***/ 1364:
/*!****************************************************!*\
  !*** ./src/app/operators/wamai/wamai.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WamaiComponent": () => (/* binding */ WamaiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 1961);


class WamaiComponent {
    constructor() { }
    ngOnInit() {
    }
}
WamaiComponent.ɵfac = function WamaiComponent_Factory(t) { return new (t || WamaiComponent)(); };
WamaiComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WamaiComponent, selectors: [["app-wamai"]], inputs: { wamaiOperator: "wamaiOperator" }, decls: 51, vars: 19, consts: [[1, "card-item", "bg-transparent", "border", "border-light"], [1, "d-flex", "justify-content-center"], [1, "text-center", "op-font", "text-light"], [1, "op-font", "text-light"], ["src", "assets/images/wamai_card.png", "alt", "...", 1, "img-thumbnail", "rounded", "mx-auto", "d-block"], ["src", "assets/images/wamai.png", "alt", "wamai", 1, "rounded", "mx-auto", "d-block", 2, "width", "5rem"], [1, "list-group", "border", "border-light"], [1, "list-group-item", "bg-transparent", "op-font", "text-light", "border", "border-light"], [1, "col", "text-center"], ["href", "https://www.ubisoft.com/tr-tr/game/rainbow-six/siege/game-info/operators/wamai"], [1, "btn", "btn-primary", "op-font", "text-light", "link-none"]], template: function WamaiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header", 1)(2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4)(8, "br")(9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 2)(11, "strong")(12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 6)(18, "li", 7)(19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7)(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7)(28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7)(32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 7)(36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 7)(40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 7)(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8)(48, "a", 9)(49, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.playSide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.playStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.operatorRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.health);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.operatorHealth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.speed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.operatorSpeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.primaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.operatorPrimaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.secondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.operatorSecondaryWeapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.device);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.operatorDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.specialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.operatorSpecialAbility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wamaiOperator.operatorDetailButton);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent], styles: [".card-item[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.link-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.link-none[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.op-font[_ngcontent-%COMP%] {\n  font-family: Roboto Condensed, sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbWFpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUVJLHFCQUFBO0FBQUo7O0FBREk7RUFBSSxjQUFBO0FBSVI7O0FBQUE7RUFDSSx5Q0FBQTtBQUdKOztBQUFBO0VBQ0kscUJBQUE7QUFHSiIsImZpbGUiOiJ3YW1haS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWl0ZW17XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmxpbmstbm9uZXtcbiAgICBhIHsgY29sb3I6IGluaGVyaXQ7IH0gXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ub3AtZm9udHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZCxzYW5zLXNlcmlmO1xufVxuXG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8202), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map