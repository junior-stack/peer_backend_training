import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { AuthInfoDto } from 'src/dto/auth.dto';

@Controller('auth')
export class AuthController {
  @Post('/login')
  login(@Body() param: AuthInfoDto) {
    return 'login sucessful';
  }

  @Get('/logout')
  logout() {
    return 'log out';
  }
}
