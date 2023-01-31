import { Module } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroController } from './hero.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroEntity } from 'src/entities/hero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HeroEntity])],
  controllers: [HeroController],
  providers: [HeroService],
})
export class HeroModule {}
