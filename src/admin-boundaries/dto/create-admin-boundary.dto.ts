import { IsString, IsNotEmpty, IsEnum, IsOptional, IsObject, IsUUID } from 'class-validator';
import { BoundaryType } from '../entities/admin-boundary.entity';

export class CreateAdminBoundaryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(BoundaryType)
  @IsNotEmpty()
  type: BoundaryType;

  @IsObject()
  @IsNotEmpty()
  boundary: {
    type: 'Polygon';
    coordinates: number[][][];
  };

  @IsUUID()
  @IsOptional()
  parentId?: string;
}
