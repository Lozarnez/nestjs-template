import { relations } from 'drizzle-orm';
import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

import { comments } from './comment.schema';
import { usersToGroups } from './group.schema';
import { posts } from './post.schema';
import { profiles } from './profile.schema';

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
});

export const userRelations = relations(users, ({ one, many }) => ({
  comments: many(comments),
  posts: many(posts),
  profile: one(profiles), // Does not require a field reference because it is alraedy defined in the profile schema (profile.userId)
  usersToGroups: many(usersToGroups),
}));
