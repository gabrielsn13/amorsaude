import { Injectable } from "@nestjs/common";
import { CreateUsuarioDto } from "./create-usuario.dto";
import { IUsuario } from "../usuario.interface";
import { LoginUsuarioDto } from "./login-usuario.dto";

@Injectable()
export class DtoHelperService {

    createUsuarioDtoToEntity(createUserDto: CreateUsuarioDto): IUsuario{
        return {
            email: createUserDto.email,
            password: createUserDto.password,
            username: createUserDto.username
        }
    }

    loginUserDtoToEntity(LoginUsuarioDto: LoginUsuarioDto): IUsuario {
        return{
            email: LoginUsuarioDto.email,
            password: LoginUsuarioDto.password
        }
    }
}