import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // redirect to documentation
  @Get()
  redirect(@Res() res: any) {
    return res.redirect('/docs');
  }
}
