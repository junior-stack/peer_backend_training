import { Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards()
  @Post('/login')
  async login(@Request() req) {
    const message = await this.authService.login(req.user);
    return message;
  }

  @Get('/logout')
  logout() {
    return 'log out';
  }
}
