import { Module } from '@nestjs/common';
import { GameLobyController } from 'src/controllers/Game.controller';
import { GameService } from 'src/services/game/game.service';

@Module({
  controllers: [GameLobyController],
  providers: [GameService],
})
export class GameModule {}
