import { Injectable } from '@nestjs/common';
import { PrismaClient } from '.prisma/client';
import bcrypt = require('bcrypt');
@Injectable()
export class AuthService {
  private prisma = new PrismaClient();

  async login(email: string, password: string) {
    const user = await this.prisma.users.findFirst({ where: { email: email } });
    const result = await bcrypt.compare(password, user.password);
    if (user && result) {
      const { email, password, ...rest } = user;
      return rest;
    }
    return null;
  }
}
