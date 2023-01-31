import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateTopRateSaleDto {
  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  title: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  text: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  rating: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  btn: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  img: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsNumberString()
  price: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  color: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  shadow: string;
}
