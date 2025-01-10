import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Project {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    description:string;

    @Column()
    dateCreation:Date;
}
