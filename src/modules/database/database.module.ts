import { Module } from '@nestjs/common';

import { DrizzleModule } from '@/modules/database/drizzle/drizzle.module';
import { DrizzleService } from '@/modules/database/drizzle/drizzle.service';

@Module({
  imports: [DrizzleModule],
  providers: [DrizzleService],
  exports: [DrizzleModule, DrizzleService],
})
export class DatabaseModule {}
