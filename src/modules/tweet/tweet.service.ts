import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.services';

@Injectable()
export class TweetService {
  constructor(private userService: UsersService) {}
  tweets: { text: string; date: Date; userId: number }[] = [
    { text: 'Hello World!', date: new Date('2024-01-22'), userId: 1 },
    { text: 'I love NestJS!', date: new Date('2024-03-09'), userId: 2 },
    { text: 'How are you?', date: new Date('2024-01-11'), userId: 1 },
  ];

  getUserTweet() {}
}
