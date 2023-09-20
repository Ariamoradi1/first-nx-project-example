import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getData } from './store/store.action';
import { selectData } from './store/store.selector';
@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private store : Store) {}

  dispatchData () {
    this.store.dispatch(getData())
  }

  getDatas () {
    return this.store.select(selectData)
  }
}
