import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { NumModule } from '../../../../num/src/index';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  imports: [CommonModule,HttpClientModule,MatTableModule,MatDividerModule,MatButtonModule,MatIconModule],
  declarations: [TableComponent],
  providers:[NumModule],
  exports:[TableComponent]
})
export class ComponentsModule {}
