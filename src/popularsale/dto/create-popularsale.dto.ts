import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ImagePopularSale } from 'src/entities/popularsale.entity';

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
  @Type(() => String)
  @IsNumberString()
  public readonly rating: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  public readonly stars: number;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  public readonly btn: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  public readonly img: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsNumberString()
  public readonly price: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  public readonly reviews: number;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImagePopularSale)
  public readonly images: ImagePopularSale[];

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
