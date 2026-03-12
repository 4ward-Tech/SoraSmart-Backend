import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { Response } from './entities/response.entity';

@Controller('responses')
export class ResponsesController {
  constructor(private readonly responsesService: ResponsesService) {}

  @Post()
  async create(@Body() createResponseDto: CreateResponseDto): Promise<Response> {
    return await this.responsesService.create(createResponseDto);
  }

  @Get()
  async findAllBySurvey(@Query('surveyId') surveyId: string): Promise<Response[]> {
    return await this.responsesService.findAllBySurvey(surveyId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Response> {
    return await this.responsesService.findOne(id);
  }
}
