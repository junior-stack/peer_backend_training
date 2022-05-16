import { Injectable } from '@nestjs/common';
import { userColors } from 'src/db/userColors';
import { ColorsDto } from 'src/dto/game.dto';
import { PrismaClient } from '.prisma/client';

@Injectable()
export class GameService {
  private userColors = userColors;
  private prisma = new PrismaClient();

  async getAllColors(): Promise<any[]> {
    const data = await this.prisma.user.findMany();
    return data;
  }

  async updateColors() {}
}

const gameService = new GameService();
