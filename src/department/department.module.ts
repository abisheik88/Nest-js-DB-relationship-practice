import { Module } from '@nestjs/common';
import { departmentController } from './department.controller';
import { departmentService } from './department.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entity/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  controllers: [departmentController],
  providers: [departmentService],
})
export class DepartmentModule {}
