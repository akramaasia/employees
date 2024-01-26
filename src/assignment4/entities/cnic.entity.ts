import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UsersEntity } from './users.entity';
@Entity("cnic")
export class CnicEntity extends BaseEntity{

  @Column()
  cnicNo: string;

@OneToOne(() => UsersEntity, (user) => user.cnic)
user: UsersEntity;
}
