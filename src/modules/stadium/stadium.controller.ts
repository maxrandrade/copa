import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { Stadium } from './stadium.entity';
import { StadiumService } from './stadium.service';

@Controller('stadiums')
export class StadiumController {
  constructor(private readonly stadiumService: StadiumService) {}

  @Get()
  findAll(): Promise<Stadium[]> {
    return this.stadiumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Stadium> {
    return this.stadiumService.findOne(id);
  }

  @Post()
  create(@Body() createStadiumDto: CreateStadiumDto): Promise<Stadium> {
    return this.stadiumService.create(createStadiumDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateStadiumDto: Partial<CreateStadiumDto>,
  ): Promise<Stadium> {
    return this.stadiumService.update(id, updateStadiumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    return this.stadiumService.remove(id);
  }
}
