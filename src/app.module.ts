import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RoleModule } from './role/role.module';
import { ProjectModule } from './project/project.module';
import { ProjectUsersRoleModule } from './project_users_role/project_users_role.module';
import { InvitationsModule } from './invitations/invitations.module';

@Module({
  imports: [UsersModule, RoleModule, ProjectModule, ProjectUsersRoleModule, InvitationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
