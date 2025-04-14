import { SetMetadata } from "@nestjs/common";
import { Roles } from "@prisma/client";

export const JWT_SECRET = {
  secret: "secretodemais"
}

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true)

export const ROLES_KEY = 'roles';
export const UserRoles = (...roles: Roles[]) => SetMetadata(ROLES_KEY, roles);