import { SetMetadata } from "@nestjs/common";

export const JWT_SECRET = {
  secret: "secretodemais"
}

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true)