import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findOne(id: string) {
    const hadUser = await this.userRepository.findOneBy({ id });

    if (!hadUser) throw new NotFoundException('This user does not exist !');
    else return hadUser;
  }

  async remove(id: string) {
    const hadUser = await this.findOne(id);
    return await this.userRepository.delete(hadUser);
  }
}
