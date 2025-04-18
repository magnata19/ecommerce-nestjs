import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/utils/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from './constant';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/auth-authorization';

@Module({
  providers: [AuthService, PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ],
  imports: [
    JwtModule.register({
      global: true,
      secret: JWT_SECRET.secret,
      signOptions: {
        expiresIn: '40000s'
      }
    })
  ],
  controllers: [AuthController]
})
export class AuthModule { }
