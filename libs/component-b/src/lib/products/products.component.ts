import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Datas } from '../models/data.model';
import { FacadeService } from '../facade.service';

@Component({
  selector: 'org-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  datas$ : Observable<Datas[]>
  constructor(private facade: FacadeService){
    this.datas$ = this.facade.getDatas()
  }

  ngOnInit() {
    this.facade.dispatchData()
  }
}
