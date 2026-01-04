import { SendMailDto } from './dto/send-mail.dto';
export declare class MailService {
    fetchUserListFromPublicApi(): Promise<any>;
    sendWithSendGrid(dto: SendMailDto): Promise<{
        status: number;
    }>;
    sendMail(dto: SendMailDto): Promise<{
        messageId: any;
    }>;
}
