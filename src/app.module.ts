import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RoleModule } from './role/role.module';
import { ProjectModule } from './project/project.module';
import { ProjectUsersRoleModule } from './project_users_role/project_users_role.module';
import { InvitationsModule } from './invitations/invitations.module';
import { TaskModule } from './task/task.module';
import { SprintsModule } from './sprints/sprints.module';
import { BacklogModule } from './backlog/backlog.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './common/db/db.config';
import { User } from './users/entities/user.entity';
import { Task } from './task/entities/task.entity';
import { Backlog } from './backlog/entities/backlog.entity';
import { Role } from './role/entities/role.entity';
import { Project } from './project/entities/project.entity';
import { ProjectUsersRole } from './project_users_role/entities/project_users_role.entity';
import { Sprint } from './sprints/entities/sprint.entity';
import { Invitation } from './invitations/entities/invitation.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbConfigInstance = new dbConfig(configService); 
        return dbConfigInstance.createTypeOrmOptions(); 
      },
    }),
    UsersModule,
    RoleModule,
    ProjectModule,
    ProjectUsersRoleModule,
    InvitationsModule,
    TaskModule,
    SprintsModule,
    BacklogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
