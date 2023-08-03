import { UserModel } from '@prisma/client';
import { IUsersRepository } from './users.repository.interface';
import { User } from './user.entity';
import { inject, injectable } from 'inversify';
import { PrismaService } from '../database/prisma.service';
import { TYPES } from '../types';

@injectable()
export class UsersRepository implements IUsersRepository {
  constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

  async create({ email, name, password }: User): Promise<UserModel> {
    return this.prismaService.client.userModel.create({
      data: { email, name, password },
    });
  }

  async find(email: string): Promise<UserModel | null> {
    return this.prismaService.client.userModel.findFirst({
      where: { email },
    });
  }
}
