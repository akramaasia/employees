import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { UsersEntity } from './users.entity';
import { BaseEntity } from './base.entity';
 
@Entity("posts")
export class PostEntity extends BaseEntity{

    @Column()
    content : string;

    @OneToMany(() => UsersEntity, (user) => user.post)
    user : UsersEntity;
}