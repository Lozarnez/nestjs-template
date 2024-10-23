import { bigint, json, mysqlTable, serial } from 'drizzle-orm/mysql-core';

import { users } from './user.schema';

export const profiles = mysqlTable('profiles', {
  id: serial('id').primaryKey(),
  metadata: json(),
  userId: bigint('user_id', { mode: 'number', unsigned: true }).references(
    () => users.id,
  ),
});
