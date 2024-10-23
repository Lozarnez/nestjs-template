import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '@/modules/database/database.module';

import { PostModule } from './modules/post/post.module';

@Module({
  imports: [
    DatabaseModule,
    PostModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
