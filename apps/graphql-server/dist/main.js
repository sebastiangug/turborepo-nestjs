"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viteNodeApp = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const getApp = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use('/health', (req, res) => {
        return res.status(200).send();
    });
    return app;
};
async function bootstrap() {
    const app = await getApp();
    await app.listen(3100);
}
bootstrap();
exports.viteNodeApp = getApp();
//# sourceMappingURL=main.js.map