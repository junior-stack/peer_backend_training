import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProfileDto } from 'src/dto/profile.dto';
import { ProfileService } from 'src/services/profile/profile.service';
import { UseGuards } from '@nestjs/common';
import { AuthenticationGuard } from 'src/common/auth/authentication.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path = require('path');
import { v4 as uuidv4 } from 'uuid';
import { Observable, of } from 'rxjs';
import { join } from 'path';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(AuthenticationGuard)
  @Get('/userProfile/:userId')
  async getProfilePicture(
    @Param('userId', new ParseUUIDPipe()) userId: string,
  ) {
    const userurl = await this.profileService.getProfilePicture(userId);
    return userurl;
  }

  @UseGuards(AuthenticationGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload',
        filename: (req, file, cb) => {
          const filename: string =
            path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
          path.parse;
          const extension: string = path.parse(file.originalname).ext;

          cb(null, `${filename}${extension}`);
        },
      }),
    }),
  )
  @Post('/updatePic')
  async updateProfilePic(
    @Body() body: ProfileDto,
    @UploadedFile() file,
  ): Promise<any> {
    const update = await this.profileService.updateProfilePic(
      body.userID,
      file.filename,
    );
    return update;
  }

  @UseGuards(AuthenticationGuard)
  @Get('/profile-image/:imagename')
  downloadProfilePic(
    @Param('imagename') imagename,
    @Res() res,
  ): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), '/upload/' + imagename)));
  }
}
