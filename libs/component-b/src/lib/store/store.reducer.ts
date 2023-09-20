import { getDataSuccess,getData } from "./store.action";
import { createReducer,on } from "@ngrx/store";
import { dataInterface } from "./store.state";

export const getDataReducer = createReducer(
  dataInterface,
  on(getData, (state) => ({...state})),
  on(getDataSuccess, (state,{data}) => ({...state,data}))
)
