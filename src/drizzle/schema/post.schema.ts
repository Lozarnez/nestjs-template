import { relations } from 'drizzle-orm';
import { bigint, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

import { comments } from './comment.schema';
import { users } from './user.schema';

export const posts = mysqlTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar({ length: 255 }),
  content: varchar({ length: 255 }),
  authorId: bigint('user_id', { mode: 'number', unsigned: true }).references(
    () => users.id,
  ),
});

export const postRelations = relations(posts, ({ one, many }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
  comments: many(comments),
}));
