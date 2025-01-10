import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectUsersRoleDto } from './create-project_users_role.dto';

export class UpdateProjectUsersRoleDto extends PartialType(CreateProjectUsersRoleDto) {}
