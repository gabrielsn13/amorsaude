import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../entities/usuario.entity';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/services/auth.service';
import { IUsuario } from '../usuario.interface';

export interface Teste{
  titulo: string;
}

@Injectable()
export class UsuarioService {

  constructor(@InjectRepository(Usuario) 
              private readonly usuarioRepository: Repository<Usuario>,
              private authService: AuthService
            ){
  }

  async create(newUsuario: IUsuario): Promise<IUsuario>{
    const existeEmail: boolean = await this.existeEmail(newUsuario.email);
    const existeNomeUsuario: boolean = await this.existeNomeUsuario(newUsuario.username);

    if(existeEmail === false && existeNomeUsuario === false){
      const passwordHash: string = await this.authService.hashPassword(newUsuario.password);
      newUsuario.password = passwordHash;
      newUsuario.email = newUsuario.email.toLowerCase();
      newUsuario.username = newUsuario.username.toLowerCase();

      const user = await this.usuarioRepository.save(this.usuarioRepository.create(newUsuario));
      return this.procurarPorUsuario(user.id);
    }
    else{
      throw new HttpException('Email ou usuario ja criados', HttpStatus.CONFLICT);
    }
  }

  private async existeEmail(email: string): Promise<boolean>{
    const usuario = await this.usuarioRepository.findOne({
      where: {email}
    });
    return !!usuario;
  }

  private async existeNomeUsuario(username: string): Promise<boolean>{
    const usuario = await this.usuarioRepository.findOne({
      where: {username}
    });
    return !!usuario;
  }

  async getUsuarioPorId(id: number): Promise<IUsuario> {
    return this.usuarioRepository.findOneOrFail({
      where: {
        id: id,
      },
    });
  }


  private async procurarPorUsuario(id: number): Promise<IUsuario>{
    return this.usuarioRepository.findOne({
      where: {id}
    });
  }

  private async procurarPorEmail(email: string): Promise<IUsuario>{
    return this.usuarioRepository.findOne({
      where: {email},
      select: ['id', 'email', 'password', 'username']
    })
  }

  async login(usuario: IUsuario): Promise<string>{
    const usuarioEncontrado: IUsuario = await this.procurarPorEmail(usuario.email);

    if(usuarioEncontrado){
      const passwordsMatchin: boolean = await this.authService.comparePasswords(usuario.password, usuarioEncontrado.password);

      if(passwordsMatchin === true){
        const payload: IUsuario = await this.procurarPorUsuario(usuarioEncontrado.id);
        return this.authService.generateJwt(payload);
      }
      else
      {
        throw new HttpException('Login invalido, credenciais erradas', HttpStatus.UNAUTHORIZED)
      }
    }
    else{
      throw new HttpException('Usuario nao encontrado', HttpStatus.NOT_FOUND);
    }
  }
}
