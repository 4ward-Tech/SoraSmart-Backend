import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { Property } from '../properties/entities/property.entity';
import { AdminBoundary } from '../admin-boundaries/entities/admin-boundary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Property, AdminBoundary])],
  providers: [AnalyticsService],
  controllers: [AnalyticsController],
})
export class AnalyticsModule {}
