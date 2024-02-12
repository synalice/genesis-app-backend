import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('new-lead')
  newLead(): string {
    return this.appService.newLead();
  }

  @Post('new-company')
  newCompany(): string {
    return this.appService.newCompany();
  }

  @Post('new-contact')
  newContact(): string {
    return this.appService.newContact();
  }
}
