import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { TweetModule } from './modules/tweet/tweet.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UsersModule, TweetModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
