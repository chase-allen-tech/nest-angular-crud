import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsService } from './services/cats.service';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
