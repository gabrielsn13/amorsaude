import { Module } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { UsuarioController } from './usuario.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
