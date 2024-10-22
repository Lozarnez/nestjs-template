import 'dotenv/config';

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './migrations',
  schema: './src/drizzle/schema/**.schema.ts',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  migrations: {
    table: 'drizzle_migrations',
  },
});
