import { IsNumber, IsString, Length } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @Length(5, 30, {
    groups: ['create'],
    message: 'Title must be between 5 and 30 characters',
  })
  @Length(2, 30, {
    groups: ['update'],
    message: 'Title must be between 2 and 30 characters',
  })
  title: string;

  @IsString()
  content: string;

  @IsNumber()
  authorId: number;
}
