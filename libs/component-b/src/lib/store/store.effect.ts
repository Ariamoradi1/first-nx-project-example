import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostsService } from "../posts.service";
import { mergeMap,map } from "rxjs";
import { getData,getDataSuccess } from "./store.action";

@Injectable()

export class getDataEffect {
    constructor(private action$: Actions, private service: PostsService){}

    loadData$ = createEffect(() =>
      this.action$.pipe(
        ofType(getData),
        mergeMap(() => this.service.gett().pipe(
          map((data) => getDataSuccess({data}))
        ))
      )
    )
}
