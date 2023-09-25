import { Route } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const componentBRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: ProductsComponent}
];
