import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from './entities/response.entity';
import { CreateResponseDto } from './dto/create-response.dto';
import { Survey } from '../surveys/entities/survey.entity';

@Injectable()
export class ResponsesService {
  constructor(
    @InjectRepository(Response)
    private readonly responseRepository: Repository<Response>,
    @InjectRepository(Survey)
    private readonly surveyRepository: Repository<Survey>,
  ) {}

  async create(createResponseDto: CreateResponseDto): Promise<Response> {
    const { surveyId, ...rest } = createResponseDto;

    const survey = await this.surveyRepository.findOne({ where: { id: surveyId } });
    if (!survey) {
      throw new NotFoundException(`Survey with ID ${surveyId} not found`);
    }

    const response = this.responseRepository.create({
      ...rest,
      survey,
    });

    return await this.responseRepository.save(response);
  }

  async findAllBySurvey(surveyId: string): Promise<Response[]> {
    return await this.responseRepository.find({
      where: { survey: { id: surveyId } },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Response> {
    const response = await this.responseRepository.findOne({
      where: { id },
      relations: ['survey'],
    });
    if (!response) {
      throw new NotFoundException(`Response with ID ${id} not found`);
    }
    return response;
  }
}
