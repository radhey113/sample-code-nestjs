import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { trim } from 'lodash';

/**
 * Signup DTO
 */
export class SignupDTO {
  @IsString({ message: 'Firstname must be of type string.' })
  @IsDefined({ message: 'Firstname cannot be empty.' })
  @IsNotEmpty({ message: 'Firstname cannot be empty.' })
  firstName: string;

  @IsString({ message: 'Lastname must be of type string.' })
  @IsDefined({ message: 'Lastname cannot be empty.' })
  @IsNotEmpty({ message: 'Lastname cannot be empty.' })
  lastName: string;

  @IsString({ message: 'Password must be of type string.' })
  @IsDefined({ message: 'Password cannot be empty.' })
  @IsNotEmpty({ message: 'Password cannot be empty.' })
  password: string;

  @IsString({ message: 'Email must be of type string.' })
  @IsDefined({ message: 'Email cannot be empty.' })
  @IsEmail({}, { message: 'The email format is incorrect.' })
  @IsNotEmpty({ message: 'Email cannot be empty.' })
  @Transform((param) => trim(param.value).toLowerCase())
  email: string;
}
