import { LocalStorageKeys } from "@/shared/utils/DataTypes/ResponsedataType";
import { localManagement } from "@/shared/utils/apiClasses/localMangement";
import { createAction, createReducer } from "@reduxjs/toolkit";

enum Action {
  OFFSET = "OFFSET",
}

const initialState: number = Array.isArray(
  localManagement.getItem(LocalStorageKeys.OFFSET)
)
  ? 20
  : localManagement.getItem(LocalStorageKeys.OFFSET);

export const changeOffset = createAction<number>(Action.OFFSET);

export const OffsetReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeOffset, (state, action) => {
    localManagement.setItem(LocalStorageKeys.OFFSET, action.payload);
    return action.payload;
  });
});

export const offsetSelector = (state: { offsetReducer: number }) =>
  state.offsetReducer;
