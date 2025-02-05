import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../Models/product.mode'; // Importamos el modelo Product
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-product-item2', // Selector para usar este componente en plantillas
  imports: [IonicModule,],
  templateUrl: './product-item2.component.html', // Plantilla HTML para este componente
  styleUrls: ['./product-item2.component.scss'], // Estilos SCSS específicos del componente
})
export class ProductItem2Component implements OnInit {
  @Input() item!: Product; // Propiedad de entrada que representa un producto

  constructor(private router: Router) {} // Inyección de dependencia para la navegación

  ngOnInit() {}

  navigateToID() {
    // Navega a la ruta específica del producto según su código de barras
    this.router.navigate(['products', this.item.barcode]);
  }
}
