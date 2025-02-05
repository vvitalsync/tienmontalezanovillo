import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Models/product.mode';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  newProduct: Product = {
    name: '',
    barcode: '',
    price: 0,
    imageUrl: ''
  };

  constructor(private productService: ProductService, public router: Router) {}

  addProduct() {
    if (this.newProduct.name && this.newProduct.barcode && this.newProduct.price && this.newProduct.imageUrl) {
      this.productService.addProduct(this.newProduct);
      this.router.navigate(['/']); // Redirigir a la lista de productos
    } else {
      alert('Por favor, complete todos los campos');
    }
  }
}
