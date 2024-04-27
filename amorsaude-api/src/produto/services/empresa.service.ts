import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto} from '../dto/create-empresa.dto';
import { UpdateEmpresaDto } from '../dto/update-empresa.dto';
import { Repository } from 'typeorm';
import { Empresa } from '../entities/empresa.entity';
import { AuthService } from 'src/auth/services/auth.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmpresaService {

    constructor(@InjectRepository(Empresa) 
    private readonly empresaRepository: Repository<Empresa>,
    private authService: AuthService
  ){
  }

  create(createEmpresaDto: CreateEmpresaDto) {
    return 'This action adds a new produto';
  }

  findAll() {
    return `This action returns all produto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
