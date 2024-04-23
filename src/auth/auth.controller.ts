import { Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(201)
  signup() {
    return this.authService.signup();
  }

  @Post('login')
  @HttpCode(200)
  signin() {
    return this.authService.login();
  }
}
