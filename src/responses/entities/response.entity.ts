import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Survey } from '../../surveys/entities/survey.entity';

@Entity('responses')
export class Response {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'jsonb' })
  answers: any; // Object mapping question IDs to answers: { questionId: answer }

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  submissionLocation: any; // GeoJSON Point for where the survey was taken

  @ManyToOne(() => Survey, (survey) => survey.responses)
  survey: Survey;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
