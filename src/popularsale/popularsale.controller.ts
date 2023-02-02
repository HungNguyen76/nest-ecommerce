import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
  UseInterceptors,
  UploadedFiles,
  ParseFilePipe,
} from '@nestjs/common';
import { PopularSaleService } from './popularsale.service';
import { CreatePopularSaleDto } from './dto/create-popularsale.dto';
import { IHasItem } from 'src/interface/hasItem.type';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import * as _ from 'lodash';
@Controller('popularsale')
export class PopularSaleController {
  constructor(private readonly popularSaleService: PopularSaleService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'img', maxCount: 1 }, { name: 'images' }]),
  )
  async create(
    @Body() createPopularSaleDto: CreatePopularSaleDto,
    @UploadedFiles(new ParseFilePipe())
    file: { img: Express.Multer.File[]; images: Express.Multer.File[] },
  ): Promise<CreatePopularSaleDto> {
    try {
      return await this.popularSaleService.create({
        ...createPopularSaleDto,
        img: file.img ? file.img[0].originalname : '',
        images: _.map(file.images, (file) =>
          _.pick(file, ['originalname', 'mimetype', 'size']),
        ),
      });
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
