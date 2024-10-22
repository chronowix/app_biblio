// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';  // Import User entity

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',  // You can replace this with your preferred database type
            database: 'db.sqlite',  // SQLite file
            entities: [User],  // Include the User entity
            synchronize: true, // Automatically synchronize the database schema
        }),
        AuthModule,
        UsersModule,
    ],
})
export class AppModule {}
