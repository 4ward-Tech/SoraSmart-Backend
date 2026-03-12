import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { AdminBoundariesService } from './admin-boundaries.service';
import { CreateAdminBoundaryDto } from './dto/create-admin-boundary.dto';
import { AdminBoundary } from './entities/admin-boundary.entity';

@Controller('admin-boundaries')
export class AdminBoundariesController {
  constructor(private readonly adminBoundariesService: AdminBoundariesService) {}

  @Post()
  async create(@Body() createAdminBoundaryDto: CreateAdminBoundaryDto): Promise<AdminBoundary> {
    return await this.adminBoundariesService.create(createAdminBoundaryDto);
  }

  @Get()
  async findAll(): Promise<AdminBoundary[]> {
    return await this.adminBoundariesService.findAll();
  }

  @Get('check-location')
  async checkLocation(
    @Query('lat') lat: number,
    @Query('lng') lng: number,
  ): Promise<AdminBoundary[]> {
    return await this.adminBoundariesService.findBoundariesContainingPoint(lng, lat);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AdminBoundary> {
    return await this.adminBoundariesService.findOne(id);
  }
}
