import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { componentBRoutes } from './lib.routes';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { getDataReducer } from './store/store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { getDataEffect } from './store/store.effect';
import {ComponentsModule} from "../../../shared/components/src/lib/components.module"
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    ComponentsModule,
    StoreModule.forRoot({data:getDataReducer}),
    EffectsModule.forRoot([getDataEffect]),
    RouterModule.forChild(componentBRoutes)
  ],
  declarations: [ProductsComponent],
  exports:[ProductsComponent]
})
export class ComponentBModule {}
