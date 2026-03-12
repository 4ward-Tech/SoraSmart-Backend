import { IsString, IsNotEmpty, IsOptional, IsNumber, IsObject } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  ownerName: string;

  @IsString()
  @IsNotEmpty()
  propertyCode: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsObject()
  @IsOptional()
  location?: {
    type: 'Point';
    coordinates: [number, number];
  };

  @IsObject()
  @IsOptional()
  boundary?: {
    type: 'Polygon';
    coordinates: number[][][];
  };

  @IsNumber()
  @IsOptional()
  taxValue?: number;
}
