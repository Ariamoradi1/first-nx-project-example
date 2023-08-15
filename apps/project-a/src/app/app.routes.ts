import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@org/component-a').then((module) => module.ComponentAModule),
  },
];
