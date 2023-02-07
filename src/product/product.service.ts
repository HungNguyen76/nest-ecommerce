import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { ProductColorEntity } from 'src/entities/productColor.entity';
import { Repository } from 'typeorm';
import { CreateColorProductDto } from './dto/create-color.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(ProductColorEntity)
    private readonly productColorRepository: Repository<ProductColorEntity>,
  ) {}

  async createProduct(createProductDto: CreateProductDto) {
    return await this.productRepository.insert(createProductDto);
  }

  async createColorProduct(createColorProductDto: CreateColorProductDto) {
    const findOne = await this.productRepository.findOne({
      where: {
        _id: createColorProductDto._idProduct,
      },
    });

    if (!findOne)
      throw new NotFoundException({
        message: "This product isn't exist !",
      });

    return await this.productRepository.save({
      _id: createColorProductDto._idProduct,
      productColors: createColorProductDto,
    });
  }
}
