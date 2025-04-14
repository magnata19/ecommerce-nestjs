import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { IUserDto } from './interface/iuser.dto';
import { UserService } from './user.service';
import { Public } from 'src/auth/constant';
import { ProfileDto } from './dto/profile.dto';
import { IProfileDto } from './interface/iprofile.dto';
import { IRequest } from '../types/irequest.user';
import { AddressDto } from './dto/address.dto';
import { IAddressDto } from './interface/iaddress.dto';
import { UserDto } from './dto/user.dto';

@Controller('api/v1/user')
export class UserController {

  constructor(private userService: UserService) { }

  @Post("create")
  @Public()
  async createUser(@Body() user: UserDto): Promise<UserDto | any> {
    return await this.userService.createUser(user);
  }

  @Post('profile')
  async createProfile(@Req() req: IRequest, @Body() profileDto: ProfileDto): Promise<IProfileDto> {
    return await this.userService.createProfile(req.user, profileDto);
  }

  @Post("address")
  async createAddress(@Req() req: IRequest, @Body() addressDto: IAddressDto): Promise<IAddressDto> {
    return await this.userService.createAddress(req.user, addressDto);
  }


  @Get('info')
  async getOwnProperties(@Req() req: IRequest): Promise<any> {
    return await this.userService.getOwnProperties(req.user);
  }

  @Delete('delete/:id')
  @Public()
  async deleteUser(@Param('id') id: number): Promise<{ message: string }> {
    return await this.userService.deleteUser(Number(id));
  }
}

