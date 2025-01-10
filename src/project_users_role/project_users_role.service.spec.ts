import { Test, TestingModule } from '@nestjs/testing';
import { ProjectUsersRoleService } from './project_users_role.service';

describe('ProjectUsersRoleService', () => {
  let service: ProjectUsersRoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectUsersRoleService],
    }).compile();

    service = module.get<ProjectUsersRoleService>(ProjectUsersRoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
