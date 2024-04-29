import { UpdateEmpresaDto } from '../dto/update-empresa.dto';
import { Repository } from 'typeorm';
import { Empresa } from '../entities/empresa.entity';
import { IEmpresa } from '../empresa.interface';
import { CreateEmpresaDto } from '../dto/create-empresa.dto';
export declare class EmpresaService {
    private readonly empresaRepository;
    constructor(empresaRepository: Repository<Empresa>);
    create(createEmpresaDto: CreateEmpresaDto): Promise<Empresa>;
    findAll(): Promise<IEmpresa[]>;
    findOne(id: number): Promise<Empresa>;
    update(id: number, empresa: UpdateEmpresaDto): Promise<Empresa>;
    remove(id: number): Promise<Empresa>;
}
