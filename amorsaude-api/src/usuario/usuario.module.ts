import { Module } from "@nestjs/common";
import { UsuarioController } from "./controller/usuario.controller";
import { UsuarioService } from "./services/usuario.service";
import { AuthModule } from "src/auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.entity";
import { DtoHelperService } from "./dto/dto-helper.service";

@Module({
    imports: [
        AuthModule,
        TypeOrmModule.forFeature([Usuario])
    ],
    controllers: [UsuarioController],
    providers: [UsuarioService, DtoHelperService],
    exports: [UsuarioService],
})
export class UsuarioModule{

}