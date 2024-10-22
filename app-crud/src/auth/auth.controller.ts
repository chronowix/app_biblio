// auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService,
    ) {}

    @Post('login')
    async login(@Body() req) {
        const user = await this.authService.validateUser(req.username, req.password);
        if (user) {
            return this.authService.login(user);
        }
        return { message: 'Invalid credentials' };
    }

    @Post('register')
    async register(@Body() req) {
        return this.usersService.create(req);
    }
}
