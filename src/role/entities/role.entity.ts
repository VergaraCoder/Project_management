import { Column } from "typeorm";

export class Role {
    @Column()
    id:number;

    @Column()
    name:string;
}
