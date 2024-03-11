import {
  IsString,
  IsEmail,
  IsEmpty,
  IsDefined,
  IsNotEmpty,
} from 'class-validator';

export class UserDTO {
  @IsString()
  @IsEmail()
  @IsDefined()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  username: string;
}

export class UserPramsDTO {
  @IsString()
  @IsEmail()
  @IsDefined()
  @IsEmpty()
  email: string;
}
