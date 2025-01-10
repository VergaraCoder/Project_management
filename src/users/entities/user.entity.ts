import { ProjectUsersRole } from "src/project_users_role/entities/project_users_role.entity";
import { Column, OneToMany } from "typeorm";

export class User {
    @Column()
    id: number;

    @Column()
    name: string;

    @Column()
    email:string;

    @Column()
    password:string;

    @OneToMany(()=>ProjectUsersRole,projectUserRole=>projectUserRole)
    project_user_role:ProjectUsersRole[];
}
