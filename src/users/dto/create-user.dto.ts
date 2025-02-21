/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsInt()
  id: number;

  @IsString()
  @MinLength(3)
  @IsNotEmpty({ message: 'name cannot be empty' })
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsOptional()
  isMarried: boolean;
}
