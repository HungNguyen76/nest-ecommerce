import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStoryDto {
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
  img: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  url: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  like: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  time: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  by: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  btn: string;
}
