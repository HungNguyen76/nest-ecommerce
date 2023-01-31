import { Module } from '@nestjs/common';
import { FooterService } from './footer.service';
import { FooterController } from './footer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FooterEntity } from 'src/entities/footer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FooterEntity])],
  controllers: [FooterController],
  providers: [FooterService],
})
export class FooterModule {}
