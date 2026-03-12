import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from '../properties/entities/property.entity';

@Injectable()
export class RevenueService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}

  /**
   * Calculates the potential tax for a property based on its area
   * Area is calculated in square meters using ST_Area on the geography cast
   */
  async calculatePropertyTax(propertyId: string): Promise<{ area: number; calculatedTax: number }> {
    const property = await this.propertyRepository.findOne({ where: { id: propertyId } });
    if (!property) {
      throw new NotFoundException(`Property with ID ${propertyId} not found`);
    }

    const result = await this.propertyRepository
      .createQueryBuilder('prop')
      .select('ST_Area(prop.boundary::geography)', 'area')
      .where('prop.id = :propertyId', { propertyId })
      .getRawOne();

    const area = parseFloat(result.area);
    const calculatedTax = area * parseFloat(property.taxValue.toString());

    return {
      area,
      calculatedTax,
    };
  }
}
