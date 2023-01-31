import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoryEntity } from 'src/entities/story.entity';
import { Repository } from 'typeorm';
import { CreateStoryDto } from './dto/create-story.dto';

@Injectable()
export class StoryService {
  constructor(
    @InjectRepository(StoryEntity)
    private readonly storyRepository: Repository<StoryEntity>,
  ) {}
  async create(createStoryDto: CreateStoryDto) {
    const stories = this.storyRepository.create(createStoryDto);
    return await this.storyRepository.save(stories);
  }

  async findAll() {
    const stories = await this.storyRepository.find({});
    return {
      title: 'Top Stories',
      news: [...stories],
    };
  }
}
