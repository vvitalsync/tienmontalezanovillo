import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart-service.service';
import { IonicModule } from '@ionic/angular';
import { Product } from '../../Models/product.mode';
import { ActivatedRoute, Router } from '@angular/router'; // 🔄 Manejar rutas activas y navegación.
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart-component',
  imports: [IonicModule, CommonModule,], // 📦 Importa el componente y las directivas necesarias

  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss'],
})
export class CartComponentComponent  implements OnInit {
  cart: { product: Product; quantity: number }[] = [];
  total: number = 0;

  constructor(private cartService: CartService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}
  

  ngOnInit() {
    // Obtener los datos del carrito
    this.loadCart();
  }

  loadCart() {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  removeOne(product: Product) {
    // Eliminar una unidad del producto en el carrito
    this.cartService.removeFromCart(product);
    this.loadCart();
  }

  finalizePurchase() {
    this.cartService.clearCart();
    alert('¡Compra finalizada! Gracias por tu compra.');
    this.loadCart();
  }

  cancelPurchase() {
    this.cartService.clearCart();
    alert('Compra cancelada.');
    this.loadCart();
  }
  gotoHome(): void {
    this.router.navigate(['']);
  }
}
