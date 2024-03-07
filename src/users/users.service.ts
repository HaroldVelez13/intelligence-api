import { Injectable } from '@nestjs/common';
import { IUser } from 'src/users/users.interface';

export type User = IUser;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'password',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'password',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
