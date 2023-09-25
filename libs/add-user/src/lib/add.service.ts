import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Add } from './models/add.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http : HttpClient) { }

  addPost(myObj : Add): Observable<Add> {
    return this.http.post<Add>(`https://angular-ngrx-45a84-default-rtdb.firebaseio.com/users.json`,myObj);
  }
}
