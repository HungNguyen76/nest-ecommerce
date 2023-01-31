import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HeadingEntity } from 'src/entities/heading.entity';
import { Repository } from 'typeorm';
import { CreateHeadingDto } from './dto/create-heading.dto';

@Injectable()
export class HeadingService {
  constructor(
    @InjectRepository(HeadingEntity)
    private readonly headingRepository: Repository<HeadingEntity>,
  ) {}

  async create(createHeadingDto: CreateHeadingDto): Promise<CreateHeadingDto> {
    const heading = this.headingRepository.create(createHeadingDto);
    return await this.headingRepository.save(heading);
  }

  async findAll(): Promise<CreateHeadingDto[]> {
    return await this.headingRepository.find({});
  }
}
