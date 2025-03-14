import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Roles } from 'src/enums';

export class RegisterDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty({ message: 'name cannot be empty' })
  firstName: string;

  @IsString()
  @MinLength(3)
  @IsNotEmpty({ message: 'name cannot be empty' })
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty({ message: 'password cannot be empty' })
  password: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsEnum(Roles)
  @IsNotEmpty({ message: 'role must be provided' })
  role: Roles;
}
