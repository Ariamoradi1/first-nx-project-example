import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NumModule } from '@org/num';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
// eslint-disable-next-line @nx/enforce-module-boundaries
import {ComponentsModule} from '../../../../libs/shared/components/src'
import { ComponentAModule } from '@org/component-a';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddUserModule } from '@org/add-user';
@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    AddUserModule,
    ComponentAModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [NumModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
