import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AmorsaudeModule } from './amorsaude/amorsaude.module';
import { UsuarioModule } from './usuario/controller/usuario.module';

@Module({
  imports: [AuthModule, AmorsaudeModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
