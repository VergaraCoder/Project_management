import { Test, TestingModule } from '@nestjs/testing';
import { ProjectUsersRoleController } from './project_users_role.controller';
import { ProjectUsersRoleService } from './project_users_role.service';

describe('ProjectUsersRoleController', () => {
  let controller: ProjectUsersRoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectUsersRoleController],
      providers: [ProjectUsersRoleService],
    }).compile();

    controller = module.get<ProjectUsersRoleController>(ProjectUsersRoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
