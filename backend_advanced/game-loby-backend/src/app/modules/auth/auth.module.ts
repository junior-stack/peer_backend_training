import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/Auth.controller';
import { AuthService } from 'src/services/auth/auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule, PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
