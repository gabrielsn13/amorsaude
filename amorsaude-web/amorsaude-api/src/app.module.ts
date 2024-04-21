import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AmorsaudeModule } from './amorsaude/amorsaude.module';
import { UsuarioModule } from './usuario/controller/usuario.module';

@Module({
  imports: [AuthModule, AmorsaudeModule, UsuarioModule]
})
export class AppModule {}
