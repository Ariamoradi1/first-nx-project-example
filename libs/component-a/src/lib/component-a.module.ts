import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { componentARoutes } from './lib.routes';
import { HeadComponent } from './head/head.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Routes } from '@angular/router';
import { ComponentsModule } from '../../../shared/components/src/lib/components.module'
const routes: Routes = [
  { path: '', component: HeadComponent },
];
@NgModule({
  imports: [CommonModule,MatButtonModule,MatIconModule,MatToolbarModule,ComponentsModule, RouterModule.forChild(routes)],
  declarations: [HeadComponent],
  exports:[HeadComponent]
})
export class ComponentAModule {}
