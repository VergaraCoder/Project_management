import { Module } from '@nestjs/common';
import { BacklogService } from './backlog.service';
import { BacklogController } from './backlog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Backlog } from './entities/backlog.entity';
import { TaskModule } from 'src/task/task.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Backlog]),
    TaskModule
  ],
  controllers: [BacklogController],
  providers: [BacklogService],
  exports:[
    TypeOrmModule
  ]
})
export class BacklogModule {}
