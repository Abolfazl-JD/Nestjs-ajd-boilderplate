import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { appDataSource, MutexModule } from "./common";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        appDataSource,
        AuthModule,
        UsersModule,
        MutexModule,
    ],
})
export class AppModule {}
