import { Module } from '@nestjs/common';

import { DatabaseModule } from '@/modules/database/database.module';

import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [DatabaseModule],
})
export class PostModule {}
