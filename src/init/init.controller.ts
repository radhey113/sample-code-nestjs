import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('/')
export class AppController {
  constructor() {}

  @Get('/test')
  @ApiTags('Test')
  test(): string {
    return 'Running...';
  }
}
