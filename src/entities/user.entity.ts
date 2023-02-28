import { GENDER } from 'src/user/types/user.type';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column({ nullable: false })
  public readonly username: string;

  @Column({ name: 'dateOfBirth', type: 'date' })
  public readonly date_of_birth: Date | string;

  @Column({
    type: 'enum',
    enum: GENDER,
    nullable: false,
  })
  public readonly gender: GENDER;

  @Column({ type: 'varchar', unique: true, nullable: false })
  public readonly email: string;

  @Column({ type: 'varchar', nullable: false })
  public readonly password: string;

  @CreateDateColumn({ name: 'createdDate', type: 'date' })
  public readonly createdDate: Date | string;

  @UpdateDateColumn({ name: 'updatedDate', type: 'date' })
  public readonly updatedDate: Date | string;
}
