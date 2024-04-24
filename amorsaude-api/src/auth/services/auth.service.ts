import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { IUsuario } from "src/usuario/usuario.interface";

const bcrypt = require('bcrypt');

@Injectable()
export class AuthService{

    constructor(private jwtService: JwtService){

    }

    async generateJwt(user: IUsuario) {
        return this.jwtService.signAsync({user})
    }

    async hashPassword(password: string): Promise<string>{
        return bcrypt.hash(password, 12)
    }

    async comparePasswords(password: string, storedPasswordHash: string): Promise<boolean> {
        return bcrypt.compare(password, storedPasswordHash);
    }

    verifyJwt(jwt: string): Promise<any> {
        return this.jwtService.verifyAsync(jwt);
    }
}