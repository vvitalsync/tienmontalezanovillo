import { Component, OnInit } from '@angular/core'; // 📦 Importación de decoradores y utilidades de Angular.
import { ActivatedRoute, Router } from '@angular/router'; // 🔄 Manejar rutas activas y navegación.
import { ProductService } from '../../Services/product.service'; // 🔗 Servicio para obtener los productos.
import { Product } from '../../Models/product.mode'; // 🛒 Interfaz para el modelo de datos del producto.
import { IonicModule } from '@ionic/angular';
import { CartService } from '../../Services/cart-service.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-detail2', // 🏷️ Nombre del selector del componente.
  imports: [IonicModule, RouterLink,], // 📌 No hay componentes adicionales importados aquí.
  templateUrl: './product-detail2.component.html', // 📝 Archivo HTML para la plantilla.
  styleUrls: ['./product-detail2.component.scss'], // 🎨 Archivo SCSS para los estilos.
})
export class ProductDetail2Component implements OnInit {
  // 🛍️ Propiedad para almacenar el producto seleccionado.
  productSelected!: Product;

  // 🔧 Servicios inyectados para manejar rutas y datos.
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      const product = this.productService.getProductByBarcode(String(id));
      if (!product) {
        console.log('Product not found');
        this.router.navigate(['not-found2', id]);
      } else {
        this.productSelected = product;
      }
    });
  }

  // Método para agregar el producto al carrito
  addToCart(): void {
    this.cartService.addToCart(this.productSelected);
    alert(`${this.productSelected.name} ha sido añadido al carrito.`);
  }

  // Método para eliminar una unidad del producto del carrito
  removeFromCart(): void {
    this.cartService.removeFromCart(this.productSelected);
    alert(`Se ha eliminado una unidad de ${this.productSelected.name} del carrito.`);
  }

  gotoHome(): void {
    this.router.navigate(['']);
  }
}
