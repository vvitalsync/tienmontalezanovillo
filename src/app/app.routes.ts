import { Routes } from '@angular/router';

export const routes: Routes = [
  // Ruta raíz: Carga el componente ProductsListComponent
  {
    path: '',
    loadComponent: () =>
      import('./Views/product-list/product-list.component').then(
        (m) => m.ProductListComponent
      ),
  },
  // Ruta para detalles del producto: Carga el componente ProductDetailComponent
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./Views/product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent
      ),
  },
  // Ruta para página no encontrada: Carga el componente NotFoundComponent
  {
    path: 'not-found/:id',
    loadComponent: () =>
      import('./Views/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  // Ruta comodín: Redirige cualquier URL no definida a la página principal
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

