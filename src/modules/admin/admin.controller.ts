import {
  Body,
  Controller,
  Get,
  Res,
  UsePipes,
  ValidationPipe,
  Post,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignupDTO, SwaggerSchema } from 'src/modules/admin/common';
import { exceptionFactory } from 'src/utils';

@Controller('admin')
@ApiTags(`Admin Auth API's`)
export class AdminController {
  constructor(private readonly adminservice: AdminService) {}

  @Get('/')
  async getAdmin(@Res() res): Promise<any> {
    return res.json({ status: true });
  }

  @Post('/signup')
  @ApiOperation({ summary: 'Admin signup' })
  @ApiBody({ ...SwaggerSchema.SIGNUP })
  @ApiResponse({ status: 201, description: 'Success...' })
  @UsePipes(new ValidationPipe({ exceptionFactory }))
  async signup(@Body() body: SignupDTO, @Res() res): Promise<any> {
    const data = await this.adminservice.signup(body);
    return res.json({ data });
  }
}
