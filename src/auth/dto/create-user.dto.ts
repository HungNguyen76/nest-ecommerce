import { Type } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { GENDER } from 'src/user/types/user.type';

export class CreateUserDto {
  @IsDefined()
  @IsNotEmpty()
  @Type(() => String)
  @MinLength(6)
  @MaxLength(16)
  @Matches(/[A-Za-z1-9]+/g, {
    message: 'username must only contain alphanumeric characters',
  })
  public readonly username: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public readonly email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  public readonly password: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  @IsEnum(GENDER)
  public readonly gender: GENDER;

  @IsDefined()
  @IsNotEmpty()
  @IsDateString()
  public readonly date_of_birth: Date | string;
}
