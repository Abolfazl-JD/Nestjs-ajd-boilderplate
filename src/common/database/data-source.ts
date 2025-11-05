import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

export const appDataSource = TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) =>
        ({
            type: configService.get<string>("DB_TYPE"),
            host: configService.get<string>("DB_HOST"),
            port: configService.get<number>("DB_PORT"),
            username: configService.get<string>("DB_USER"),
            password: configService.get<string>("DB_PASSWORD"),
            database: configService.get<string>("DB_DATABASE"),
            autoLoadEntities: true,
            synchronize:
                configService.get<string>("NODE_ENV") === "development",
        }) as TypeOrmModuleOptions,
    inject: [ConfigService],
});
