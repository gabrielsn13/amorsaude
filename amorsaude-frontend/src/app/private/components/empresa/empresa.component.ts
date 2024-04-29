import { Component } from '@angular/core';
import { Empresa } from '../../../models/empresa.model';
import { EmpresaService } from '../../services/empresa.service';
import { MatTableDataSource } from '@angular/material/table';
import { IEmpresa } from '../../../public/public.interface';

interface Regiao {
  value: number;
  label: string;
}
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

  regioes: Regiao[] = [
  { value: 1, label: 'Alto tietê' },
  { value: 2, label: 'Interior' },
  { value: 3, label: 'ES' },
  { value: 4, label: 'SP Interior' },
  { value: 5, label: 'SP' },
  { value: 6, label: 'SP2' },
  { value: 7, label: 'MG' },
  { value: 8, label: 'Nacional' },
  { value: 9, label: 'SP CAV' },
  { value: 10, label: 'RJ' },
  { value: 11, label: 'SP2' },
  { value: 12, label: 'SP1' },
  { value: 13, label: 'NE1' },
  { value: 14, label: 'NE2' },
  { value: 15, label: 'SUL' },
  { value: 16, label: 'Norte' }
  ];
}
