import { Module } from '@nestjs/common';
import { AdminBoundariesService } from './admin-boundaries.service';

@Module({
  providers: [AdminBoundariesService]
})
export class AdminBoundariesModule {}
