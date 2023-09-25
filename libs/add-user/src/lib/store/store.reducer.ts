import { Action, createReducer, on } from "@ngrx/store";
import { addUsers, addUsersSuccess } from "./store.action";

export interface addState {
  data: [];
}

export const addState : addState = {
  data: []
}

export const addUser = createReducer(
   addState,
   on(addUsersSuccess,(state,{data}) => ({...state, data}))
)

export function postReducer(state: addState | undefined, action: Action) {
  return addUser(state, action);
}
