import {
  Controller,
  Get,
  Query,
  Param,
  ParseIntPipe,
  DefaultValuePipe,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.services';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserParamDto } from './dto/get-user-para.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':isMarried')
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Param() param: GetUserParamDto,
  ) {
    console.log('isMarried', param);
    console.log('limit', limit, page);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.userService.getUsersById();
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    console.log(typeof user);
    console.log(user instanceof CreateUserDto);
    return 'new user created';
  }

  @Patch()
  updateUser(@Body() user: UpdateUserDto) {
    console.log(user);
    return 'user updated successfully';
  }
}
