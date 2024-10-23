import { bigint, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

import { posts } from './post.schema';
import { users } from './user.schema';

export const comments = mysqlTable('comments', {
  id: serial('id').primaryKey(),
  content: varchar({ length: 255 }),
  postId: bigint('post_id', { mode: 'number', unsigned: true }).references(
    () => posts.id,
  ),
  authorId: bigint('user_id', { mode: 'number', unsigned: true }).references(
    () => users.id,
  ),
});
