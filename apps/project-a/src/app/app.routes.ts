import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@org/component-a').then((module) => module.ComponentAModule),
  },
  {
    path: 'add',
    loadChildren: () =>
      import('@org/add-user').then((module) => module.AddUserModule),
  }
];
