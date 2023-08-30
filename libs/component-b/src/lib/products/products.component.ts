import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
@Component({
  selector: 'org-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  myArray : any

  constructor(public service : PostsService){}

  ngOnInit() {
    this.service.gett().subscribe(
      (data:any) => {
       this.myArray = data
      }
     )
     interface obj {
      name: string,
      family?: string
     }
     const myObj = {
      name : 'kazem',
      family: 'kazemi',
      get() {
        return this.name
      }
     }
     console.log(myObj.get())
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => console.log(data))
  }
}
