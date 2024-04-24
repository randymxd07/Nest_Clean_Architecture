import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructures/config/enviroment-config/environment-config.module';
import { UserController } from './presentations/user/user.controller';
import { UserModule } from './presentations/user/user.module';
import { UseCaseProxyModule } from './infrastructures/usecase-proxy/usecase-proxy.module';

@Module({
  imports: [
    EnvironmentConfigModule, 
    UserModule,
    UseCaseProxyModule.register(),
  ],
  controllers: [UserController],
})
export class AppModule {}
