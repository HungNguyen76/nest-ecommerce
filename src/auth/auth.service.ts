import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{
    _id: string;
    username: string;
    email: string;
    accessToken: string;
  }> {
    const { email, password, username } = authCredentialsDto;
    const user = await this.usersRepository.findOne({
      where: { email, username },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { email, username };
      const accessToken: string = this.jwtService.sign(payload);
      return {
        _id: user.id,
        username: user.username,
        email: user.email,
        accessToken,
      };
    } else {
    }
  }
}
