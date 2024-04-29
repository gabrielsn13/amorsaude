import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateEmpresaDto } from '../dto/update-empresa.dto';
import { Repository } from 'typeorm';
import { Empresa } from '../entities/empresa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IEmpresa } from '../empresa.interface';
import { CreateEmpresaDto } from '../dto/create-empresa.dto';

@Injectable()
export class EmpresaService {

    constructor(@InjectRepository(Empresa) 
    private readonly empresaRepository: Repository<Empresa>
  ){
  }

  async create(createEmpresaDto: IEmpresa) {
    const empresa = this.empresaRepository.create(createEmpresaDto);

    return await this.empresaRepository.save(empresa);
  }

  async findAll(): Promise<IEmpresa[]> {
    return await this.empresaRepository.find();
  }

  async findOne(id: number) {
    return await this.empresaRepository.findOne({ where: { id }});
  }

  async update(id: number, empresa: IEmpresa) {
    const emp = await this.findOne(id)

    if(!emp){
      throw new NotFoundException();
    }

    Object.assign(emp, empresa);
    return await this.empresaRepository.save(emp);
  }

  async remove(id: number) {
    const emp = await this.findOne(id)

    if(!emp){
      throw new NotFoundException();
    }

    return await this.empresaRepository.remove(emp);
  }
}
