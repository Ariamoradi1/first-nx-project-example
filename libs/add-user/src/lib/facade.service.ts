import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUsers } from './store/store.action';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private store: Store) { }

  dispatchUsers(myObj:any){
    this.store.dispatch(addUsers({myObj}))
  }
}
