import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/Auth.controller';
import { AuthService } from 'src/services/auth/auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
