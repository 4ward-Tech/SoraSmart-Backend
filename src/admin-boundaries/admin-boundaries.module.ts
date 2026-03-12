import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminBoundariesService } from './admin-boundaries.service';
import { AdminBoundariesController } from './admin-boundaries.controller';
import { AdminBoundary } from './entities/admin-boundary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminBoundary])],
  providers: [AdminBoundariesService],
  controllers: [AdminBoundariesController],
})
export class AdminBoundariesModule {}
