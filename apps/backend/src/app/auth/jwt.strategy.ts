import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'jlhlgvkgjhv', // Replace with a strong secret key
    });
  }

  async validate(payload: any) {
    const user = await this.authService.validateUser(payload.email, payload.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}