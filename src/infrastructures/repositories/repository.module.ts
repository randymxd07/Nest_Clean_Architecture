import { Module } from "@nestjs/common";
import { TypeOrmConfigModule } from "../config/typeorm/typeorm.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { UserRepositoryOrm } from "./user.repository";

@Module({
    imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([User])],
    providers: [UserRepositoryOrm],
    exports: [UserRepositoryOrm],
})
export class RepositoriesModule {}