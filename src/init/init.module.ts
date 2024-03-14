import { Module } from '@nestjs/common';
import { AppController } from './init.controller';
import Modules from '../modules';

@Module({
  imports: Modules,
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
