import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { Survey } from './entities/survey.entity';

@Controller('surveys')
export class SurveysController {
  constructor(private readonly surveysService: SurveysService) {}

  @Post()
  async create(@Body() createSurveyDto: CreateSurveyDto): Promise<Survey> {
    return await this.surveysService.create(createSurveyDto);
  }

  @Get()
  async findAll(): Promise<Survey[]> {
    return await this.surveysService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Survey> {
    return await this.surveysService.findOne(id);
  }
}
