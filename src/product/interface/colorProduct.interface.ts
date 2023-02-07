import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';

export class ISizesColors {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public readonly size: string;

  @IsDefined()
  @IsNumber()
  @Min(1)
  public readonly quantity: number;
}
