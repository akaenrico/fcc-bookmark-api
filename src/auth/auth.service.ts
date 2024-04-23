import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { message: 'Hello World :: Signup' };
  }

  login() {
    return { message: 'Hello World :: Login' };
  }
}
