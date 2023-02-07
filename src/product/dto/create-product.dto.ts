import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { TypeProduct } from '../interface/product.interface';
export class CreateProductDto {
  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  public readonly _id: string;

  public readonly image: string;

  @IsNotEmpty()
  @Type(() => Boolean)
  @IsBoolean()
  public readonly new: boolean;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  public readonly title: string;

  @IsNotEmpty()
  @IsEnum(TypeProduct)
  public readonly type: TypeProduct;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  public readonly subtitle: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  public readonly description: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  public readonly color: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  public readonly reviews: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  public readonly stars: number;
}
