import { Module } from '@nestjs/common';
import { HeadingService } from './heading.service';
import { HeadingController } from './heading.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeadingEntity } from 'src/entities/heading.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HeadingEntity])],
  controllers: [HeadingController],
  providers: [HeadingService],
})
export class HeadingModule {}
