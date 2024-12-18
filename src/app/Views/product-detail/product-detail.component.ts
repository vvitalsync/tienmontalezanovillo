import { Component, inject } from '@angular/core'; // 📦 Importación de decoradores y utilidades de Angular.
import { ActivatedRoute, Router } from '@angular/router'; // 🔄 Manejar rutas activas y navegación.
import { ProductService } from '../../Services/product.service'; // 🔗 Servicio para obtener los productos.
import { Product } from '../../Models/product.mode'; // 🛒 Interfaz para el modelo de datos del producto.

@Component({
  selector: 'app-product-detail', // 🏷️ Nombre del selector del componente.
  imports: [], // 📌 No hay componentes adicionales importados aquí.
  templateUrl: './product-detail.component.html', // 📝 Archivo HTML para la plantilla.
  styleUrl: './product-detail.component.css', // 🎨 Archivo CSS para los estilos.
})
export class ProductDetailComponent {
  // 🛍️ Propiedad para almacenar el producto seleccionado.
  productSelected!: Product;

  // 🔧 Servicios inyectados para manejar rutas y datos.
  private route = inject(Router);
  private Aroute = inject(ActivatedRoute);
  private productService = inject(ProductService);

  constructor() {
    // 🧭 Subscríbete a los parámetros de la ruta activa.
    this.Aroute.params.subscribe((params) => {
      const id = params['id']; // 🆔 Obtiene el ID del parámetro de ruta.

      // 🔎 Busca el producto con el ID proporcionado.
      const product = this.productService.getProductByBarcode(String(id));
      console.log(product);

      if (!product) {
        // ❌ Si no se encuentra el producto, redirige a la página "not-found".
        console.log('Product not found');
        this.route.navigate(['not-found', id]);
      } else {
        // ✅ Si se encuentra el producto, almacénalo en `productSelected`.
        this.productSelected = product;
      }
    });
  }

  // 🏠 Método para regresar a la página principal.
  gotoHome(): void {
    this.route.navigate(['']);
  }
}
