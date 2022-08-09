"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlServerAppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const nest_config_1 = require("@myapp/nest-config");
const apollo_1 = require("@nestjs/apollo");
const root_resolver_1 = require("./resolvers/root.resolver");
let GraphqlServerAppModule = class GraphqlServerAppModule {
};
GraphqlServerAppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nest_config_1.MyConfigModule,
            graphql_1.GraphQLModule.forRootAsync({
                driver: apollo_1.ApolloDriver,
                imports: [nest_config_1.MyConfigModule],
                useFactory: (configService) => {
                    const config = {
                        debug: true,
                        playground: true,
                        autoSchemaFile: "schema.gql",
                        sortSchema: true,
                    };
                    const origins = configService.get("CORS_ORIGINS")();
                    config.cors = { origin: origins, credentials: true };
                    config.path = "/graphql";
                    return config;
                },
                inject: [nest_config_1.MyConfigService],
            }),
        ],
        controllers: [],
        providers: [root_resolver_1.RootResolver],
    })
], GraphqlServerAppModule);
exports.GraphqlServerAppModule = GraphqlServerAppModule;
//# sourceMappingURL=app.module.js.map