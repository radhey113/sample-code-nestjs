import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.servies';
import { User } from './user.types';
import { UserDTO, UserPramsDTO } from './datatransferobject/user.dto';
import { getReadableErrorMessage } from 'src/services/utils';

@Controller('/user')
export class UserController {
  users = [];
  constructor(private readonly userService: UserService) {}

  @Get('/list')
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get('/:email')
  getUser(@Param('email') email: string): User {
    return this.userService.getUser(email);
  }

  @Post('/add')
  @UsePipes(
    new ValidationPipe({
      exceptionFactory: (error: any) => {
        const err = getReadableErrorMessage(error[0].constraints);
        return new HttpException(err, HttpStatus.BAD_REQUEST);
      },
    }),
  )
  addUser(@Body() user: UserDTO): User[] {
    return this.userService.addUser(user);
  }

  @Delete('/remove/:email')
  @UsePipes(new ValidationPipe())
  removeUser(@Param() prams: UserPramsDTO): User[] {
    return this.userService.removeUser(prams.email);
  }

  @Delete('/removebyquery')
  removeUserByQueryString(@Query('email') eamil: string): User[] {
    return this.userService.removeUser(eamil);
  }
}
