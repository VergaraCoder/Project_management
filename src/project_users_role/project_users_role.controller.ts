import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectUsersRoleService } from './project_users_role.service';
import { CreateProjectUsersRoleDto } from './dto/create-project_users_role.dto';
import { UpdateProjectUsersRoleDto } from './dto/update-project_users_role.dto';

@Controller('project-users-role')
export class ProjectUsersRoleController {
  constructor(private readonly projectUsersRoleService: ProjectUsersRoleService) {}

  @Post()
  create(@Body() createProjectUsersRoleDto: CreateProjectUsersRoleDto) {
    return this.projectUsersRoleService.create(createProjectUsersRoleDto);
  }

  @Get()
  findAll() {
    return this.projectUsersRoleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectUsersRoleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectUsersRoleDto: UpdateProjectUsersRoleDto) {
    return this.projectUsersRoleService.update(+id, updateProjectUsersRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectUsersRoleService.remove(+id);
  }
}
