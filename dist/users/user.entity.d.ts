import { UserRole } from './user.role.enum';
export declare class User {
    id: string;
    username: string;
    email: string;
    password: string;
    role: UserRole;
    isActive: boolean;
    profile: string;
}
