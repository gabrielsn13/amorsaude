import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpresaService } from '../services/empresa.service';
import { CreateEmpresaDto } from '../dto/create-empresa.dto';
import { UpdateEmpresaDto } from '../dto/update-empresa.dto';
import { IEmpresa } from '../empresa.interface';
import { DtoHelperService } from 'src/empresa/dto/dto-helper.service';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService,
              private dtoHelperService: DtoHelperService
  ) {}

  @Post()
  async create(@Body() createEmpresaDto: CreateEmpresaDto) {
    const produtoEntity: IEmpresa = await this.dtoHelperService.createEmpresaDtoToEntity(createEmpresaDto);
    return this.empresaService.create(produtoEntity);
  }

  @Get()
  findAll() {
    return this.empresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateEmpresaDto) {
    return this.empresaService.update(+id, updateProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresaService.remove(+id);
  }
}
