import { Project } from "src/project/entities/project.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("invitations")
export class Invitation {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    date:Date;

    @Column()
    idProject:number;

    @Column()
    idUserInvited:number;

    @ManyToOne(()=>Project,project=>project.invitation)
    project:Project;

    @ManyToOne(()=>User,user=>user.invitation)
    user:User;
}

