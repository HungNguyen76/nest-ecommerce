import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { ProductColorEntity } from 'src/entities/productColor.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, ProductColorEntity])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
