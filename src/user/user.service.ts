import { BadRequestException, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { IUserDto } from './interface/iuser.dto';
import { PrismaService } from 'src/utils/prisma.service';
import * as bcrypt from 'bcrypt'
import { IAddressDto } from './interface/iaddress.dto';
import { IProfileDto } from './interface/iprofile.dto';
import { IRequest } from '../types/irequest.user';
import { create } from 'domain';
import { User } from '@prisma/client';

@Injectable()
export class UserService {

  constructor(private prismaService: PrismaService) { }

  async createUser(user: IUserDto): Promise<IUserDto | any> {
    try {
      const currentUser = await this.prismaService.user.create({
        data: {
          username: user.username,
          password: bcrypt.hashSync(user.password, 10)
        }
      });

      return currentUser;
    } catch (err: any) {
      throw new UnprocessableEntityException("Usuário já existe.")
    }
  }

  async createProfile(user: IRequest['user'], profileDto: IProfileDto): Promise<IProfileDto> {
    try {
      const currentUser = await this.prismaService.user.findFirstOrThrow({
        where: { id: user?.id }
      });
      const profile = await this.prismaService.profile.create({
        data: {
          name: profileDto.name,
          email: profileDto.email,
          userId: currentUser.id,
        }
      });
      return profile
    } catch (err: any) {
      throw new UnprocessableEntityException("Erro ao criar perfil, tente novamente.", err.message);
    }
  }

  async createAddress(user: IRequest['user'], addressDto: IAddressDto): Promise<IAddressDto> {
    try {
      const profile = await this.prismaService.profile.findFirstOrThrow({
        where: { userId: user?.id }
      })

      const address = await this.prismaService.address.create({
        data: {
          city: addressDto.city,
          state: addressDto.state,
          country: addressDto.country,
          profileId: profile.id
        }
      })

      return address;
    } catch (err: any) {
      throw new UnprocessableEntityException("Erro ao registrar um endereço, tente novamente.", err.message)
    }
  }

  async getOwnProperties(user: IRequest['user']): Promise<any> {
    return await this.prismaService.user.findFirst({
      where: { id: user.id },
      include: {
        profile: {
          include: {
            address: true
          }
        }
      }
    })
  }

  async deleteUser(id: number): Promise<{ message: string }> {
    const user = await this.prismaService.user.delete({
      where: { id: id }
    })
    return { message: `Usuário ${user.username} foi deletado com sucesso.` }
  }

}