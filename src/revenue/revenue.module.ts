import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevenueController } from './revenue.controller';
import { RevenueService } from './revenue.service';
import { Property } from '../properties/entities/property.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Property])],
  controllers: [RevenueController],
  providers: [RevenueService],
})
export class RevenueModule {}
