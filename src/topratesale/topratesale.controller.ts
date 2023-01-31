import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { TopRateSaleService } from './topratesale.service';
import { CreateTopRateSaleDto } from './dto/create-topratesale.dto';
import { IHasItem } from 'src/interface/hasItem.type';

@Controller('topratesale')
export class TopratesaleController {
  constructor(private readonly topRateSaleService: TopRateSaleService) {}

  @Post()
  async create(@Body() createTopRateSaleDto: CreateTopRateSaleDto) {
    try {
      return await this.topRateSaleService.create(createTopRateSaleDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  async findAll(): Promise<Pick<IHasItem<CreateTopRateSaleDto>, 'items'>> {
    try {
      return await this.topRateSaleService.findAll();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
