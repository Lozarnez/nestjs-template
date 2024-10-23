import { relations } from 'drizzle-orm';
import {
  bigint,
  index,
  mysqlTable,
  primaryKey,
  serial,
  varchar,
} from 'drizzle-orm/mysql-core';

import { users } from './user.schema';

export const groups = mysqlTable('groups', {
  id: serial('id').primaryKey(),
  name: varchar({ length: 255 }),
});

// JOIN Table for Many-to-Many Relationship
export const usersToGroups = mysqlTable(
  'users_to_groups',
  {
    userId: bigint('user_id', { mode: 'number', unsigned: true }).references(
      () => users.id,
    ),
    groupId: bigint('group_id', { mode: 'number', unsigned: true }).references(
      () => groups.id,
    ),
  },
  (table) => ({
    // Creating a composite primary key and an index
    pk: primaryKey({ columns: [table.userId, table.groupId] }),
    userIndex: index('user_index').on(table.userId),
  }),
);

export const usersToGroupsRelations = relations(usersToGroups, ({ one }) => ({
  user: one(users, {
    fields: [usersToGroups.userId],
    references: [users.id],
  }),
  group: one(groups, {
    fields: [usersToGroups.groupId],
    references: [groups.id],
  }),
}));
