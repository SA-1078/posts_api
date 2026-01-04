import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<SuccessResponseDto<{
        access_token: string;
    }>>;
    register(createUserDto: CreateUserDto): Promise<SuccessResponseDto<{
        access_token: string;
    }>>;
}
