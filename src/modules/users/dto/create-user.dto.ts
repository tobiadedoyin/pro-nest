/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
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
}
