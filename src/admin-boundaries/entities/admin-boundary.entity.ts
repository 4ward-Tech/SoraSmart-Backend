import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Tree, TreeParent, TreeChildren } from 'typeorm';

export enum BoundaryType {
  REGION = 'REGION',
  DISTRICT = 'DISTRICT',
  WARD = 'WARD',
  ZONE = 'ZONE',
}

@Entity('admin_boundaries')
@Tree('materialized-path')
export class AdminBoundary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: BoundaryType,
  })
  type: BoundaryType;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Polygon',
    srid: 4326,
    nullable: true,
  })
  boundary: any; // GeoJSON Polygon

  @TreeParent()
  parent: AdminBoundary;

  @TreeChildren()
  children: AdminBoundary[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
