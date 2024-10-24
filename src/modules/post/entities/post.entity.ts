import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// import { Comment } from './comment.entity';
// import { User } from './user.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  content: string;

  // @ManyToOne(() => User, (user) => user.posts)
  // author: User;

  // @OneToMany(() => Comment, (comment) => comment.post)
  // comments: Comment[];
}
