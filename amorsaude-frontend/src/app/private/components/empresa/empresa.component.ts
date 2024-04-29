import { Component } from '@angular/core';
import { Empresa } from '../../../models/empresa.model';
import { EmpresaService } from '../../services/empresa.service';
import { MatTableDataSource } from '@angular/material/table';
import { IEmpresa } from '../../../public/public.interface';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent {
  displayedColumns: string[] = ['id', 'razaoSocial', 'razaoSocial', 'cnpj', 'regional', 'edit', 'delete'];
  dataSource = new MatTableDataSource<IEmpresa>();
  empresaSelecionada: Empresa = new Empresa();
  loading = false;
  
  constructor(public empresaService: EmpresaService) {
  }

  ngOnInit() {
    this.refresh();
  }

  async refresh() {
    this.loading = true;
    const data = await this.empresaService.getEmpresas().subscribe(empresas => {
      this.dataSource.data = empresas;
    });
    this.loading = false;
  }

  editar(empresa: Empresa) {
    this.empresaSelecionada = empresa;
  }

  async update() {
    if (this.empresaSelecionada.id !== undefined) {
      await this.empresaService.atualizarEmpresa(this.empresaSelecionada);
    } else {
      console.log('update', this.empresaSelecionada);
      await this.empresaService.cadastrarEmpresa(this.empresaSelecionada);
    }
    this.empresaSelecionada = new Empresa();
    await this.refresh();
  }


  Limpar() {
    this.empresaSelecionada = new Empresa();
  }

  async deletar(product: Empresa) {
    this.loading = true;
    // if (confirm(`Are you sure you want to delete the product ${product.name}. This cannot be undone.`)) {
    //   await this.productService.deleteProduct(product.id);
    // }
    await this.refresh();
  }
}
