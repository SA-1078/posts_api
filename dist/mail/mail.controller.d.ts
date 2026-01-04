import { MailService } from './mail.service';
import { SendMailDto } from './dto/send-mail.dto';
import { SuccessResponseDto } from '../common/dto/response.dto';
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    sendGmail(dto: SendMailDto): Promise<SuccessResponseDto<{
        messageId: any;
    }>>;
    sendSendGrid(dto: SendMailDto): Promise<SuccessResponseDto<{
        status: number;
    }>>;
    getUsersFromPublicApi(): Promise<SuccessResponseDto<any>>;
}
