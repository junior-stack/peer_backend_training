import { Controller, Post, Get, UseGuards, Request, Req } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { LocalAuthGuard } from 'src/services/auth/localAuth.guard';
import { Request as Reqest } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    const message = req.user;
    return message;
  }

  @Get('/logout')
  logout(@Req() req: Reqest) {
    req.logOut();
    return 'log out';
  }
}
