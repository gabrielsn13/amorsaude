import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { UpdateProdutoDto } from '../dto/update-produto.dto';
import { Repository } from 'typeorm';
import { Produto } from '../entities/produto.entity';
import { AuthService } from 'src/auth/services/auth.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutoService {

    constructor(@InjectRepository(Produto) 
    private readonly usuarioRepository: Repository<Produto>,
    private authService: AuthService
  ){
  }

  create(createProdutoDto: CreateProdutoDto) {
    return 'This action adds a new produto';
  }

  findAll() {
    return `This action returns all produto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
