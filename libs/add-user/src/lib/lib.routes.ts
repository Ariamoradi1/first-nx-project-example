import { Route } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';

export const addUserRoutes: Route[] = [
  {path: 'add', pathMatch: 'full', component: AddUserComponent}
];
