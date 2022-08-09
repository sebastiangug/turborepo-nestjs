import { Module } from "@nestjs/common";
import { MyConfigService } from "./config.service";

@Module({
  providers: [MyConfigService],
  exports: [MyConfigService],
})
export class MyConfigModule {}
