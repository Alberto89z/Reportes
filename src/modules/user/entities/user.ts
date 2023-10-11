import { Entity, JSON, TStatus } from "../../../kernel/types";
import { TPerson } from "./person";

export type TUser = Entity<number> & {
    username?: string;
    password?: string;
    userDetails: JSON;
    type?: number;
    status?:TStatus;
    person?:TPerson;
}

export type TUserAreas = Entity<number> & {
    user: TUser;
    area: TArea;
    createdAt: string;
    status: TStatus;
};

export type TArea = Entity<number> & {
    name: string;
    academicDivision?: TAcademicDivision;
    createdAT: string;
    status: TStatus;
};

export type TAcademicDivision = Entity<number> & {
    name: string;
    abbreviation?: string;
    academicDivisions?: any;
    createdAT: string;
    status: TStatus;
};