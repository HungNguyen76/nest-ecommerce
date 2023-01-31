import { Module } from '@nestjs/common';
import { StoryService } from './story.service';
import { StoryController } from './story.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoryEntity } from 'src/entities/story.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoryEntity])],
  controllers: [StoryController],
  providers: [StoryService],
})
export class StoryModule {}
