import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HeroEntity } from 'src/entities/hero.entity';
import { Repository } from 'typeorm';
import { CreateHeroDto } from './dto/create-hero.dto';

@Injectable()
export class HeroService {
  constructor(
    @InjectRepository(HeroEntity)
    private readonly heroRepository: Repository<HeroEntity>,
  ) {}

  async create(createHeroDto: CreateHeroDto): Promise<CreateHeroDto> {
    const hero = this.heroRepository.create(createHeroDto);
    return await this.heroRepository.save(hero);
  }

  async findAll(): Promise<CreateHeroDto[]> {
    return await this.heroRepository.find({});
  }
}
