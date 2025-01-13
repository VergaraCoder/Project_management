import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:async(configService:ConfigService)=>({
        secret:configService.get<string>("JWT_SECRET")
      })
    }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtModule
  ],
  exports:[
    JwtModule
  ]
})
export class AuthModule {}