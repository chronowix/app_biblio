// auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module'; // Importing UsersModule
import { JwtStrategy } from './jwt.strategy';
import {AuthController} from "./auth.controller";

@Module({
  imports: [
    UsersModule, // Import UsersModule to access UsersService
    PassportModule,
    JwtModule.register({
      secret: 'secretKey', // Replace with a proper secret key in production
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
