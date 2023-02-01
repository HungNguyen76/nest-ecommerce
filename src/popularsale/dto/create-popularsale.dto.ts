import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
} from 'class-validator';
import { IImagesPopular } from 'src/interface/hasItem.type';

export class CreatePopularSaleDto {
  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  public readonly title: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  public readonly text: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  public readonly rating: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  public readonly stars: number;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  public readonly btn: string;

  public readonly img: Express.Multer.File[] | string;

  @IsNotEmpty()
  @Type(() => String)
  @IsNumberString()
  public readonly price: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  public readonly reviews: number;

  public readonly images: Express.Multer.File[] | IImagesPopular[];

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  public readonly description: string;

  @IsNotEmpty()
  @IsString()
  public readonly color: string;

  @Type(() => String)
  @IsString()
  public readonly shadow: string;
}
