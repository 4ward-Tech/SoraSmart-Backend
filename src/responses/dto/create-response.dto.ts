import { IsNotEmpty, IsObject, IsOptional, IsUUID } from 'class-validator';

export class CreateResponseDto {
  @IsUUID()
  @IsNotEmpty()
  surveyId: string;

  @IsObject()
  @IsNotEmpty()
  answers: any;

  @IsObject()
  @IsOptional()
  submissionLocation?: {
    type: 'Point';
    coordinates: [number, number];
  };
}
