import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ISizesColors } from '../interface/colorProduct.interface';

export class CreateColorProductDto {
  @IsDefined()
  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  public readonly _idProduct: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public readonly _id: string;

  @IsDefined()
  @IsArray()
  @IsString({
    each: true,
  })
  @ArrayMinSize(1)
  public readonly img: string[];

  @IsDefined()
  @IsArray()
  @ValidateNested({
    each: true,
  })
  @IsObject({
    each: true,
  })
  @ArrayMinSize(1)
  @Type(() => ISizesColors)
  public readonly sizes: ISizesColors[];

  @IsDefined()
  @IsNumber()
  public readonly price: number;
}
