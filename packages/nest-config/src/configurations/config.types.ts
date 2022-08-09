import { AppConfig } from "./app.config";
import { AuthConfig } from "./auth.config";
export type AllConfigs = AppConfig & AuthConfig;

export type ConfigGenericTypeUnion = AppConfig | AuthConfig;
