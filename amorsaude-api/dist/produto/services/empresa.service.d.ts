import { CreateEmpresaDto } from '../dto/create-empresa.dto';
import { UpdateEmpresaDto } from '../dto/update-empresa.dto';
import { Repository } from 'typeorm';
import { Empresa } from '../entities/empresa.entity';
import { AuthService } from 'src/auth/services/auth.service';
export declare class EmpresaService {
    private readonly empresaRepository;
    private authService;
    constructor(empresaRepository: Repository<Empresa>, authService: AuthService);
    create(createEmpresaDto: CreateEmpresaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEmpresaDto: UpdateEmpresaDto): string;
    remove(id: number): string;
}
