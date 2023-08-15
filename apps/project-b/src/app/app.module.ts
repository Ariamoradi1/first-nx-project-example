/* eslint-disable @nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NumModule } from '@org/num';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import {ComponentsModule} from '../../../../libs/shared/components/src/lib/components.module'
import { ComponentBModule } from '@org/component-b';
@NgModule({
  declarations: [AppComponent],
  imports: [
    MatTableModule,
    ComponentBModule,
    ComponentsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [NumModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
