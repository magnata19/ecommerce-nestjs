import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Roles } from "@prisma/client";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../constant";
import { IRequest } from "src/types/irequest.user";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Roles[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ])
    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest<IRequest>();
    return requiredRoles.some((role) => user.role?.includes(role));

  }

}