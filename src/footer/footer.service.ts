import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { footerAPI } from 'src/data';
import { FooterEntity } from 'src/entities/footer.entity';
import { Repository } from 'typeorm';
import { CreateFooterDto } from './dto/create-footer.dto';

@Injectable()
export class FooterService {
  constructor(
    @InjectRepository(FooterEntity)
    private readonly footerRepository: Repository<FooterEntity>,
  ) {}
  async create(createFooterDto: CreateFooterDto) {
    const footer = this.footerRepository.create(footerAPI);
    return await this.footerRepository.save(footer);
  }

  async findAll() {
    return await this.footerRepository.find({});
  }
}
