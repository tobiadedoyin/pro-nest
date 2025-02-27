import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.services';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  login(name: string, password: string) {
    return 'mytoken________________________';
  }
}
