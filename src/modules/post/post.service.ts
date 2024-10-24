import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { eq } from 'drizzle-orm';
import { Repository } from 'typeorm';

import { posts } from '@/drizzle/schema';
import { DrizzleService } from '@/modules/database/drizzle/drizzle.service';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    private drizzle: DrizzleService,
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    // return await this.drizzle.db
    //   .insert(posts)
    //   .values(createPostDto)
    //   .$returningId();
    return await this.postRepository.save(createPostDto);
  }

  async findAll() {
    return await this.drizzle.db.query.posts.findMany({
      with: {
        author: {
          with: {
            usersToGroups: {
              with: {
                group: true,
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return this.drizzle.db.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
      with: {
        author: {
          with: {
            usersToGroups: {
              with: {
                group: true,
              },
            },
          },
        },
      },
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    console.log(updatePostDto);
    return await this.drizzle.db
      .update(posts)
      .set({ title: 'NUEVO TITULO 01' })
      .where(eq(posts.id, id));
  }

  async remove(id: number) {
    return await this.drizzle.db.delete(posts).where(eq(posts.id, id));
  }
}
