import { ProjectUsersRole } from "src/project_users_role/entities/project_users_role.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity("roles")
export class Role {
    @Column()
    id:number;

    @Column()
    name:string;

    @OneToMany(()=>ProjectUsersRole,projectUserRole=>projectUserRole.role)
    project_user_role:ProjectUsersRole[];
}
