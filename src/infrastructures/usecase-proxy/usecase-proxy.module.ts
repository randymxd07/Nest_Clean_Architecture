import { DynamicModule, Module } from "@nestjs/common";
import { EnvironmentConfigModule } from "../config/enviroment-config/environment-config.module";
import { RepositoriesModule } from "../repositories/repository.module";
import { UserRepositoryOrm } from "../repositories/user.repository";
import { GetAllUserUseCases } from "src/applications/use_cases/user.usecase";
import { UseCaseProxy } from "./usecase-proxy";

@Module({
    imports: [EnvironmentConfigModule, RepositoriesModule],
})
export class UseCaseProxyModule {

    static GET_ALL_USERS_USE_CASE = 'getAllUsersUsecaseProxy';

    static register(): DynamicModule {
        return {
            module: UseCaseProxyModule,
            providers: [
                {
                    inject: [UserRepositoryOrm],
                    provide: UseCaseProxyModule.GET_ALL_USERS_USE_CASE,
                    useFactory: (userRepository: UserRepositoryOrm) => new UseCaseProxy(new GetAllUserUseCases(userRepository)),
                },
            ],
            exports: [UseCaseProxyModule.GET_ALL_USERS_USE_CASE],
        };
    }
    
}