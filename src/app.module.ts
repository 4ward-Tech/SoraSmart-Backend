import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AdminBoundariesModule } from './admin-boundaries/admin-boundaries.module';
import { LandlordsModule } from './landlords/landlords.module';
import { PropertiesModule } from './properties/properties.module';
import { SurveysModule } from './surveys/surveys.module';
import { ResponsesModule } from './responses/responses.module';
import { RevenueModule } from './revenue/revenue.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { AuditModule } from './audit/audit.module';

@Module({
  imports: [AuthModule, UsersModule, AdminBoundariesModule, LandlordsModule, PropertiesModule, SurveysModule, ResponsesModule, RevenueModule, AnalyticsModule, AuditModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
