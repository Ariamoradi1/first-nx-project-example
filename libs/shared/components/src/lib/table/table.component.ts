import { Component } from '@angular/core';
import { NumModule } from '@org/num';

@Component({
  selector: 'org-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  array : any
  constructor(public lib: NumModule){}

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  show(){
    this.lib.get().subscribe(
      (data:any) => {
        this.array = data
      }
    )
  }
}
