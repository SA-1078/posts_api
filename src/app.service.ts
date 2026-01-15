import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World desde los Poderosos Programadores de Tercer Semestre!';
  }

  getHealth() {
    return {
      service: 'posts-api service',
      message: 'Online',
    };
  }
}
