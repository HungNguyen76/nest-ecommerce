import {
  BadRequestException,
  Body,
  Controller,
  ParseFilePipe,
  Post,
  UnsupportedMediaTypeException,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

import { diskStorage } from 'multer';
import { join } from 'path';

import { folderChecking } from 'src/utils/fs';
import { CreateColorProductDto } from './dto/create-color.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('addOne')
  @UseInterceptors(
    FileInterceptor('image', {
      fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/^(image)\/(png|jpg|jpeg|webp|svg\+xml)$/))
          cb(null, true);
        else
          cb(
            new UnsupportedMediaTypeException('File image is not valid type'),
            false,
          );
      },
      limits: {
        files: 1,
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

  @Post('upload-img')
  @UseInterceptors(
    FilesInterceptor('img', 100, {
      fileFilter: (req: Request, file, cb) => {
        if (file.mimetype.match(/^(image)\/(png|jpg|jpeg|webp|svg\+xml)$/))
          cb(null, true);
        else
          cb(
            new UnsupportedMediaTypeException('File image is not valid type'),
            false,
          );
      },
      storage: diskStorage({
        destination: async (req, file, cb) => {
          await folderChecking(
            join(__dirname, '..', '..', 'public/colorProduct'),
          );
          cb(null, join(__dirname, '..', '..', 'public/colorProduct'));
        },
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFiles(
      new ParseFilePipe({
        fileIsRequired: true,
      }),
    )
    file: Express.Multer.File[],
  ) {
    try {
      const [...listImage] = file.map(({ originalname }) => originalname);
      return listImage;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('colorProduct')
  async createColorProduct(
    @Body() createColorProductDto: CreateColorProductDto,
  ) {
    try {
      return await this.productService.createColorProduct(
        createColorProductDto,
      );
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
