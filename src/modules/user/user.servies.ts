import { Injectable } from '@nestjs/common';
import { User } from './user.types';

@Injectable()
export class UserService {
  users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): User[] {
    this.users.push(user);
    return this.users;
  }

  getUser(email): User {
    return this.users.filter((u) => u.email === email)[0];
  }

  removeUser(email): User[] {
    const remainingUsers = this.users.filter((u) => u.email !== email);
    this.users = remainingUsers;
    return remainingUsers;
  }
}
