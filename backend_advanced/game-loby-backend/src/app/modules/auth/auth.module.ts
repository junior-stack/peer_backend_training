import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/controllers/Auth.controller';
import { AuthService } from 'src/services/auth/auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({ secret: 'SECRET', signOptions: { expiresIn: '60s' } }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
