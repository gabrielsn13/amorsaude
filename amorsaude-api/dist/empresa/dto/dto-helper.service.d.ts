import { IEmpresa } from "../empresa.interface";
import { CreateEmpresaDto } from "./create-empresa.dto";
export declare class DtoHelperService {
    createProdutoDtoToEntity(createProdutoDto: CreateEmpresaDto): IEmpresa;
}
