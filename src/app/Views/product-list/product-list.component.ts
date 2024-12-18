import { Component, inject } from '@angular/core';
import { Product } from '../../Models/product.mode'; // 📦 Importa el modelo de datos para productos.
import { ProductItemComponent } from '../../Components/product-item/product-item.component'; // 🧩 Importa el componente ProductItem.
import { NgFor } from '@angular/common'; // 🔄 Para iterar sobre la lista de productos.
import { ProductService } from '../../Services/product.service'; // 🔗 Importa el servicio de productos.

@Component({
  selector: 'app-products-list', // 🏷️ Nombre del selector para este componente.
  imports: [ProductItemComponent, NgFor], // 📦 Importa el componente y las directivas necesarias.
  templateUrl: './product-list.component.html', // 📝 Ruta del archivo HTML del componente.
  styleUrl: './product-list.component.css', // 🎨 Ruta del archivo CSS del componente.
})
export class ProductListComponent {
  // 💾 Inyecta el servicio ProductService para obtener los datos.
  productService = inject(ProductService);

  // 🛒 Lista de productos que se obtiene del servicio.
  productList: Product[] = this.productService.getProducts();
}

