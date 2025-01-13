import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("task")
export class Task {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column()
    storyPoint:number;

    @Column()
    idSprint:number;

    @Column()
    idAssignedPerson:number;

    @Column()
    status:string;

    @Column()
    idUserInformer:number;

    @Column()
    date:Date;

    @Column()
    dateLimit:Date;    

    @ManyToOne(()=>User,user=>user.taskAssigned)
    userInformer:User;

    @ManyToOne(()=>User,user=>user.taskInformer)
    userAssigned:User;
}
