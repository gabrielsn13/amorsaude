import { Repository } from 'typeorm';
import { Empresa } from '../entities/empresa.entity';
import { IEmpresa } from '../empresa.interface';
export declare class EmpresaService {
    private readonly empresaRepository;
    constructor(empresaRepository: Repository<Empresa>);
    create(empresa: IEmpresa): string;
    findAll(): Promise<Empresa[]>;
    findOne(id: number): string;
    update(id: number, empresa: IEmpresa): string;
    remove(id: number): string;
}
