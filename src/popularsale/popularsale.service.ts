import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PopularSaleEntity } from 'src/entities/popularsale.entity';
import { IHasItem } from 'src/interface/hasItem.type';
import { Repository } from 'typeorm';
import { CreatePopularSaleDto } from './dto/create-popularsale.dto';

@Injectable()
export class PopularSaleService {
  constructor(
    @InjectRepository(PopularSaleEntity)
    private readonly popularSaleRepository: Repository<PopularSaleEntity>,
  ) {}
  async create(
    createPopularSaleDto: CreatePopularSaleDto,
  ): Promise<CreatePopularSaleDto> {
    const polulars = this.popularSaleRepository.create(createPopularSaleDto);
    return await this.popularSaleRepository.save(polulars);
  }

  async findAll(): Promise<Omit<IHasItem<CreatePopularSaleDto>, 'news'>> {
    const popular_sales = await this.popularSaleRepository.find({});
    return {
      title: 'Popular Sales',
      items: [...popular_sales],
    };
  }
}
