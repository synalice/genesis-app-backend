import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  newLead(): string {
    return 'New Lead!';
  }

  newCompany(): string {
    return 'New Company!';
  }

  newContact(): string {
    return 'New Contact!';
  }
}
