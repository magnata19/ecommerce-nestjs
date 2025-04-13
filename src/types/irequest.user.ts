import { User } from "@prisma/client";
import { Request } from "express";

export type IRequest = { user: User } & Request;