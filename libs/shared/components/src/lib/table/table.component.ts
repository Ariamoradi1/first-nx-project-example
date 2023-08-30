import { Component, OnInit } from '@angular/core';
import { NumModule } from '@org/num';
@Component({
  selector: 'org-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  array : any
  constructor(public lib: NumModule){}

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  ngOnInit(){
    this.lib.get().subscribe(
      (data:any) => {
        this.array = data
      }
    )
  }
}
