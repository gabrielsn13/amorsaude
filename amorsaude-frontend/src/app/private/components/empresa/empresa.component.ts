import { Component } from '@angular/core';
import { Empresa } from '../../../models/empresa.model';
import { EmpresaService } from '../../../services/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent {

  selectedProduct: Empresa = new Empresa();
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
    this.selectedProduct = product;
  }

  clearProduct() {
    this.selectedProduct = new Empresa();
  }

  async deleteProduct(product: Empresa) {
    this.loading = true;
    // if (confirm(`Are you sure you want to delete the product ${product.name}. This cannot be undone.`)) {
    //   await this.productService.deleteProduct(product.id);
    // }
    await this.refresh();
  }
}
