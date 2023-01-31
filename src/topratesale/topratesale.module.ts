import { Module } from '@nestjs/common';
import { TopRateSaleService } from './topratesale.service';
import { TopratesaleController } from './topratesale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopSaleEntity } from 'src/entities/topratesale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TopSaleEntity])],
  controllers: [TopratesaleController],
  providers: [TopRateSaleService],
})
export class TopRateSaleModule {}
