import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
  constructor(private tweetService: TweetService) {}

  @Get(':userId')
  public getUserTweet(@Param('userId', ParseIntPipe) userId: number) {
    console.log(userId);
    return this.tweetService.getUserTweet(userId);
  }
}
