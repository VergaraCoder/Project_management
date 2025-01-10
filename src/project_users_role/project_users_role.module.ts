import { Module } from '@nestjs/common';
import { ProjectUsersRoleService } from './project_users_role.service';
import { ProjectUsersRoleController } from './project_users_role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectUsersRole } from './entities/project_users_role.entity';
import { UsersModule } from 'src/users/users.module';
import { ProjectModule } from 'src/project/project.module';
import { RoleModule } from 'src/role/role.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([ProjectUsersRole]),
    UsersModule,
    ProjectModule,
    RoleModule,
  ],
  controllers: [ProjectUsersRoleController],
  providers: [ProjectUsersRoleService],
  exports:[
    TypeOrmModule
  ]
})
export class ProjectUsersRoleModule {}
