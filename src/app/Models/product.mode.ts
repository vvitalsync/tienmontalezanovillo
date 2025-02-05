// Definimos una interfaz para el modelo de producto.
export interface Product {
    name: string;    // 🏷️ El nombre del producto.
    barcode: string; // 📎 El código de barras del producto.
    price: number;   // 💵 El precio del producto.
    imageUrl: string; // 🖼️ La URL de la imagen del producto.
  }
  