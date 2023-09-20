import { Module } from '@nestjs/common';
import { DetailsController } from './details.controller';
import { DetailsService } from './details.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Details } from './entity/details.entity';
import { Student } from 'src/student/entity/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Details, Student])],
  controllers: [DetailsController],
  providers: [DetailsService],
})
export class DetailsModule {}
