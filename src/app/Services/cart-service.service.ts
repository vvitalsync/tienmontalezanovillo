import { Injectable } from '@angular/core';
import { Product } from '../Models/product.mode';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: { product: Product; quantity: number }[] = [];

  constructor() {}

  addToCart(product: Product) {
    const existingItem = this.cart.find((item) => item.product.barcode === product.barcode);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  removeFromCart(product: Product) {
    const index = this.cart.findIndex((item) => item.product.barcode === product.barcode);
    if (index > -1) {
      this.cart[index].quantity--;
      if (this.cart[index].quantity === 0) {
        this.cart.splice(index, 1);
      }
    }
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

  clearCart() {
    this.cart = [];
  }
}
