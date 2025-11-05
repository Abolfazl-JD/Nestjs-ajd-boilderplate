import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { User } from "./entity/users.entity";
import { BaseRepository } from "src/common";

@Injectable()
export class UsersRepository extends BaseRepository<User> {
    constructor(dataSource: DataSource) {
        super(dataSource, User);
    }
}
