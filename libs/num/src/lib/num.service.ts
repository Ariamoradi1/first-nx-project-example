import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class NumModule {
  constructor(public http : HttpClient){}

  public get (){
   return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
