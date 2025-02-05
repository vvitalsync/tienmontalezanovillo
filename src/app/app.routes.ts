import { Routes } from '@angular/router';

export const routes: Routes = [
  // Ruta raíz: Carga el componente ProductsListComponent
  {
    path: '',
    loadComponent: () =>
      import('./Views/product-list2/product-list2.component').then(
        (m) => m.ProductList2Component
      ),
  },
  // Ruta para detalles del producto: Carga el componente ProductDetailComponent
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./Views/product-detail2/product-detail2.component').then(
        (m) => m.ProductDetail2Component
      ),
  },
  // Ruta para página no encontrada: Carga el componente NotFoundComponent
  {
    path: 'not-found2/:id',
    loadComponent: () =>
      import('./Views/not-found2/not-found2.component').then(
        (m) => m.NotFound2Component
      ),
  },
  // Ruta comodín: Redirige cualquier URL no definida a la página principal
  {
    path: 'cart',
    loadComponent: () =>
      import('./Views/cart-component/cart-component.component').then((m) => m.CartComponentComponent),
  },

  {
    path: 'add-product',
    loadComponent: () =>
      import('./Components/add-product/add-product.component').then(
        (m) => m.AddProductComponent
      ),
  },
  
  
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

