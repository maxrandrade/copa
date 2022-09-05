import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { resourceLimits } from 'worker_threads';
import { Country } from './country.entity';
import { CreateCountryDto } from './dto/create-country.dto';

@Injectable()
export class CountryService {
  constructor(@InjectRepository(Country) private repo: Repository<Country>) {}

  findOne(id: number): Promise<Country> {
    return this.repo.findOneBy({ id });
  }

  findAll(): Promise<Country[]> {
    return this.repo.find({});
  }

  create(createCountryDto: CreateCountryDto): Promise<Country> {
    const country = this.repo.create(createCountryDto);
    return this.repo.save(country);
  }

  async update(
    id: number,
    createCountryDto: Partial<CreateCountryDto>,
  ): Promise<Country> {
    const result = await this.repo.update(id, createCountryDto);
    if (!result.affected) {
      throw new EntityNotFoundError(Country, id);
    }
    return this.repo.findOneBy({ id });
  }

  remove(id: number): void {
    this.repo.delete(id);
  }
}
