import { Injectable } from '@nestjs/common';
import { CreateProjectUsersRoleDto } from './dto/create-project_users_role.dto';
import { UpdateProjectUsersRoleDto } from './dto/update-project_users_role.dto';

@Injectable()
export class ProjectUsersRoleService {
  create(createProjectUsersRoleDto: CreateProjectUsersRoleDto) {
    return 'This action adds a new projectUsersRole';
  }

  findAll() {
    return `This action returns all projectUsersRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectUsersRole`;
  }

  update(id: number, updateProjectUsersRoleDto: UpdateProjectUsersRoleDto) {
    return `This action updates a #${id} projectUsersRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectUsersRole`;
  }
}
