"use client";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = false;

enum Action {
  LOADING = "LOADING",
  ISLOADING = "ISLOADING",
}

export const isloading = createAction<boolean>(Action.ISLOADING);
export const loading = createAction<boolean>(Action.LOADING);

export const LoaderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(isloading, (state, action) => {
      state = false;
      return state;
    })
    .addCase(loading, (state, action) => {
      state = true;
      return state;
    });
});

export const loaderSelector = (state: { loaderReducer: boolean }) =>
  state.loaderReducer;
