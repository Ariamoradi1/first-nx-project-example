import { createAction, props } from "@ngrx/store";

export const addUsers = createAction('[Add User] Add User',props<{myObj:any}>())
export const addUsersSuccess = createAction('[Add User] Add User Success',props<{data:any}>())
