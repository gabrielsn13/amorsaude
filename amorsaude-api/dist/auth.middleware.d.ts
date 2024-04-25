import { NestMiddleware } from '@nestjs/common';
import { AuthService } from './auth/services/auth.service';
import { UsuarioService } from './usuario/services/usuario.service';
import { IUsuario } from './usuario/usuario.interface';
import { NextFunction } from 'express';
export interface RequestModel {
    user: IUsuario;
    headers: any;
}
export declare class AuthMiddleware implements NestMiddleware {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UsuarioService);
    use(request: RequestModel, response: Response, next: NextFunction): Promise<void>;
}
