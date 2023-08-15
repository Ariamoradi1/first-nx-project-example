import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { componentBRoutes } from './lib.routes';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forChild(componentBRoutes)
  ],
  declarations: [ProductsComponent],
  exports:[ProductsComponent]
})
export class ComponentBModule {}
