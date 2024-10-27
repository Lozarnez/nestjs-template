import { Module } from '@nestjs/common';

// import { APP_PIPE } from '@nestjs/core';
import { DatabaseModule } from '@/modules/database/database.module';

import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PostController],
  providers: [
    PostService,
    // {
    //   provide: APP_PIPE,
    //   useValue: new ValidationPipe({
    //     whitelist: true,
    //     forbidNonWhitelisted: true,
    //     transform: true,
    //     transformOptions: { enableImplicitConversion: true },
    //   }),
    //   // useClass: ValidationPipe,
    // },
  ],
})
export class PostModule {}
