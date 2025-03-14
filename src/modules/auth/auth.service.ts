import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../database/entity/user.entity';
import { hashPassword, verifyPassword } from '../../utility/hashing.util';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  // User Registration (/auth/register) - Creating a new user account
  public async registerUser(user: RegisterDto): Promise<object> {
    const existingUser = await this.userRepository.findOne({
      where: { email: user.email },
    });

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await hashPassword(user.password);

    const newUser = this.userRepository.create({
      ...user,
      password: hashedPassword,
    });

    try {
      const savedUser = await this.userRepository.save(newUser);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userData } = savedUser;
      return userData;
    } catch (err) {
      console.error(err);
      throw new Error('Error registering user');
    }
  }
  // User Login (/auth/login) - Authenticating users and issuing JWT tokens
  public async loginUser(user: LoginDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: user.email },
    });

    if (!existingUser) {
      throw new NotFoundException('Invalid credentials');
    }

    const isValidPassword = await verifyPassword(
      user.password,
      existingUser.password,
    );

    if (!isValidPassword) {
      throw new BadRequestException('Invalid credentials');
    }

    const payload = {
      email: existingUser.email,
      role: existingUser.role,
      sub: existingUser.user_id,
    };
    const token = this.jwtService.sign(payload, { expiresIn: '1h' });

    return {
      accessToken: token,
      user: { id: existingUser.user_id, email: existingUser.email },
    };
  }
  // Token Refresh (/auth/refresh) - Refreshing expired JWT tokens
  // Password Reset (/auth/reset-password) - Handling password resets
  // User Logout (/auth/logout) - Invalidating a user session
  //  Me (/auth/me) - Fetching authenticated user details
}
