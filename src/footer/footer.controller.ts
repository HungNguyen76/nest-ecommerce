import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { FooterService } from './footer.service';
import { CreateFooterDto } from './dto/create-footer.dto';

@Controller('footer')
export class FooterController {
  constructor(private readonly footerService: FooterService) {}

  @Post()
  async create(@Body() createFooterDto: CreateFooterDto) {
    try {
      return await this.footerService.create(createFooterDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll() {
    try {
      return await this.footerService.findAll();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
