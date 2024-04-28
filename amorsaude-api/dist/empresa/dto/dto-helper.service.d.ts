import { IEmpresa } from "../empresa.interface";
import { CreateEmpresaDto } from "./create-empresa.dto";
export declare class DtoHelperService {
    createEmpresaDtoToEntity(createProdutoDto: CreateEmpresaDto): IEmpresa;
}
