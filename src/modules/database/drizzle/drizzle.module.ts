import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/mysql2';
import { createPool } from 'mysql2/promise';

import { DRIZZLE } from '@/drizzle/database-connection';
import * as schema from '@/drizzle/schema';
import { DrizzleDB } from '@/drizzle/types/drizzle';

import { DrizzleService } from './drizzle.service';

@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const databaseURL = configService.get<string>('DATABASE_URL');
        const pool = createPool(databaseURL);
        return drizzle(pool, { schema, mode: 'default' }) as DrizzleDB;
      },
    },
    DrizzleService,
  ],
  exports: [DrizzleService, DRIZZLE],
})
export class DrizzleModule {}
