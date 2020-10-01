import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tbl_place_categories" })
export class PlaceCategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int" })
    place_id: number;

    @Column({ type: "tinyint" })
    category: number;
}