import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Country } from './country.entity';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  findAll(): Promise<Country[]> {
    return this.countryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Country> {
    return this.countryService.findOne(id);
  }

  @Post()
  create(@Body() createCountryDto: CreateCountryDto): Promise<Country> {
    return this.countryService.create(createCountryDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateCountryDto: Partial<CreateCountryDto>,
  ): Promise<Country> {
    return this.countryService.update(id, updateCountryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    return this.countryService.remove(id);
  }
}
