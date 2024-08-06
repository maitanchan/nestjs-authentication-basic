import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('register')
    register() {

        return this.authService.register()

    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req: any) {

        return this.authService.login(req.user)

    }

    @UseGuards(JwtAuthGuard)
    @Get('protected')
    getHello(@Request() req: any) {

        return req.user

    }

}
