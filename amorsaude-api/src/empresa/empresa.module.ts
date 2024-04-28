import { Module } from '@nestjs/common';
import { EmpresaService } from './services/empresa.service';
import { EmpresaController } from './controller/empresa.controller';

@Module({
  controllers: [EmpresaController],
  providers: [EmpresaService],
})
export class EmpresaModule {}
