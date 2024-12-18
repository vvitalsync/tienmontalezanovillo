import { Component, inject, Input } from '@angular/core';
import { Product } from '../../Models/product.mode'; // Importamos el modelo Product
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item', // Selector para usar este componente en plantillas
  templateUrl: './product-item.component.html', // Plantilla HTML para este componente
  styleUrls: ['./product-item.component.css'], // Estilos CSS específicos del componente
})
export class ProductItemComponent {
  route = inject(Router); // Inyección de dependencia para la navegación

  @Input() item!: Product; // Propiedad de entrada que representa un producto

  navigateToID() {
    // Navega a la ruta específica del producto según su código de barras
    this.route.navigate(['products', this.item.barcode]);
  }
}
