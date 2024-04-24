import { UserM } from "../models/user";

export interface UserRepository {
    getAllUsers(): Promise<UserM[]>;
}