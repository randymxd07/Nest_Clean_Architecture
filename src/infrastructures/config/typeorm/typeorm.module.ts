import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { EnvironmentConfigService } from "../enviroment-config/enviroment-config.service";
import { Module } from "@nestjs/common";
import { EnvironmentConfigModule } from "../enviroment-config/environment-config.module";

export const getTypeOrmModuleOptions = (config: EnvironmentConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    synchronize: config.getDatabaseSync(),
    autoLoadEntities: config.getDatabaseAutoLoadEntities(),
} as TypeOrmModuleOptions);

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [EnvironmentConfigModule],
            inject: [EnvironmentConfigService],
            useFactory: getTypeOrmModuleOptions,
        }),
    ],
})
export class TypeOrmConfigModule {}