import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutoService } from '../services/produto.service';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { UpdateProdutoDto } from '../dto/update-produto.dto';
import { IProduto } from '../produto.interface';
import { DtoHelperService } from 'src/produto/dto/dto-helper.service';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService,
              private dtoHelperService: DtoHelperService
  ) {}

  @Post()
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    const produtoEntity: IProduto = await this.dtoHelperService.createProdutoDtoToEntity(createProdutoDto);
    return this.produtoService.create(produtoEntity);
  }

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(+id, updateProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtoService.remove(+id);
  }
}
