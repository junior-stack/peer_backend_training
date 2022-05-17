import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ProfileDto } from 'src/dto/profile.dto';
import { ProfileService } from 'src/services/profile/profile.service';

@Controller('profile')
export class ProfileController {

  constructor(private readonly profileService: ProfileService) {}

  @Get('/userProfile/:userId')
  async getProfilePicture(@Param('userId', new ParseUUIDPipe()) userId: string) {
    const userurl = await this.profileService.getProfilePicture(userId);
    return userurl;
  }

  @Post('/updatePic')
  async updateProfilePic(@Body() body: ProfileDto) {
    const update = await this.profileService.updateProfilePic(body.userID, body.url)
    return update;
  }
}
