import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {


    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {

        const user = await this.userService.findOne(username)

        if (user && user.password === password) {

            const { password, ...others } = user

            return others

        }

        return null

    }

    register() {

    }

    async login(user: any) {

        const payload = { name: user.name, sub: user.id }

        const token = this.jwtService.sign(payload)

        return { access_token: token }

    }

}
