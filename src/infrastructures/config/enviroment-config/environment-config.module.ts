import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from './enviroment-config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [EnvironmentConfigService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  exports: [EnvironmentConfigService],
})
export class EnvironmentConfigModule { }
