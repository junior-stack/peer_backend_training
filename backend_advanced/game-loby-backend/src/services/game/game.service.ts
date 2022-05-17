import { Injectable } from '@nestjs/common';
import { userColors } from 'src/db/userColors';
import { ColorsDto } from 'src/dto/game.dto';
import { PrismaClient } from '.prisma/client';
// import db from "src/common/prisma/prisma"

@Injectable()
export class GameService {
  private prisma = new PrismaClient();

  async getAllColors(){
      const data = await this.prisma.users.findMany();
      return data;
  }

  async updateColors(userID: string, color: string) {
    try{
      const user =  await this.prisma.users.update({ where: {userID: userID}, data: {color: color}})
      if(!user) return "Error: the user does not exists"
      return JSON.stringify(user)
    } catch(err){
      console.log(err)
      return JSON.stringify(err)
    }
  }
}

