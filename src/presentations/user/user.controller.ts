import { Controller, Get, Inject } from '@nestjs/common';
import { GetAllUserUseCases } from 'src/applications/use_cases/user.usecase';
import { UseCaseProxy } from 'src/infrastructures/usecase-proxy/usecase-proxy';
import { UseCaseProxyModule } from 'src/infrastructures/usecase-proxy/usecase-proxy.module';

@Controller('users')
export class UserController {

    constructor(
        @Inject(UseCaseProxyModule.GET_ALL_USERS_USE_CASE)
        private readonly getUserUsecaseProxy: UseCaseProxy<GetAllUserUseCases>,
    ) { }

    @Get('')
    async getAllUsers() {
        const result = await this.getUserUsecaseProxy.getInstance().execute();
        return {
            status: 'OK',
            code: 200,
            message: 'Get data success',
            data: result,
        };
    }

}
