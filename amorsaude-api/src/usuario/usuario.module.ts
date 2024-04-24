import { Module } from "@nestjs/common";
import { UsuarioController } from "./controller/usuario.controller";
import { UsuarioService } from "./services/usuario.service";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [
        AuthModule
    ],
    controllers: [UsuarioController],
    providers: [UsuarioService]
})
export class UsuarioModule{

}