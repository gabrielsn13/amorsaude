import { Injectable } from '@nestjs/common';
import { UpdateEmpresaDto } from '../dto/update-empresa.dto';
import { Repository } from 'typeorm';
import { Empresa } from '../entities/empresa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IEmpresa } from '../empresa.interface';

@Injectable()
export class EmpresaService {

    constructor(@InjectRepository(Empresa) 
    private readonly empresaRepository: Repository<Empresa>
  ){
  }

  async create(empresa: IEmpresa) {
    await this.empresaRepository.save(this.empresaRepository.create(empresa));
  }

  findAll() {
    return this.empresaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, empresa: IEmpresa) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
