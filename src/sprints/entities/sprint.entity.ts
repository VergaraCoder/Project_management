import { Task } from "src/task/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("sprints")
export class Sprint {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description:string;

    @Column()
    dateStart:Date;

    @Column()
    dateEnd:Date;

    @Column()
    sprintGoal:string;

    @OneToMany(()=>Task,task=>task.sprint)
    tasks:Task[];
}
