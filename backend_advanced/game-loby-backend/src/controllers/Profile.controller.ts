import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ProfileDto } from 'src/dto/profile.dto';

@Controller('profile')
export class ProfileController {
  @Get('/userProfile/:userId')
  getProfilePicture(@Param('userId', new ParseUUIDPipe()) userId: string) {
    console.log(userId);
    return 'getProfilePicture';
  }

  @Post('/updatePic')
  updateProfilePic(@Body() body: ProfileDto) {
    console.log('body: ', body);
    return 'updateProfilePic';
  }
}
