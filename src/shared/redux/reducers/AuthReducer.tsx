
import { FormValuesForLogin, LocalStorageKeys } from "@/shared/utils/DataTypes/ResponsedataType";
import { localManagement } from "@/shared/utils/apiClasses/localMangement";
import { createAction, createReducer } from "@reduxjs/toolkit";

enum Action {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"
}

const InitialState: FormValuesForLogin | {} = Array.isArray(localManagement.getItem(LocalStorageKeys.CURRENT_USER)) ? {} : localManagement.getItem(LocalStorageKeys.CURRENT_USER);
export const login = createAction<FormValuesForLogin>(Action.LOGIN);
export const logout = createAction<string>(Action.LOGOUT);






export const AuthReducer = createReducer(InitialState,(builder)=>{
    builder.addCase(login,(state,action)=>{
        localManagement.setItem(LocalStorageKeys.CURRENT_USER,action.payload);
        return action.payload;
    })
    .addCase(logout,(state,action)=>{
        localManagement.removeItem(LocalStorageKeys.CURRENT_USER);
        return {};
    })
})

export const authSelector = (state:{ authReducer: FormValuesForLogin }) => state.authReducer