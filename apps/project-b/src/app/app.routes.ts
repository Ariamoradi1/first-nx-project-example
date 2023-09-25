import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
    import('@org/component-b').then((module) => module.ComponentBModule),
  },
];
