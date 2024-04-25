import { OnGatewayConnection } from '@nestjs/websockets';
import { Socket } from "socket.io";
import { AuthService } from 'src/auth/services/auth.service';
import { UsuarioService } from 'src/usuario/services/usuario.service';
export declare class AmorsaudeGateway implements OnGatewayConnection {
    private usuarioService;
    private authService;
    constructor(usuarioService: UsuarioService, authService: AuthService);
    handleConnection(socket: Socket): Promise<void>;
    private disconnect;
}
