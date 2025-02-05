import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product.mode'; // 📦 Importa el modelo de datos para productos.
import { ProductService } from '../../Services/product.service'; // 🔗 Importa el servicio de productos.
import { IonicModule } from '@ionic/angular';
import { ProductItem2Component } from '../../Components/product-item2/product-item2.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-list2', // 🏷️ Selector del componente.
  imports: [ProductItem2Component, NgFor, IonicModule, RouterLink,], // 📦 Importa el componente y las directivas necesarias
  templateUrl: './product-list2.component.html', // 📝 Ruta del archivo HTML del componente.
  styleUrls: ['./product-list2.component.scss'], // 🎨 Ruta del archivo SCSS del componente.
})
export class ProductList2Component implements OnInit {
  // 🛒 Lista de productos que se obtiene del servicio.
  productList: Product[] = [];

  constructor(private productService: ProductService) {} // 💾 Inyecta el servicio ProductService.

  ngOnInit() {
    // 🔄 Obtiene los productos al inicializar el componente.
    this.productList = this.productService.getProducts();
  }
}
