import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { TweetModule } from "./tweet/tweet.module";

@Module({
  imports: [UsersModule, TweetModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
