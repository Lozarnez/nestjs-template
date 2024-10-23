import { bigint, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

import { users } from './user.schema';

export const posts = mysqlTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar({ length: 255 }),
  content: varchar({ length: 255 }),
  authorId: bigint('user_id', { mode: 'number', unsigned: true }).references(
    () => users.id,
  ),
});
