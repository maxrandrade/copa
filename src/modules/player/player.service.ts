import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  constructor(@InjectRepository(Player) private repo: Repository<Player>) {}

  findOne(id: number): Promise<Player> {
    return this.repo.findOneBy({ id });
  }

  findAll(): Promise<Player[]> {
    return this.repo.find({});
  }

  create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const player = this.repo.create(createPlayerDto);
    return this.repo.save(player);
  }
}
