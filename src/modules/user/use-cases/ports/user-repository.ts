//separacion entre la base de datos y los casos de uso, 
//diretamente el cu no va a reconocer la implementacion de esos metodos, 

import { TUser } from "modules/user/entities/user";
//import { TUser } from "../..//entities/user";

//solo sabe que existe, que input y que output, solo la logica
export interface IUserRepository {
    findAll(): Promise<TUser[]>;
    findById(id:number): Promise<TUser>;
    save(user: TUser): Promise<TUser>;
    update(user: TUser): Promise<TUser>;
    delete(id: number): Promise<boolean>;
}