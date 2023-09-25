import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { addUserRoutes } from './lib.routes';
import { AddUserComponent } from './add-user/add-user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"
import { postReducer } from './store/store.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { addUser } from './store/store.effect';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(addUserRoutes),
  MatFormFieldModule,
  MatIconModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
  HttpClientModule,
  MatCardModule,
  StoreModule.forRoot({add:postReducer}),
  EffectsModule.forRoot([addUser])
  ],
  declarations: [
    AddUserComponent
  ],
  exports:[AddUserComponent]
})
export class AddUserModule {}
