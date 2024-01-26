import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { CnicEntity } from './cnic.entity';
import { PostEntity } from './posts.entity';


@Entity("users")
export class UsersEntity extends BaseEntity
{
//   @PrimaryGeneratedColumn()
//   id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  contact: string;

  @Column()
  userId: number;
  
  @OneToOne(() => CnicEntity) @JoinColumn()
  cnic: CnicEntity;
  
  @ManyToOne (() => PostEntity, (post) => post.user)
  post: PostEntity[]; 
}
