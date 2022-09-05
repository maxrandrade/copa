import { Positions } from 'src/enum/Positions';

export interface CreatePlayerDto {
  name: string;
  nationality: string;
  position: Positions;
}
