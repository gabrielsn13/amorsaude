import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AmorsaudeModule } from './amorsaude/amorsaude.module';
import { UsuarioModule } from './usuario/controller/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    AuthModule, 
    AmorsaudeModule, 
    UsuarioModule]
})
export class AppModule {}
