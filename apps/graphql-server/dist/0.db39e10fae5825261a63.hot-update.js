"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 3:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(4);
const app_module_1 = __webpack_require__(5);
process.env.NEST_DEBUG = true;
const getApp = async () => {
    const app = await core_1.NestFactory.create(app_module_1.GraphqlServerAppModule);
    app.use("/health", (req, res) => {
        return res.status(200).send();
    });
    return app;
};
async function bootstrap() {
    const app = await getApp();
    await app.listen(process.env.PORT ?? 3100);
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("443e4e67d3c6c10cf2f9")
/******/ })();
/******/ 
/******/ }
;