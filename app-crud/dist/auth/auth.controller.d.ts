import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
export declare class AuthController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(req: any): Promise<{
        access_token: string;
    } | {
        message: string;
    }>;
    register(req: any): Promise<import("../users/user.entity").User>;
}
