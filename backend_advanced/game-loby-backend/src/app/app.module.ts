import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { GameModule } from './modules/game/game.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [AuthModule, GameModule, ProfileModule],
})
export class AppModule {}
