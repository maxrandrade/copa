import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './player.entity';
import { PlayerService } from './player.service';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  findAll(): Promise<Player[]> {
    return this.playerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Player> {
    return this.playerService.findOne(id);
  }

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto): Promise<Player> {
    return this.playerService.create(createPlayerDto);
  }
}
