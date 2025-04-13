import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/utils/prisma.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

  constructor(private prismaService: PrismaService,
    private jwtService: JwtService
  ) { }

  async login(username: string, password: string): Promise<{ access_token: string }> {
    try {
      const user = await this.prismaService.user.findFirst({
        where: { username }
      });

      if (user?.username != username) {
        throw new UnauthorizedException("Username incorreto!")
      }

      if (!bcrypt.compareSync(password, user.password)) {
        throw new UnauthorizedException("Senha incorreta!")
      }

      const payload = {
        id: user.id,
      }
      return { access_token: await this.jwtService.signAsync(payload) }
    } catch (err: any) {
      throw new BadRequestException("Erro ao fazer login", err.message)
    }
  }
}
