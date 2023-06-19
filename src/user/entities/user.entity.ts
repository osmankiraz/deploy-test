import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  username: string;

  @Column({
    length:32
  })
  email: string;

  @Column({
    length:18
  })
  password: string;

  @Column({
    nullable: true,
  })
  age: number;
}
