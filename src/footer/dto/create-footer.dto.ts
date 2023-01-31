import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { ILinkFooter, ITitleFooter } from 'src/entities/footer.entity';

export class CreateFooterDto {
  @IsNotEmpty()
  @IsArray({})
  @ValidateNested({ each: true })
  titles: ITitleFooter[];

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  links: ILinkFooter[][];
}
