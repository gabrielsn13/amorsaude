import { Module } from '@nestjs/common';
import { EmpresaService } from './services/empresa.service';
import { EmpresaController } from './controller/empresa.controller';
import { DtoHelperService } from './dto/dto-helper.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Empresa } from './entities/empresa.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Empresa])
],
  controllers: [EmpresaController],
  providers: [EmpresaService, DtoHelperService],
  exports: [EmpresaService]
})
export class EmpresaModule {}
