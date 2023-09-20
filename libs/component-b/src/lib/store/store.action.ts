import { createAction,props } from "@ngrx/store";

export const getData = createAction('[data] Get Data')
export const getDataSuccess = createAction('[data] Get Data Success',props<{data:any}>())
