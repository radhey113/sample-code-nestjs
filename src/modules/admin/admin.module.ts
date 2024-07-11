import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { ConfigService } from '@nestjs/config';
import ModuleLoad from 'src/schemas';

@Module({
  imports: [ModuleLoad.Admin],
  controllers: [AdminController],
  providers: [AdminService, ConfigService],
})
export class AdminModule {}
