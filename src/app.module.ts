import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RoleModule } from './role/role.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [UsersModule, RoleModule, ProjectModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
