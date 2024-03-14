import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './modules/admin/admin.module';
import { DatabaseModule } from './modules/database/database.module';

export default [ConfigModule.forRoot(), DatabaseModule, AdminModule];
