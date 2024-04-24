import { IsString, IsNotEmpty } from "class-validator";
import { LoginUsuarioDto } from "./login-usuario.dto";

export class CreateUsuarioDto extends LoginUsuarioDto{

    @IsString()
    username: string;

    @IsNotEmpty()
    password: string;
}
