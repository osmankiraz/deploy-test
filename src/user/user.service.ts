import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userInstance = this.usersRepository.create(createUserDto);
    const _u = await this.usersRepository.findOneBy({ username:userInstance.username });
    if (_u) {
      throw new HttpException(`User already exist `, HttpStatus.CONFLICT);
    }
    const res = await this.usersRepository.save(userInstance);
    return res;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findOneByUserName(username: string) {
    const _user = await this.usersRepository.findOneBy({ username });
    if (_user) {
      return _user;
    } else {
      throw new HttpException(
        `User with id ${username} not found `,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
