import { Module } from '@nestjs/common';

import { DrizzleModule } from '@/modules/database/drizzle/drizzle.module';
import { DrizzleService } from '@/modules/database/drizzle/drizzle.service';

import { MysqlTypeOrmModule } from './typeOrm/typeOrm.module';

@Module({
  imports: [DrizzleModule, MysqlTypeOrmModule],
  providers: [DrizzleService],
  exports: [DrizzleModule, DrizzleService, MysqlTypeOrmModule],
})
export class DatabaseModule {}
