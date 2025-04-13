import { Body, Controller, Post } from '@nestjs/common';
import { IAuthDto } from './interface/user.interface';
import { AuthService } from './auth.service';
import { Public } from './constant';

@Controller('api/v1/auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @Post('login')
  @Public()
  async login(@Body() authDto: IAuthDto): Promise<{ access_token: string }> {
    console.log(authDto.username, authDto.password)
    return await this.authService.login(authDto.username, authDto.password);
  }

}
