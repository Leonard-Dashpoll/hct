import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToMany, ManyToOne, } from "typeorm";
import { Place } from "./Place";

@Entity({ name: "tbl_coupons" })
export class Coupon {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 32 })
    title: string;

    @Column({ type: "varchar", length: 2048 })
    description: string;

    @Column({ type: "varchar", length: 6 })
    thumbnail: string;

    @Column()
    type: number;

    @JoinColumn({ name: "place_id" })
    @ManyToOne(type => Place, place => place.coupons)
    place: Place;

    @Column()
    place_id: number;

    @Column({ type: "int" })
    target_group: number;

    @Column({ type: "datetime" })
    valid_from: Date;

    @Column({ type: "datetime" })
    valid_to: Date;


}