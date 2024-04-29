import { EmpresaService } from '../services/empresa.service';
import { CreateEmpresaDto } from '../dto/create-empresa.dto';
import { UpdateEmpresaDto } from '../dto/update-empresa.dto';
import { DtoHelperService } from 'src/empresa/dto/dto-helper.service';
export declare class EmpresaController {
    private readonly empresaService;
    private dtoHelperService;
    constructor(empresaService: EmpresaService, dtoHelperService: DtoHelperService);
    create(createEmpresaDto: CreateEmpresaDto): Promise<void>;
    findAll(): Promise<import("../entities/empresa.entity").Empresa[]>;
    findOne(id: string): string;
    update(id: string, updateProdutoDto: UpdateEmpresaDto): string;
    remove(id: string): string;
}
