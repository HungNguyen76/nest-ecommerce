import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TopSaleEntity } from 'src/entities/topratesale.entity';
import { IHasItem } from 'src/interface/hasItem.type';
import { Repository } from 'typeorm';
import { CreateTopRateSaleDto } from './dto/create-topratesale.dto';

@Injectable()
export class TopRateSaleService {
  constructor(
    @InjectRepository(TopSaleEntity)
    private readonly topRateSaleRepository: Repository<TopSaleEntity>,
  ) {}
  async create(createTopRateSaleDto: CreateTopRateSaleDto) {
    const topRateSale = this.topRateSaleRepository.create(createTopRateSaleDto);

    return await this.topRateSaleRepository.save(topRateSale);
  }

  async findAll(): Promise<Omit<IHasItem<CreateTopRateSaleDto>, 'news'>> {
    const topRates = await this.topRateSaleRepository.find({});
    return {
      title: 'Top Rated Sales',
      items: [...topRates],
    };
  }
}
