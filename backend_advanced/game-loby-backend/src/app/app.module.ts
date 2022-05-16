import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { AuthController } from 'src/controllers/Auth.controller';
import { GameLobyController } from 'src/controllers/Game.controller';
import { ProfileController } from 'src/controllers/Profile.controller';
import { GameService } from 'src/services/game/game.service';
import { AuthService } from 'src/services/auth/auth.service';
import { ProfileService } from 'src/services/profile/profile.service';

@Module({
  imports: [],
  controllers: [AuthController, GameLobyController, ProfileController],
  providers: [GameService, AuthService, ProfileService],
})
export class AppModule {}
