import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { HeadingService } from './heading.service';
import { CreateHeadingDto } from './dto/create-heading.dto';
@Controller('heading')
export class HeadingController {
  constructor(private readonly headingService: HeadingService) {}

  @Post()
  async create(
    @Body() createHeadingDto: CreateHeadingDto,
  ): Promise<CreateHeadingDto> {
    try {
      return await this.headingService.create(createHeadingDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  findAll(): Promise<CreateHeadingDto[]> {
    return this.headingService.findAll();
  }
}
