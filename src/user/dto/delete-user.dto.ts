import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class DeleteUser {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  email: string;
}
