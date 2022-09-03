import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StadiumController } from './stadium.controller';
import { Stadium } from './stadium.entity';
import { StadiumService } from './stadium.service';

@Module({
  imports: [TypeOrmModule.forFeature([Stadium])],
  controllers: [StadiumController],
  providers: [StadiumService],
})
export class StadiumModule {}
