import { UsuarioService } from '../services/usuario.service';
import { DtoHelperService } from '../dto/dto-helper.service';
import { ILoginResponse, IUsuario } from '../usuario.interface';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { LoginUsuarioDto } from '../dto/login-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    private dtoHelperService;
    constructor(usuarioService: UsuarioService, dtoHelperService: DtoHelperService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<IUsuario>;
    login(loginUsuarioDto: LoginUsuarioDto): Promise<ILoginResponse>;
}
