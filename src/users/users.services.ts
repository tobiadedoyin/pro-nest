import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users = [
    {
      id: 1,
      name: 'John',
      email: 'john@email.com',
      age: 28,
      gender: 'male',
      isMarried: false,
    },
    { id: 2, name: 'kenny', age: 31, gender: 'male', isMarried: false },
    { id: 3, name: 'Anna', age: 24, gender: 'female', isMarried: false },
    { id: 4, name: 'Lisa', age: 27, gender: 'female', isMarried: true },
    { id: 5, name: 'Ben', age: 33, gender: 'male', isMarried: true },
  ];
  getAllUsers() {
    return this.users;
  }

  getUsersById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }) {
    return this.users.push(user);
  }
}
