import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { UsersModule } from 'src/users/users.module';
import { SprintsModule } from 'src/sprints/sprints.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Task]),
    UsersModule,
    SprintsModule
  ],
  controllers: [TaskController],
  providers: [TaskService],
  exports:[
    TypeOrmModule
  ]
})
export class TaskModule {}
