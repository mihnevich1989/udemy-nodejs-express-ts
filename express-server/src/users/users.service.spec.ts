import 'reflect-metadata';
import { Container } from 'inversify';
import { IConfigService } from '../config/config.service.interface';
import { IUsersRepository } from './users.repository.interface';
import { IUserService } from './users.service.interface';
import { UserService } from './users.service';
import { TYPES } from '../types';
import { User } from './user.entity';
import { UserModel } from '@prisma/client';

const ConfigServiceMock: IConfigService = {
  get: jest.fn(),
};

const UsersRepositoryMock: IUsersRepository = {
  find: jest.fn(),
  create: jest.fn(),
};

const container = new Container();
let configService: IConfigService;
let usersRepository: IUsersRepository;
let usersService: IUserService;

beforeAll(() => {
  container.bind<IUserService>(TYPES.UserService).to(UserService);
  container.bind<IConfigService>(TYPES.ConfigService).toConstantValue(ConfigServiceMock);
  container.bind<IUsersRepository>(TYPES.UsersRepository).toConstantValue(UsersRepositoryMock);

  usersService = container.get<IUserService>(TYPES.UserService);
  configService = container.get<IConfigService>(TYPES.ConfigService);
  usersRepository = container.get<IUsersRepository>(TYPES.UsersRepository);
});

let createdUser: UserModel | null;

describe('User Service', () => {
  it('Create User', async () => {
    configService.get = jest.fn().mockReturnValueOnce('1');
    usersRepository.create = jest.fn().mockImplementationOnce(
      (user: User): UserModel => ({
        name: user.name,
        email: user.email,
        password: user.password,
        id: 1,
      }),
    );
    createdUser = await usersService.createUser({
      email: 'a@a.com',
      name: 'Jest Test',
      password: 'abc',
    });

    expect(createdUser?.id).toEqual(1);
    expect(createdUser?.password).not.toEqual('abc');
  });

  it('Validate user - success', async () => {
    usersRepository.find = jest.fn().mockReturnValueOnce(createdUser);
    const res = await usersService.validateUser({
      email: 'a@a.com',
      password: 'abc',
    });
    expect(res).toBeTruthy();
  });

  it('Validate user - wrong password', async () => {
    usersRepository.find = jest.fn().mockReturnValueOnce(createdUser);
    const res = await usersService.validateUser({
      email: 'a@a.com',
      password: 'fail',
    });
    expect(res).toBeFalsy();
  });

  it('Validate user - wrong email', async () => {
    usersRepository.find = jest.fn().mockReturnValueOnce(null);
    const res = await usersService.validateUser({
      email: 'a2222@a.com',
      password: 'abc',
    });
    expect(res).toBeFalsy();
  });
});
