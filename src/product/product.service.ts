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
    await this.findProductById(createColorProductDto._idProduct);

    return await this.productColorRepository.insert({
      ...createColorProductDto,
      product: createColorProductDto._idProduct,
    });
  }

  async findProductById(_id: string): Promise<ProductEntity> {
    const findOne = await this.productRepository.findOne({
      relations: ['productColors'],
      where: { _id },
    });

    if (!findOne)
      throw new NotFoundException({
        message: "This product isn't exist !",
      });
    else return findOne;
  }

  async getAll() {
    return await this.productRepository.find({
      relations: {
        productColors: true,
      },
    });
  }

  async deleteOne(_id: string) {
    const hadOne = await this.findProductById(_id);
    await this.productRepository.remove(hadOne);
    return;
  }
}
