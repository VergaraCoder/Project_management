import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Backlog } from "src/backlog/entities/backlog.entity";
import { Invitation } from "src/invitations/entities/invitation.entity";
import { Project } from "src/project/entities/project.entity";
import { ProjectUsersRole } from "src/project_users_role/entities/project_users_role.entity";
import { Role } from "src/role/entities/role.entity";
import { Sprint } from "src/sprints/entities/sprint.entity";
import { Task } from "src/task/entities/task.entity";
import { User } from "src/users/entities/user.entity";


export class dbConfig implements TypeOrmOptionsFactory{

    constructor(
        private configService:ConfigService
    ){}

    createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {       
        return({
            type: "mysql",
            host:this.configService.get<string>("DB_HOST"),
            port:this.configService.get<number>("DB_PORT"),
            username:this.configService.get<string>("DB_USERNAME"),
            password:this.configService.get<string>("DB_PASSWORD"),
            database:this.configService.get<string>("DB_DATABASE"),
            entities:[User,Task,Backlog,Role,Project,ProjectUsersRole,Sprint,Invitation],
            synchronize:true,
        });
    }
}