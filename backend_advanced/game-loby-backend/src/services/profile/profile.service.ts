import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProfileService {
  private prisma = new PrismaClient();

  async getProfilePicture(userID: string) {
    try {
      const user = await this.prisma.users.findFirst({
        where: { userID: userID },
      });
      if (!user) return 'Error: the user does not exist';
      return user.url;
    } catch (err) {
      console.error(err);
      return JSON.stringify(err);
    }
  }

  async updateProfilePic(userID: string, url: string) {
    try {
      const user = await this.prisma.users.update({
        where: { userID: userID },
        data: { url: url },
      });
      if (!user) return 'Error: the user does not exists';
      return JSON.stringify(user);
    } catch (err) {
      console.error(err);
      return JSON.stringify(err);
    }
  }
}
