import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  loginUser(@Body() user: { name: string; password: string }) {
    return this.authService.login(user.name, user.password);
  }
}
