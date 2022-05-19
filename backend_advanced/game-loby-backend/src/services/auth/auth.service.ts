import { Injectable } from '@nestjs/common';
import { PrismaClient } from '.prisma/client';

@Injectable()
export class AuthService {
  private prisma = new PrismaClient();

  async login(email: string, password: string) {
    const user = await this.prisma.users.findFirst({ where: { email: email } });
    if (user && user.password === password) {
      const { email, password, ...rest } = user;
      return rest;
    }
    return null;
  }
}
