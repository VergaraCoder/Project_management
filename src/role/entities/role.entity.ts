import { ProjectUsersRole } from "src/project_users_role/entities/project_users_role.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("roles")
export class Role {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @OneToMany(()=>ProjectUsersRole,projectUserRole=>projectUserRole.role)
    project_user_role:ProjectUsersRole[];
}
