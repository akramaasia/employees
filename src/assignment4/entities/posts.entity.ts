import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { UsersEntity } from './users.entity';
import { BaseEntity } from './base.entity';

@Entity('posts')
export class PostEntity extends BaseEntity {
  @Column()
  content: string;

  @ManyToOne(() => UsersEntity, (user) => user.posts)
  user: UsersEntity;
}
