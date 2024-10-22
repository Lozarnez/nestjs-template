import { mysqlTable, serial, int, json } from 'drizzle-orm/mysql-core';
import { users } from './user.schema';

export const profiles = mysqlTable('profiles', {
  id: serial('id').primaryKey(),
  metadata: json(),
  userId: int().references(() => users.id),
});