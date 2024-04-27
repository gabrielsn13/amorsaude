import { Injectable } from "@nestjs/common";
import { IEmpresa } from "../produto.interface";
import { CreateEmpresaDto } from "./create-empresa.dto";

@Injectable()
export class DtoHelperService {

    createProdutoDtoToEntity(createProdutoDto: CreateEmpresaDto): IEmpresa{
        return {
            razaoSocial: createProdutoDto.razaoSocial,
            nomeFantasia: createProdutoDto.nomeFantasia,
            cnpj: createProdutoDto.cnpj,
            regional: createProdutoDto.regional
        }
    }
}