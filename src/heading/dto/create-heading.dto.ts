import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHeadingDto {
  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  heading: string;

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
  btn: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  url: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  img: string;
}
