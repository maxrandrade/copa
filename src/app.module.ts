import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { PlayerModule } from './modules/player/player.module';
import { StadiumModule } from './modules/stadium/stadium.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    StadiumModule,
    UserModule,
    PlayerModule,
  ],
})
export class AppModule {}
