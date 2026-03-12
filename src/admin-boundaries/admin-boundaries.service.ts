import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminBoundary } from './entities/admin-boundary.entity';
import { CreateAdminBoundaryDto } from './dto/create-admin-boundary.dto';

@Injectable()
export class AdminBoundariesService {
  constructor(
    @InjectRepository(AdminBoundary)
    private readonly adminBoundaryRepository: Repository<AdminBoundary>,
  ) {}

  async create(createAdminBoundaryDto: CreateAdminBoundaryDto): Promise<AdminBoundary> {
    const { parentId, ...rest } = createAdminBoundaryDto;
    const boundary = this.adminBoundaryRepository.create(rest);

    if (parentId) {
      const parent = await this.adminBoundaryRepository.findOne({ where: { id: parentId } });
      if (parent) {
        boundary.parent = parent;
      }
    }

    return await this.adminBoundaryRepository.save(boundary);
  }

  async findAll(): Promise<AdminBoundary[]> {
    return await this.adminBoundaryRepository.find();
  }

  async findOne(id: string): Promise<AdminBoundary> {
    const boundary = await this.adminBoundaryRepository.findOne({ where: { id } });
    if (!boundary) {
      throw new NotFoundException(`Admin Boundary with ID ${id} not found`);
    }
    return boundary;
  }

  /**
   * Finds all boundaries that contain the specified point (lng, lat)
   */
  async findBoundariesContainingPoint(lng: number, lat: number): Promise<AdminBoundary[]> {
    return await this.adminBoundaryRepository
      .createQueryBuilder('boundary')
      .where('ST_Contains(boundary.boundary, ST_SetSRID(ST_Point(:lng, :lat), 4326))', {
        lng,
        lat,
      })
      .getMany();
  }
}
