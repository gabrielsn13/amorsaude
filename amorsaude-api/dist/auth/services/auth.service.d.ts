import { JwtService } from "@nestjs/jwt";
import { IUsuario } from "src/usuario/usuario.interface";
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    generateJwt(user: IUsuario): Promise<any>;
    hashPassword(password: string): Promise<string>;
    comparePasswords(password: string, storedPasswordHash: string): Promise<boolean>;
    verifyJwt(jwt: string): Promise<any>;
}
