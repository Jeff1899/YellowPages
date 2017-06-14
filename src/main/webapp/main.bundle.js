webpackJsonp([1,4],{

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InformationComponent = (function () {
    function InformationComponent(http) {
        this.http = http;
        this.kvArray = [['heartrate', ''], ['humidity', ''], ['object_temp', ''], ['light', ''], ['ambient_temp', ''], ['air_pressure', '']];
    }
    InformationComponent.prototype.ngOnInit = function () {
        this.sensorDataForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            'heartrate': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](''),
            'humidity': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](''),
            'object_temp': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](''),
            'light': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](''),
            'ambient_temp': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](''),
            'air_pressure': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]('')
        });
        this.getSensorDate();
    };
    InformationComponent.prototype.getSensorDate = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].interval(2000)
            .switchMap(function () { return _this.http.get('https://w4pfronti.mybluemix.net/sensordata'); }).map(function (data) { return data; })
            .subscribe(function (data) {
            _this.kvArray['heartrate'] = data.json().heartrate;
            _this.kvArray['humidity'] = data.json().humidity;
            _this.kvArray['object_temp'] = data.json().object_temp;
            _this.kvArray['light'] = data.json().light;
            _this.kvArray['ambient_temp'] = data.json().ambient_temp;
            _this.kvArray['air_pressure'] = data.json().air_pressure;
            console.log(data.text());
        });
    };
    InformationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-information',
            template: __webpack_require__(710),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], InformationComponent);
    return InformationComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Jeff/Downloads/demo/frontend/src/information.component.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-landing-page',
            template: __webpack_require__(711),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());
//# sourceMappingURL=C:/Users/Jeff/Downloads/demo/frontend/src/landing-page.component.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitoringComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MonitoringComponent = (function () {
    function MonitoringComponent(http) {
        this.http = http;
        this.title = 'http://i.imgur.com/5NK0H1e.jpg';
    }
    MonitoringComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].interval(2000)
            .switchMap(function () { return _this.http.get('https://w4pfronti.mybluemix.net/image'); }).map(function (data) { return data; })
            .subscribe(function (data) {
            _this.title = data.json().image;
        });
    };
    MonitoringComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-monitoring',
            template: __webpack_require__(712),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], MonitoringComponent);
    return MonitoringComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Jeff/Downloads/demo/frontend/src/monitoring.component.js.map

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 430;


/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(549);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Jeff/Downloads/demo/frontend/src/main.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'http://i.imgur.com/5NK0H1e.jpg';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(709),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Jeff/Downloads/demo/frontend/src/app.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landing_page_monitoring_monitoring_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landing_page_information_information_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__landing_page_landing_page_component__ = __webpack_require__(361);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__landing_page_monitoring_monitoring_component__["a" /* MonitoringComponent */],
                __WEBPACK_IMPORTED_MODULE_6__landing_page_information_information_component__["a" /* InformationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__landing_page_landing_page_component__["a" /* LandingPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Jeff/Downloads/demo/frontend/src/app.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_page_monitoring_monitoring_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_page_information_information_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_page_landing_page_component__ = __webpack_require__(361);
/* unused harmony export APP_ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var APP_ROUTES = [
    { path: '', redirectTo: '/landingPage', pathMatch: 'full' },
    { path: 'landingPage', component: __WEBPACK_IMPORTED_MODULE_3__landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    { path: 'monitoring', component: __WEBPACK_IMPORTED_MODULE_1__landing_page_monitoring_monitoring_component__["a" /* MonitoringComponent */] },
    { path: 'informationen', component: __WEBPACK_IMPORTED_MODULE_2__landing_page_information_information_component__["a" /* InformationComponent */], }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=C:/Users/Jeff/Downloads/demo/frontend/src/app.routing.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Jeff/Downloads/demo/frontend/src/environment.js.map

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "html,body{\n  margin:0;\n  height:100%;\n  overflow:hidden;\n}\nimg{\n  min-height:100%;\n  min-width:100%;\n  height:auto;\n  width:auto;\n  position:absolute;\n  top:-100%; bottom:-100%;\n  left:-100%; right:-100%;\n  margin:auto;\n}\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead class=\"thead-inverse table-striped\">\n  <tr>\n    <th>Eigenschaft</th>\n    <th>Werte</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <td>Herzschlag</td>\n    <td>{{kvArray['heartrate']}}</td>\n  </tr>\n  <tr>\n    <td>Luftfeuchtigkeit</td>\n    <td>{{kvArray['humidity']}}</td>\n  </tr>\n  <tr>\n    <td>Device Temperatur</td>\n    <td>{{kvArray['object_temp']}} °C</td>\n  </tr>\n  <tr>\n    <td>Licht</td>\n    <td>{{kvArray['light']}}</td>\n  </tr>\n  <tr>\n    <td>Raum Temperatur</td>\n    <td>{{kvArray['ambient_temp']}} °C</td>\n  </tr>\n  <tr>\n    <td>Luftdruck</td>\n    <td>{{kvArray['air_pressure']}}</td>\n  </tr>\n  </tbody>\n\n</table>\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" [routerLink]=\"['/monitoring']\">Monitoring</button>\n<button class=\"btn btn-primary\" [routerLink]=\"['/informationen']\">Informationen</button>\n\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<img src={{title}} style='position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:-1;'>\n"

/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(431);


/***/ })

},[982]);
//# sourceMappingURL=main.bundle.map