import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { DtoHelperService } from '../dto/dto-helper.service';
import { ILoginResponse, IUsuario } from '../usuario.interface';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { LoginUsuarioDto } from '../dto/login-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService,
              private dtoHelperService: DtoHelperService
  ) {}

  @Get('teste')
  teste(){
    return this.usuarioService.teste();
  }
  
  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<IUsuario> {
    const userEntity: IUsuario = await this.dtoHelperService.createUsuarioDtoToEntity(createUsuarioDto);
    return this.usuarioService.create(userEntity);
  }

  @Post('login')
  async login(@Body() loginUsuarioDto: LoginUsuarioDto): Promise<ILoginResponse>{
    const userEntity: IUsuario = await this.dtoHelperService.loginUserDtoToEntity(loginUsuarioDto);
    const jwt: string = await this.usuarioService.login(userEntity);
    return{
      access_token: jwt,
      token_type: 'JWT',
      expire_in: 10000
    }
  }

}
