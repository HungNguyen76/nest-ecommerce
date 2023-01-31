import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { SocialLink, VideoEmbed } from 'src/entities/hero.entity';

export class CreateHeroDto {
  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  public readonly title: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  public readonly subtitle: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  public readonly img: string;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  public readonly btntext: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VideoEmbed)
  public readonly videos: VideoEmbed[];

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SocialLink)
  public readonly sociallinks: SocialLink[];
}
