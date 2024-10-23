import { Inject, Injectable } from '@nestjs/common';

import { DRIZZLE } from '@/drizzle/database-connection';
import { DrizzleDB } from '@/drizzle/types/drizzle';

@Injectable()
export class DrizzleService {
  constructor(@Inject(DRIZZLE) readonly db: DrizzleDB) {}
}
