import { Injectable } from '@nestjs/common';
import { userColors } from 'src/db/userColors';
import { ColorsDto } from 'src/dto/game.dto';

@Injectable()
export class GameService {
  private userColors = userColors;

  getAllColors(): ColorsDto[] {
    return this.userColors;
  }
}

const gameService = new GameService();
