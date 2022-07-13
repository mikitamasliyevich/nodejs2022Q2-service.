import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ArtistModule } from './resources/artists/artist.module';
import { UsersModule } from './resources/users/user.module';


@Module({
  imports: [ConfigModule.forRoot(), UsersModule, ArtistModule],
})
export class AppModule {}
