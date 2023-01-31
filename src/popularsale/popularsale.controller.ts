import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { PopularSaleService } from './popularsale.service';
import { CreatePopularSaleDto } from './dto/create-popularsale.dto';
import { IHasItem } from 'src/interface/hasItem.type';
@Controller('popularsale')
export class PopularSaleController {
  constructor(private readonly popularSaleService: PopularSaleService) {}

  @Post()
  async create(
    @Body() createPopularSaleDto: CreatePopularSaleDto,
  ): Promise<CreatePopularSaleDto> {
    try {
      return await this.popularSaleService.create(createPopularSaleDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  async findAll(): Promise<Pick<IHasItem<CreatePopularSaleDto>, 'items'>> {
    try {
      return await this.popularSaleService.findAll();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
