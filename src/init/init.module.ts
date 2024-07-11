import { Module } from '@nestjs/common';
import { AppController } from './init.controller';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from '../modules/admin/admin.module';
import { DatabaseModule } from '../modules/database/database.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, AdminModule],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
