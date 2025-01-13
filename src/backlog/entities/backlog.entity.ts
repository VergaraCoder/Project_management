import { Task } from "src/task/entities/task.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("backlogs")
export class Backlog {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    idTask:number;

    @ManyToOne(()=>Task,task=>task.backlog)
    taks:Task;
}
