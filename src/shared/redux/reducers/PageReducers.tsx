"use client";
import { LocalStorageKeys } from "@/shared/utils/DataTypes/ResponsedataType";
import { localManagement } from "@/shared/utils/apiClasses/localMangement";
import { createAction, createReducer } from "@reduxjs/toolkit";

export enum PageAction {
  UPDATE_PAGE = "UPDATE_PAGE",
  NEXT_PAGE = "NEXT_PAGE",
  PREVIOUS_PAGE = "PREVIOUS_PAGE",
}

const initialState: number = Array.isArray(
  localManagement.getItem(LocalStorageKeys.PAGE_NUMBER)
)
  ? 1
  : Number(localManagement.getItem(LocalStorageKeys.PAGE_NUMBER));

export const updatePage = createAction<number>(PageAction.UPDATE_PAGE);
export const nextPage = createAction<void>(PageAction.NEXT_PAGE);
export const previousPage = createAction<void>(PageAction.PREVIOUS_PAGE);

export const PageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updatePage, (state, action) => {
      localManagement.setItem(LocalStorageKeys.PAGE_NUMBER, action.payload);
      return action.payload;
    })
    .addCase(nextPage, (state, action) => {
      const nextPageNumber = action.payload ? action.payload + 1 : 1;
      localManagement.setItem(LocalStorageKeys.PAGE_NUMBER, nextPageNumber);
      return nextPageNumber;
    })
    .addCase(previousPage, (state, action) => {
      const previousPageNumber = action.payload ? action.payload - 1 : 1;
      if (action.payload !== 1) {
        localManagement.setItem(
          LocalStorageKeys.PAGE_NUMBER,
          previousPageNumber
        );
        return previousPageNumber;
      } else {
        return 1;
      }
    });
});

export const pageSelector = (state: { pageReducer: number }) =>
  state.pageReducer;
