import { CreateUsuarioDto } from "./create-usuario.dto";
import { IUsuario } from "../usuario.interface";
import { LoginUsuarioDto } from "./login-usuario.dto";
export declare class DtoHelperService {
    createUsuarioDtoToEntity(createUserDto: CreateUsuarioDto): IUsuario;
    loginUserDtoToEntity(LoginUsuarioDto: LoginUsuarioDto): IUsuario;
}
