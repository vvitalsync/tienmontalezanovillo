import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-not-found2',
  imports: [IonicModule,],
  templateUrl: './not-found2.component.html',
  styleUrls: ['./not-found2.component.scss'], // Cambiado a SCSS
})
export class NotFound2Component implements OnInit {
  barcode: string = ''; // Usa `string` en minúscula para tipos primitivos

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Suscripción para obtener parámetros de la ruta
    this.activatedRoute.params.subscribe((params) => {
      this.barcode = String(params['barcode']);
    });
  }

  // Navegación al inicio
  gotoHome(): void {
    this.router.navigate(['']);
  }
}
