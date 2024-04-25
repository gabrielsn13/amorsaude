import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { AuthService } from './auth/services/auth.service';
import { UsuarioService } from './usuario/services/usuario.service';
import { IUsuario } from './usuario/usuario.interface';
import { NextFunction } from 'express';

export interface RequestModel {
  user: IUsuario;
  headers: any;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private authService: AuthService,
    private userService: UsuarioService,
  ) {}

  async use(request: RequestModel, response: Response, next: NextFunction) {
    try {
      console.log('request', request);
      const tokenArray: string[] = request.headers['authorization'].split(' ');

      const decodedToken = await this.authService.verifyJwt(tokenArray[1]);

      const user: IUsuario = await this.userService.getUsuarioPorId(
        decodedToken.user.id,
      );
      if (user) {
        request.user = user;
        next();
      } else {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }
    } catch {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }
}
