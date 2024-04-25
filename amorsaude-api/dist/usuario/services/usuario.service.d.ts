import { Usuario } from '../entities/usuario.entity';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/services/auth.service';
import { IUsuario } from '../usuario.interface';
export interface Teste {
    titulo: string;
}
export declare class UsuarioService {
    private readonly usuarioRepository;
    private authService;
    constructor(usuarioRepository: Repository<Usuario>, authService: AuthService);
    teste(): string;
    create(newUsuario: IUsuario): Promise<IUsuario>;
    private existeEmail;
    private existeNomeUsuario;
    getUsuarioPorId(id: number): Promise<IUsuario>;
    private procurarPorUsuario;
    private procurarPorEmail;
    login(usuario: IUsuario): Promise<string>;
}
