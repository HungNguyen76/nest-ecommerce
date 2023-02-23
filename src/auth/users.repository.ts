import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserEntity } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepository extends Repository<UserEntity> {
  constructor(private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { email, password } = authCredentialsDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = this.create({ email, password: hashedPassword });
    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        //duplicate email
        throw new ConflictException('Email already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
