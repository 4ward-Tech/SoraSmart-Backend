import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from '../properties/entities/property.entity';
import { AdminBoundary } from '../admin-boundaries/entities/admin-boundary.entity';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
    @InjectRepository(AdminBoundary)
    private readonly boundaryRepository: Repository<AdminBoundary>,
  ) {}

  /**
   * Gets stats for each administrative boundary (e.g. number of properties)
   */
  async getBoundaryStats(): Promise<any[]> {
    return await this.boundaryRepository
      .createQueryBuilder('boundary')
      .select('boundary.name', 'name')
      .addSelect('boundary.type', 'type')
      .addSelect((subQuery) => {
        return subQuery
          .select('COUNT(prop.id)', 'count')
          .from(Property, 'prop')
          .where('ST_Within(prop.location, boundary.boundary)');
      }, 'propertyCount')
      .getRawMany();
  }
}
