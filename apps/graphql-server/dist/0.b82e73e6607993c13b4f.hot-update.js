"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 16:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RootResolver = void 0;
const graphql_1 = __webpack_require__(7);
const entities_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@myapp/entities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
let RootResolver = class RootResolver {
    getHealth() {
        return { status: "HEALTHY" };
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => entities_1.HealthResponse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof entities_1.HealthResponse !== "undefined" && entities_1.HealthResponse) === "function" ? _a : Object)
], RootResolver.prototype, "getHealth", null);
RootResolver = __decorate([
    (0, graphql_1.Resolver)()
], RootResolver);
exports.RootResolver = RootResolver;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c54d0d66d4012e22be27")
/******/ })();
/******/ 
/******/ }
;