import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 },
    }),
  );
  app.use(
    cors({
      origin: 'http://localhost:3001', // <-- location of the react app were connecting to
      credentials: true,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
