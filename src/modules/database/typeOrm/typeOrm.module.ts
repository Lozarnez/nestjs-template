import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Post } from '../../post/entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        url: configService.get<string>('DATABASE_URL'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
        autoLoadEntities: true,
      }),
    }),
    TypeOrmModule.forFeature([Post]),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class MysqlTypeOrmModule {}
