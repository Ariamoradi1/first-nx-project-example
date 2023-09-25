import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { usersTableRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(usersTableRoutes)],
})
export class UsersTableModule {}
