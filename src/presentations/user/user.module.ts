import { Module } from '@nestjs/common';
import { UseCaseProxyModule } from 'src/infrastructures/usecase-proxy/usecase-proxy.module';
import { UserController } from './user.controller';

@Module({
    imports: [UseCaseProxyModule.register()],
    controllers: [UserController],
})
export class UserModule {}
