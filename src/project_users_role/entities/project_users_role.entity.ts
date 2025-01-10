import { Project } from "src/project/entities/project.entity";
import { Role } from "src/role/entities/role.entity";
import { User } from "src/users/entities/user.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class ProjectUsersRole {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    idProject:number;

    @Column()
    idUser:number;

    @Column()
    idRole:number;

    @ManyToOne(()=>User,user=>user.project_user_role)
    user:User;

    @ManyToOne(()=>Role,role=>role.project_user_role)
    role:Role;

    @ManyToOne(()=>Project,project=>project.project_user_role)
    project:Project;
}
