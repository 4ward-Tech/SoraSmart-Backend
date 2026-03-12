import { IsString, IsNotEmpty, IsOptional, IsArray, IsBoolean } from 'class-validator';

export class CreateSurveyDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsNotEmpty()
  questions: any[];

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
