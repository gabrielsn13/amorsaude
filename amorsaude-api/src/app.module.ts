import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AmorsaudeModule } from './amorsaude/amorsaude.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from './auth.middleware';
import { EmpresaModule } from './empresa/empresa.module';
import { EmpresaController } from './empresa/controller/empresa.controller';
import { EmpresaService } from './empresa/services/empresa.service';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true
    }),
    AuthModule, 
    AmorsaudeModule, 
    UsuarioModule, 
    EmpresaModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        // {
        //   path: '/api/usuario/teste',
        //   method: RequestMethod.GET,
        // },
        {
          path: '/api/usuario',
          method: RequestMethod.POST,
        },
        {
          path: '/api/usuario/login',
          method: RequestMethod.POST,
        },
      )
      .forRoutes('');
  }
}
