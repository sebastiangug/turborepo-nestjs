import { Injectable } from "@nestjs/common";
import { AppConfig } from "./configurations/app.config";
import { AuthConfig } from "./configurations/auth.config";
import {
  ConfigGenericTypeUnion,
  AllConfigs,
} from "./configurations/config.types";

@Injectable()
export class MyConfigService<T extends ConfigGenericTypeUnion> {
  protected readonly appConfig: AppConfig = new AppConfig();
  protected readonly authConfig: AuthConfig = new AuthConfig();

  private configs: AllConfigs = {
    ...this.appConfig,
    ...this.authConfig,
  };

  public get<K extends keyof T>(key: K): T[K] {
    // if a configuration was overwritten in the env, return that instead
    if (process.env[`CONFIG_${String(key)}`]) {
      let config = process.env[`CONFIG_${String(key)}`] as any;

      // we try to parse it in case it's an object or something
      try {
        config = JSON.parse(config);
      } catch (err) {
        // we don't do anything as it wasn't parsable
      }

      return config;
    }

    return this.configs[key as any];
  }
}
