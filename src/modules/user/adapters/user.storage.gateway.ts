import { pool } from "../../../config/postgres";
import { TUser } from "../entities/user";
import { IUserRepository } from "../use-cases/ports/user-repository";

// Dao
export  class UserStorageGateway implements IUserRepository{
    async findAll(): Promise<TUser[]> {
        const query = `SELECT id,username,password,created_at as "createdAt",
        last_signin as "lastSignin", s.id as "statusId", s.description,
        r.id as "roleId", r.description as "role", p.name, p.surname,
        p.lastname
        FROM users ORDER BY id DESC`;
        const {rows: userRows} = await pool.query(query);//created_at
        return userRows.map((user)=> <TUser>user);
        //throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    save(user: TUser): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    update(user: TUser): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}