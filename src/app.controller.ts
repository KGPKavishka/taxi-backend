import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getServerStatus(): string {
    return 'Taxi Backend API Running Successfully';
  }
}