import { Repository } from 'typeorm';
import { Pagination } from 'nestjs-typeorm-paginate';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryDto } from 'src/common/dto/query.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User | null>;
    findAll(queryDto: QueryDto, isActive?: boolean): Promise<Pagination<User> | null>;
    findOne(id: string): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User | null>;
    remove(id: string): Promise<User | null>;
    updateProfile(id: string, filename: string): Promise<User | null>;
}
