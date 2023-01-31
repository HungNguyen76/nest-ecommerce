import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { HeroService } from './hero.service';
import { CreateHeroDto } from './dto/create-hero.dto';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post()
  async create(@Body() createHeroDto: CreateHeroDto): Promise<CreateHeroDto> {
    try {
      return await this.heroService.create(createHeroDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  async findAll(): Promise<CreateHeroDto[]> {
    try {
      return await this.heroService.findAll();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
