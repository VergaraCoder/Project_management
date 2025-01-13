import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

interface ReturnToken{
  access_token:string,
  refresh_token:string
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  create(@Body() createAuthDto: CreateAuthDto):ReturnToken {
    return this.authService.create(createAuthDto);
  }
}