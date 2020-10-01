import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Coupon } from "./Coupon";
import { PlaceCategory } from "./PlaceCategory";

@Entity({ name: "tbl_places" })
export class Place {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 32 })
    title: string;

    @Column({ type: "varchar", length: 64 })
    subtitle: string;

    @Column({ type: "varchar", length: 2048 })
    description: string;

    @Column({ type: "int" })
    thumbnail: number;

    @Column({ type: "boolean", default: 0 })
    verified: boolean;

    @Column({ type: "tinyint", default: 0 })
    level: number;

    @OneToMany(type => Coupon, coupon => coupon.place)
    coupons: Coupon[];

    category: number[];

}