import { Entity, TStatus } from "../../../kernel/types";

export type TUser = Entity<number> & {
    username?: string;
    password?: string;
    toke?:string;
    lasSignin?:string;
    createdAt?:string;
    status?:TStatus;
    person?:any;
}