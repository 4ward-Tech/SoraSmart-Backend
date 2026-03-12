import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsesController } from './responses.controller';
import { ResponsesService } from './responses.service';
import { Response } from './entities/response.entity';
import { Survey } from '../surveys/entities/survey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Response, Survey])],
  controllers: [ResponsesController],
  providers: [ResponsesService],
})
export class ResponsesModule {}
