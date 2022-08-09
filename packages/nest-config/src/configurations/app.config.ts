import { Environments } from "./environment.config";

export class AppConfig {
  public readonly CORS_ORIGINS: () => string[] | string = () => {
    switch (process.env.ENVIRONMENT as Environments) {
      case Environments.development:
        return this.DEV_CORS_ORIGINS;
      case Environments.staging:
        return this.STAGE_CORS_ORIGINS;
      case Environments.production:
        return this.PROD_CORS_ORIGINS;
      default:
        return this.DEFAULT_CORS_ORIGINS;
    }
  };

  public readonly DEV_CORS_ORIGINS: string[] = ["*"];
  public readonly STAGE_CORS_ORIGINS: string[] = [];
  public readonly PROD_CORS_ORIGINS: string[] = [];
  public readonly DEFAULT_CORS_ORIGINS: string[] = ["*"];
}
