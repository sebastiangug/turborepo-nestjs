import { AppConfig } from "./configurations/app.config";
import { AuthConfig } from "./configurations/auth.config";
import {
  AllConfigs,
  ConfigGenericTypeUnion,
} from "./configurations/config.types";
const appConfig: AppConfig = new AppConfig();
const authConfig: AuthConfig = new AuthConfig();

const configs: AllConfigs = {
  ...appConfig,
  ...authConfig,
};

export const GetConfig =
  <T extends ConfigGenericTypeUnion>() =>
  <K extends keyof T>(key: K): T[K] => {
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

    return (configs as T)[key];
  };
