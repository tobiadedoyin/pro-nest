import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  users = [
    {
      id: 1,
      name: 'John',
      age: 28,
      gender: 'male',
      isMarried: false,
      password: '1123455',
    },
    {
      id: 2,
      name: 'kenny',
      age: 31,
      gender: 'male',
      isMarried: false,
      password: '1123455',
    },
    {
      id: 3,
      name: 'Anna',
      age: 24,
      gender: 'female',
      isMarried: false,
      password: '1123455',
    },
    {
      id: 4,
      name: 'Lisa',
      age: 27,
      gender: 'female',
      isMarried: true,
      password: '1123455',
    },
    {
      id: 5,
      name: 'Ben',
      age: 33,
      gender: 'male',
      isMarried: true,
      password: '1123455',
    },
  ];
  getAllUsers() {
    return this.users;
  }

  getUsersById(id: number) {
    const user = this.users.find((user) => user.id === id);
    console.log(user);
    if (user === undefined) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }
    return user;
  }

  createUser(user: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
    password: string;
  }) {
    return this.users.push(user);
  }
}
