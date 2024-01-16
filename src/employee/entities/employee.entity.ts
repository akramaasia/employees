import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class EmployeeEntity {
@PrimaryGeneratedColumn()
id: number;

@Column()
name : string;

@Column()
salery : number;

@Column()

isManager: boolean;
}
