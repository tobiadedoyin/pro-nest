import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.services';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  login(name: string, password: string) {
    const user = this.userService.users.find(
      (x) => x.name === name && x.password === password,
    );
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return 'mytoken________________________';
  }
}
