import { EmpresaService } from '../services/empresa.service';
import { CreateEmpresaDto } from '../dto/create-empresa.dto';
import { UpdateEmpresaDto } from '../dto/update-empresa.dto';
import { IEmpresa } from '../empresa.interface';
export declare class EmpresaController {
    private readonly empresaService;
    constructor(empresaService: EmpresaService);
    create(createEmpresaDto: CreateEmpresaDto): Promise<import("../entities/empresa.entity").Empresa>;
    findAll(): Promise<IEmpresa[]>;
    findOne(id: string): Promise<import("../entities/empresa.entity").Empresa>;
    update(id: string, updateProdutoDto: UpdateEmpresaDto): Promise<import("../entities/empresa.entity").Empresa>;
    remove(id: string): Promise<import("../entities/empresa.entity").Empresa>;
}
