import { UserRole } from '../user.role.enum';
export declare class CreateUserDto {
    username: string;
    email: string;
    password: string;
    role: UserRole;
}
