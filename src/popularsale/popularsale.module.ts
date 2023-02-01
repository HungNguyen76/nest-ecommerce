import { Module } from '@nestjs/common';
import { PopularSaleService } from './popularsale.service';
import { PopularSaleController } from './popularsale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PopularSaleEntity } from 'src/entities/popularsale.entity';
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, join(__dirname, '..', '..', 'public/test'));
        },
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
    TypeOrmModule.forFeature([PopularSaleEntity]),
  ],
  controllers: [PopularSaleController],
  providers: [PopularSaleService],
})
export class PopularSaleModule {}
