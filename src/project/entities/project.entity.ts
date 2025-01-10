import { ProjectUsersRole } from "src/project_users_role/entities/project_users_role.entity";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Project {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    description:string;

    @Column()
    dateCreation:Date;

    @OneToMany(()=>ProjectUsersRole,projectUserRole=>projectUserRole.project)
    project_user_role:ProjectUsersRole[];
}
