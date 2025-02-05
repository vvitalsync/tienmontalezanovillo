import { Injectable } from '@angular/core';
import { Product } from '../Models/product.mode'; // Importamos el modelo Product

@Injectable({
  providedIn: 'root', // Hace que el servicio esté disponible en toda la aplicación.
})
export class ProductService {
  /**
   * 🛒 Lista estática de productos como ejemplo.
   */
  productList: Product[] = [
    { name: 'Laptop', barcode: '1234567890123', price: 1200.99, imageUrl: 'assets/product1.jpg' },
    { name: 'Smartphone', barcode: '9876543210987', price: 799.49, imageUrl: 'assets/product2.jpg'},
    { name: 'Iphone 19', barcode: '4561237894569', price: 200.99, imageUrl: 'assets/product4.jpg'},
    { name: 'Auriculares', barcode: '4561237894560', price: 259.99, imageUrl: 'assets/product3.jpg'},
  ];

  constructor() {}

  /**
   * 🛍️ Obtiene todos los productos.
   * @returns Lista de productos (`Product[]`).
   */
  getProducts(): Product[] {
    return this.productList; // Retorna la lista de productos.
  }

  /**
   * 🔍 Busca un producto por su código de barras.
   * @param barcode - Código de barras del producto.
   * @returns Un producto (`Product`) o `undefined` si no existe.
   */
  getProductByBarcode(barcode: string): Product | undefined {
    // Itera por la lista de productos y compara el código de barras.
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].barcode === barcode) {
        return this.productList[i]; // Retorna el producto si lo encuentra.
      }
    }
    return undefined; // Retorna `undefined` si no se encuentra el producto.
  }
  
  addProduct(product: Product) {
    this.productList.push(product);
  }
  
  updateProductList() {
    this.productList = [...this.productList]; // Dispara el cambio en Angular
  }
  
}

