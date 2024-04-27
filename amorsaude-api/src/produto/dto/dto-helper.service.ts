import { Injectable } from "@nestjs/common";
import { IProduto } from "../produto.interface";
import { CreateProdutoDto } from "./create-produto.dto";

@Injectable()
export class DtoHelperService {

    createProdutoDtoToEntity(createProdutoDto: CreateProdutoDto): IProduto{
        return {
            name: createProdutoDto.name,
            sku: createProdutoDto.sku,
            description: createProdutoDto.description,
            price: createProdutoDto.price,
            stock: createProdutoDto.stock
        }
    }
}