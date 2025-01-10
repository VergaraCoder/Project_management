import { Project } from "src/project/entities/project.entity";
import { User } from "src/users/entities/user.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Invitation {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    date:Date;

    @Column()
    idProject:number;

    @Column()
    idUserInvited:number;

    @ManyToOne(()=>Project,project=>project.project_user_role)
    project:Project;

    @ManyToOne(()=>User,user=>user.project_user_role)
    user:User;
}

