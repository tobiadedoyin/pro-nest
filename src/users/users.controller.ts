import {
  Controller,
  Get,
  Query,
  Param,
  ParseIntPipe,
  DefaultValuePipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.services';

@Controller('users')
export class UsersController {
  userService: UsersService;
  constructor() {
    this.userService = new UsersService();
  }

  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log('limit', limit, page);
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUsersById(id);
  }

  @Post()
  createUser(user: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }) {
    console.log(user);
    return 'new user created';
  }
}
