
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Importing User entity
  providers: [UsersService],
  exports: [UsersService], // Exporting UsersService for other modules
})
export class UsersModule {}
