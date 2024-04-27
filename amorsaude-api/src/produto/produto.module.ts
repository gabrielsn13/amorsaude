import { Module } from '@nestjs/common';
import { ProdutoService } from './services/empresa.service';
import { ProdutoController } from './controller/empresa.controller';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
