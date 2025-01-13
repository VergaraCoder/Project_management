import { Module } from '@nestjs/common';
import { InvitationsService } from './invitations.service';
import { InvitationsController } from './invitations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invitation } from './entities/invitation.entity';
import { UsersModule } from 'src/users/users.module';
import { ProjectModule } from 'src/project/project.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Invitation]),
    UsersModule,
    ProjectModule
  ],
  controllers: [InvitationsController],
  providers: [InvitationsService],
  exports:[
    TypeOrmModule
  ]
})
export class InvitationsModule {}
