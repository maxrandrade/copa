import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { Stadium } from './stadium.entity';

@Injectable()
export class StadiumService {
  constructor(@InjectRepository(Stadium) private repo: Repository<Stadium>) {}

  findOne(id: number): Promise<Stadium> {
    return this.repo.findOneBy({ id });
  }

  findAll(): Promise<Stadium[]> {
    return this.repo.find({});
  }

  create(createStadiumDto: CreateStadiumDto): Promise<Stadium> {
    const stadium = this.repo.create(createStadiumDto);
    return this.repo.save(stadium);
  }

  async update(
    id: number,
    updateStadiumDto: Partial<CreateStadiumDto>,
  ): Promise<Stadium> {
    const result = await this.repo.update(id, updateStadiumDto);
    if (!result.affected) {
      throw new EntityNotFoundError(Stadium, id);
    }
    return this.repo.findOneBy({ id });
  }

  remove(id: number): void {
    this.repo.delete(id);
  }
}
