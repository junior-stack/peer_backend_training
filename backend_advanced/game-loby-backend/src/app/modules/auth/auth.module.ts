import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/Auth.controller';
import { AuthService } from 'src/services/auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/services/auth/local.strategy';
import { SessionSerializer } from 'src/common/auth/session.serializer';

@Module({
  imports: [PassportModule, PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
