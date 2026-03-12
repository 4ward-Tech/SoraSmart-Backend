import { Controller, Get, Param } from '@nestjs/common';
import { RevenueService } from './revenue.service';

@Controller('revenue')
export class RevenueController {
  constructor(private readonly revenueService: RevenueService) {}

  @Get('tax-calculation/:propertyId')
  async getTaxCalculation(@Param('propertyId') propertyId: string) {
    return await this.revenueService.calculatePropertyTax(propertyId);
  }
}
