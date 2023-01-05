import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

import { UsersService } from './users.service';
import { User } from './user.entity';

describe('UsersService', () => {
  let service: UsersService;
  // let userRepository: Partial<Repository<User>> ;

  beforeEach(async () => {
    const user: User = { id: 1, email:'ab@ac.com', password: 'asdf' } as User;
    // const user: User = plainToClass(User, { id: 1, email:'ab@ac.com', password: 'asdf' });

    // mo
    const mockedRepo = {
      // mock the repo `findOneOrFail`
      findOneOrFail: jest.fn((id) => Promise.resolve(user)),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService,
        // Mock the repository using the `getRepositoryToken` from @nestjs/typeorm
        {
          provide: getRepositoryToken(User),
          useValue: mockedRepo,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
