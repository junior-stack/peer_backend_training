import { Module } from '@nestjs/common';
import { ProfileController } from 'src/controllers/Profile.controller';
import { ProfileService } from 'src/services/profile/profile.service';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
