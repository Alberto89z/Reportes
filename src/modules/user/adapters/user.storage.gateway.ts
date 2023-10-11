import { query } from "express";
import { pool } from "../../../config/postgres";
import { TUser } from "../entities/user";
import { IUserRepository } from "../use-cases/ports/user-repository";
import { Errors } from "../../../kernel/types";

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
    async save(user: TUser): Promise<TUser> {
        const client = await pool.connect();
        try {
            const {person} = user;
            await client.query('BEGIN');
            //
            const query = `INSERT INTO people
                (name,surname,lastname,birthdate,curp,rfc) VALUES($1,$2,$3,$4,$5,$6) RETURNING *;`; //query de persona
                const {rows: personRow} =await client.query(query,[
                    person?.name,
                    person?.surname,
                    person?.lastname,
                    person?.birthdate,
                    person?.curp,
                    person?.rfc,
                ]);
                if (!personRow[0]) {
                    throw Error(Errors.RECORD_NOT_REGISTERED);
                }
                const savePerson = personRow[0];
                const userQuery = `INSERT INTO user
                (username,password,type,user_details,status_id) 
                VALUES($1,$2,$3,$4,$5,$6) RETURNING *;`;
                const {rows: userRow} =await client.query(userQuery,[
                    user?.username,
                    user?.password,
                    user?.type,
                    user?.userDetails,
                    user?.status?.id,
                    savePerson.id,
                ]);
                if (!userRow[0]) {
                    throw Error(Errors.RECORD_NOT_REGISTERED);
                }
                await client.query('COMMIT');
                user.id= Number(userRow[0].id);
                user.person!.id = Number(savePerson.id);
                return user;
        } catch (error) {
            console.log(error);
            await client.query('ROLLBACK');
            throw error;
        }
    }
    update(user: TUser): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}