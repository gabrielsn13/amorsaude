import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { AmorsaudeModule } from 'src/amorsaude/amorsaude.module';
import { UsuarioModule } from '../controller/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';

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
    UsuarioModule
]
})
export class AppModule {}
