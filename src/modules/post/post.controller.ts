import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { IdParamDto } from './dto/idParam.dto';
import { UpdatePostDto } from './dto/update-post.dto';
// import { ParseIdPipe } from './pipes/parseIdPipe';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(
    @Body()
    createPostDto: CreatePostDto,
  ) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }

  @Get('author/:id')
  findByAuthor(
    // @Param('id', ParseIntPipe) param: IdParamDto,
    @Param() { id }: IdParamDto,
    // @Param('id', ParseIdPipe) id: number,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ) {
    return {
      id: { id, type: typeof id },
      sort: { sort, type: typeof sort },
    };
  }
}
