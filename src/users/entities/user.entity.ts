import { Invitation } from "src/invitations/entities/invitation.entity";
import { ProjectUsersRole } from "src/project_users_role/entities/project_users_role.entity";
import { Task } from "src/task/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email:string;

    @Column()
    password:string;

    @OneToMany(()=>ProjectUsersRole,projectUserRole=>projectUserRole)
    project_user_role:ProjectUsersRole[];

    @OneToMany(()=>Invitation,invitation=>invitation.idUserInvited)
    invitation:Invitation[];

    @OneToMany(()=>Task,task=>task.userAssigned)
    taskAssigned:Task[];

    @OneToMany(()=>Task,task=>task.userInformer)
    taskInformer:Task[];
}
