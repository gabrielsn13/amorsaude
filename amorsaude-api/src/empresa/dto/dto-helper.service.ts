import { Injectable } from "@nestjs/common";
import { IEmpresa } from "../empresa.interface";
import { CreateEmpresaDto } from "./create-empresa.dto";

@Injectable()
export class DtoHelperService {

    createEmpresaDtoToEntity(createProdutoDto: CreateEmpresaDto): IEmpresa{
        console.log('teste cadastrar empresa', createProdutoDto);
        return {
            razaoSocial: createProdutoDto.razaoSocial,
            nomeFantasia: createProdutoDto.nomeFantasia,
            cnpj: createProdutoDto.cnpj,
            regional: createProdutoDto.regional
        }
    }
}