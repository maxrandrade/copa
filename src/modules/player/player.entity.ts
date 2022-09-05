import { Positions } from 'src/enum/Positions';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nationality: string;

  @Column({
    type: 'enum',
    enum: Positions,
  })
  position: Positions;
}
