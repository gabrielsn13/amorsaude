import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateEmpresaDto {

    @IsString()
    razaoSocial?: string;

    @IsString()
    nomeFantasia?: string;

    @IsString()
    cnpj?: string;

    @IsNumber()
    regional?: number;
}