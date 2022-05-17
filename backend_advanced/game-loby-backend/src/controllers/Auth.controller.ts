import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { AuthInfoDto } from 'src/dto/auth.dto';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}


  @Post('/login')
  async login(@Body() param: AuthInfoDto) {
    const message = await this.authService.login(param.email, param.password)
    return message;
  }

  @Get('/logout')
  logout() {
    return 'log out';
  }
}
