import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { StoryService } from './story.service';
import { CreateStoryDto } from './dto/create-story.dto';
import { IHasItem } from 'src/interface/hasItem.type';

@Controller('story')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Post()
  async create(
    @Body() createStoryDto: CreateStoryDto,
  ): Promise<CreateStoryDto> {
    try {
      return await this.storyService.create(createStoryDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  async findAll(): Promise<Pick<IHasItem<CreateStoryDto>, 'news'>> {
    return await this.storyService.findAll();
  }
}
