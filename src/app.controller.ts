import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { collectDefaultMetrics, register } from 'prom-client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    // collectDefaultMetrics();
  }

  @Get('metrics')
  async getMetrics(): Promise<string> {
    return register.metrics();
  }
}
