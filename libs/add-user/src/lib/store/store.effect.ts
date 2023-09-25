import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addUsers, addUsersSuccess } from "./store.action";
import { map, mergeMap } from "rxjs";
import { AddService } from "../add.service";

@Injectable()

export class addUser {
  constructor(private action$:Actions, private service: AddService){}

  addUser$ = createEffect(() =>
   this.action$.pipe(
    ofType(addUsers),
    mergeMap((action) => this.service.addPost(action.myObj).pipe(
      map((data) => addUsersSuccess({data}))
    ))
   )
  )
}
