import { Component } from '@angular/core';
import { Empresa } from '../../../models/empresa.model';
import { EmpresaService } from '../../../services/empresa.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent {
  displayedColumns: string[] = ['name', 'sku', 'description', 'price', 'stock', 'edit', 'delete'];
  dataSource = new MatTableDataSource<any>();
  empresaSelecionada: Empresa = new Empresa();
  loading = false;
  
  constructor(public empresaService: EmpresaService) {
  }

  ngOnInit() {
    this.refresh();
  }

  async refresh() {
    this.loading = true;
    const data = await this.empresaService.getEmpresas();
    //this.dataSource.data = data;
    this.loading = false;
  }

  editProduct(product: Empresa) {
    this.empresaSelecionada = product;
  }

  updateProduct(product: Empresa) {
    // console.log('updateProduct ' + JSON.stringify(product));
    // return this.request('post', `${baseUrl}/product/${product.id}`, product);
  }


  clearProduct() {
    this.empresaSelecionada = new Empresa();
  }

  async deleteProduct(product: Empresa) {
    this.loading = true;
    // if (confirm(`Are you sure you want to delete the product ${product.name}. This cannot be undone.`)) {
    //   await this.productService.deleteProduct(product.id);
    // }
    await this.refresh();
  }
}
