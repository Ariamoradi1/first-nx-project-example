import { createFeatureSelector,createSelector } from "@ngrx/store";
import { dataInterface } from "./store.state";

export const selector = createFeatureSelector<dataInterface>('data')
export const selectData = createSelector(selector, (state) => state.data)
