import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/utils/prisma.service';

@Module({
  controllers: [UserController],
  imports: [],
  providers: [UserService, UserController, PrismaService]
})
export class UserModule { }
