import { Module } from '@nestjs/common';
import { PopularSaleService } from './popularsale.service';
import { PopularSaleController } from './popularsale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PopularSaleEntity } from 'src/entities/popularsale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PopularSaleEntity])],
  controllers: [PopularSaleController],
  providers: [PopularSaleService],
})
export class PopularSaleModule {}
