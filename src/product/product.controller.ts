import {
  BadRequestException,
  Body,
  Controller,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

import { diskStorage } from 'multer';
import { join } from 'path';

import { folderChecking } from 'src/utils/fs';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('addOne')
  @UseInterceptors(
    FileInterceptor('image', {
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg|svg|webp)$/))
          cb(null, true);
        else cb(new BadRequestException('File image is not valid type'), false);
      },
      storage: diskStorage({
        destination: async (req, file, cb) => {
          await folderChecking(join(__dirname, '..', '..', 'public/product'));
          cb(null, join(__dirname, '..', '..', 'public/product'));
        },
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  async createOne(
    @UploadedFile(
      new ParseFilePipe({
        fileIsRequired: true,
      }),
    )
    file: Express.Multer.File,
    @Body() createProductDto: CreateProductDto,
  ) {
    try {
      await this.productService.createProduct({
        ...createProductDto,
        image: file.originalname,
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
