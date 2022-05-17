import { Injectable } from '@nestjs/common';
import { PrismaClient } from '.prisma/client';

@Injectable()
export class AuthService {

  private prisma = new PrismaClient()

  async login(email: string, password: string){
    const user = await this.prisma.users.findFirst({ where: {email: email}})
    if(!user)
      return "such user does not exist"
    if(user.password !== password)
      return "such user's password is not correct"
    return "login success"
  }

}
