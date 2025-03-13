import { Roles } from 'src/enums';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({ type: 'varchar', name: 'first_name', nullable: false })
  firstName: string;

  @Column({ type: 'varchar', name: 'last_name', nullable: false })
  lastName: string;

  @Column({ type: 'varchar', name: 'email', nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', name: 'password', nullable: false })
  password: string;

  @Column({ type: 'varchar', name: 'gender' })
  gender: string;

  @Column({ type: 'enum', enum: Roles, default: Roles.USER })
  role: Roles;
}
