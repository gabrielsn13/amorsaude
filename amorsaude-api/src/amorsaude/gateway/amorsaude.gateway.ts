// import { UnauthorizedException } from '@nestjs/common';
// import { OnGatewayConnection, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
// import { Socket } from "socket.io"
// import { AuthService } from 'src/auth/services/auth.service';
// import { UsuarioService } from 'src/usuario/services/usuario.service';
// import { IUsuario } from 'src/usuario/usuario.interface';

// @WebSocketGateway({namespace: 'amorsaude', cors: { origin: ['http://localhost:3000', 'http://localhost:4200']}})
// export class AmorsaudeGateway implements OnGatewayConnection {

//   constructor(private usuarioService: UsuarioService, private authService: AuthService){
//   }

//   async handleConnection(socket: Socket) {

//     try
//     {
//       //se o token nao é verificado
//       //ira retornar uma excecao e desconectar o usuario
//       console.log(socket.handshake.auth.Authorization);
//       const decodedToken = await this.authService.verifyJwt(socket.handshake.auth.Authorization);

//       const usuario: IUsuario = await this.usuarioService.getUsuarioPorId(decodedToken.user.id);

//       if(!usuario){
//         console.log('usuario desconectado');
//         return this.disconnect(socket);
//       }else{
//         console.log(usuario);
//       }
//     }
//     catch
//     {
//       console.log('usuario desconectado');
//       return this.disconnect(socket);
//     }

//   }

//   private disconnect(socket: Socket){
//     socket.emit('Error', new UnauthorizedException());
//     socket.disconnect();
//   }
// }
