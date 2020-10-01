import * as crypto from "crypto";
import { EntitySchema, ObjectType } from "typeorm";

export class Utils {

    static _createId(length: number) {
        let buffer = crypto.randomBytes(length / 2);
        return buffer.toString("hex");
    }

    static _createUniqueId<Entity>(entity: ObjectType<Entity> | EntitySchema<Entity>, length: number): string {
        //Todoo
        let buffer = crypto.randomBytes(length / 2);
        return buffer.toString("hex");
    }

}