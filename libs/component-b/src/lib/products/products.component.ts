import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
@Component({
  selector: 'org-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  myArray : any
  constructor(public service : PostsService){}

 public dataHandler(){
   this.service.gett().subscribe(
    (data:any) => {
     this.myArray = data
    }
   )
  }
}
