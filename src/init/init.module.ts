import { Module } from '@nestjs/common';
import { AppController } from './init.controller';
import { AppService } from './init.service';
import Modules from '../modules';

@Module({
  imports: Modules,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
