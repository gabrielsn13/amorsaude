import { Module } from "@nestjs/common";
import { UsuarioController } from "./controller/usuario.controller";
import { UsuarioService } from "./services/usuario.service";
import { AuthModule } from "src/auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.entity";

@Module({
    imports: [
        AuthModule,
        TypeOrmModule.forFeature([Usuario])
    ],
    controllers: [UsuarioController],
    providers: [UsuarioService]
})
export class UsuarioModule{

}