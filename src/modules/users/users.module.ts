import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.services';
import { User } from '../../database/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [],
})
export class UsersModule {}
