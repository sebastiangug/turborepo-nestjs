import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AppConfig, MyConfigModule, MyConfigService } from "@myapp/nest-config";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { RootResolver } from "./resolvers/root.resolver";

@Module({
  imports: [
    MyConfigModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [MyConfigModule],
      useFactory: (configService: MyConfigService<AppConfig>) => {
        const config: ApolloDriverConfig = {
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
      inject: [MyConfigService],
    }),
  ],
  controllers: [],
  providers: [RootResolver],
})
export class GraphqlServerAppModule {}
