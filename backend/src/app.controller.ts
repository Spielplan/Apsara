import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('profile')
  getProfile() {
    return this.appService.getProfile();
  }

  @Post('contact')
  submitContact(
    @Body()
    payload: {
      name: string;
      email: string;
      company?: string;
      message: string;
    },
  ) {
    return this.appService.submitContact(payload);
  }
}
