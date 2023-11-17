import { Injectable } from "@nestjs/common";
import { TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist";
import { ConfigService } from '@nestjs/config';


@Injectable()
export class DbConfigService implements TypeOrmOptionsFactory{
   
    constructor(private configService: ConfigService) {}
    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: 'mysql',
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_NAME'),
            entities: [],
            synchronize: true,
        }
    }
}