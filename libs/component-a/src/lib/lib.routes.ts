import { Route } from '@angular/router';
import { HeadComponent } from './head/head.component';

export const componentARoutes: Route[] = [
  {path: '', pathMatch: 'full', component: HeadComponent}
];
