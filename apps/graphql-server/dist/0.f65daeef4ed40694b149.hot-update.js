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
let RootResolver = class RootResolver {
    getHealth() {
        return { status: "HEALTHY" };
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => HealthResponse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof HealthResponse !== "undefined" && HealthResponse) === "function" ? _a : Object)
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
/******/ 	__webpack_require__.h = () => ("655e72088807e6cbf9c9")
/******/ })();
/******/ 
/******/ }
;