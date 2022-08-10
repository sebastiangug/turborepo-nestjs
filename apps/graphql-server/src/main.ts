import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Request, Response } from "express";
import { GraphqlServerAppModule } from "./app.module";
declare const module: any;

const getApp = async (): Promise<INestApplication> => {
  const app = await NestFactory.create(GraphqlServerAppModule);

  app.use("/health", (req: Request, res: Response) => {
    return res.status(200).send();
  });

  return app;
};

async function bootstrap(): Promise<void> {
  const app = await getApp();
  await app.listen(process.env.PORT ?? 3100);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
