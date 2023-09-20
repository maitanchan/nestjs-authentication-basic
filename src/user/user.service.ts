import { Injectable } from '@nestjs/common';

export type User = {

  id: number
  name: string
  username: string
  password: string

}

@Injectable()
export class UserService {

  private readonly user: User[] = [

    {
      id: 1,
      name: 'Marius',
      username: 'marius',
      password: '123'
    },

    {
      id: 2,
      name: 'Mambo',
      username: 'mambo',
      password: '123'
    }

  ]

  async findOne(username: string): Promise<User | undefined> {

    return this.user.find(user => user.username === username)

  }

}
