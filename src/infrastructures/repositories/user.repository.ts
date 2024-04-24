import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "src/domains/repositories/user.repository";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { UserM } from "src/domains/models/user";

@Injectable()
export class UserRepositoryOrm implements UserRepository {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async getAllUsers(): Promise<UserM[]> {
        const users = await this.userRepository.find();
        return users.map((user) => this.toUser(user));
    }

    private toUser(userEntity: User): UserM {
        const user: UserM = new UserM();
        user.id = userEntity.id;
        user.email = userEntity.email;
        user.name = userEntity.name;
        user.password = userEntity.password;
        user.created_at = userEntity.created_at;
        user.updated_at = userEntity.updated_at;
        return user;
    }
    
}