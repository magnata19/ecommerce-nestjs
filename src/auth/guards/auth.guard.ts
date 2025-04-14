import { CanActivate, ExecutionContext, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { IS_PUBLIC_KEY, JWT_SECRET } from "../constant";
import { Reflector } from "@nestjs/core";
import { IRequest } from "src/types/irequest.user";
import { PrismaService } from "src/utils/prisma.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService,
    private reflector: Reflector,
    private prismaService: PrismaService) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ])
    if (isPublic) {
      return true
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException("Token inválido.")
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: JWT_SECRET.secret
      })
      const currentUser = await this.prismaService.user.findFirst({ where: { id: payload.id } });
      if (!currentUser) {
        throw new NotFoundException('User not found');
      }
      request['user'] = currentUser;
      return true
    } catch (err: any) {
      throw new UnauthorizedException("Deu ruim pra logar =(")
    }
  }

  private extractTokenFromHeader(req: IRequest): string | undefined {
    const headerAuthorization = req.headers['authorization'];
    if (headerAuthorization) {
      const [type, token] = headerAuthorization.split(' ') ?? []
      return type === 'Bearer' ? token : undefined;
    }
    return undefined;
  }

}
