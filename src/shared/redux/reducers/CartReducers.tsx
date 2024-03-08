"use client";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { localManagement } from "@/shared/utils/apiClasses/localMangement";
import { LocalStorageKeys } from "@/shared/utils/DataTypes/ResponsedataType";

export enum Actions {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_TO_CART = "REMOVE_TO_CART",
}

export const initialState: string[] = localManagement.getItem("cartItems");

export const addToCart = createAction<string>(Actions.ADD_TO_CART);
export const removeToCart = createAction<string>(Actions.REMOVE_TO_CART);

export const CartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      state.push(action.payload);
      localManagement.setItem(LocalStorageKeys.CART_ITEMS, state);
    })
    .addCase(removeToCart, (state, action) => {
      const newState = state.filter((item) => {
        return item != action.payload;
      });

      localManagement.setItem(LocalStorageKeys.CART_ITEMS, newState);
      return newState;
    });
});

export const cartSelector = (state: { cartReducer: string[] }) =>
  state.cartReducer;
