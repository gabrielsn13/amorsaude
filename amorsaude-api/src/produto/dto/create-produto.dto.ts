import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateProdutoDto {

    @IsString()
    name?: string;

    @IsString()
    sku?: string;

    @IsString()
    description?: string;

    @IsNumber()
    price?: number;

    @IsNumber()
    stock?: number;
}