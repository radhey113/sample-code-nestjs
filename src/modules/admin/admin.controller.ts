import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
  HttpException,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDocument } from './admin.schema';
import { getReadableErrorMessage } from '../../services/utils';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminservice: AdminService) {}

  @Get('/get-admin')
  async getAdmin(@Req() req, @Res() res): Promise<any> {
    const data = this.adminservice.getAdminUser();
    return res.json(data);
  }

  @Post('/create-admin')
  @UsePipes(
    new ValidationPipe({
      exceptionFactory: (error: any) => {
        const err = getReadableErrorMessage(error[0].constraints);
        return new HttpException(err, HttpStatus.BAD_REQUEST);
      },
    }),
  )
  async createAdmin(@Body() body, @Res() res): Promise<AdminDocument> {
    const data = await this.adminservice.createAdmin(body);
    return res.status(HttpStatus.CREATED).json(data);
  }
}
