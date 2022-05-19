import { Injectable } from '@nestjs/common';
import { PrismaClient } from '.prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private prisma = new PrismaClient();

  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.users.findFirst({ where: { email: email } });
    return user;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userID };
    return { access_token: this.jwtService.sign(payload) };
  }
}
