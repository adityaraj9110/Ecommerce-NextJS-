
import { FormValues, LocalStorageKeys } from "@/shared/utils/DataTypes/ResponsedataType";
import { localManagement } from "@/shared/utils/apiClasses/localMangement";
import { createAction, createReducer } from "@reduxjs/toolkit";

enum RegisterAction {
    REGISTER = "REGISTER"
    }


const initialState : FormValues[] = typeof window !== 'undefined' ? localManagement.getItem(LocalStorageKeys.REGISTER_USERS) : [];

export const register = createAction<FormValues>(RegisterAction.REGISTER);



export const RegisterReducer = createReducer(initialState,(builder)=>{
    builder.addCase(register,(state,action)=>{
        state.push(action.payload);
        localManagement.setItem(LocalStorageKeys.REGISTER_USERS,state);
    })
})

export const registerSelector = (state:{registerReducer:FormValues[]})=> state.registerReducer;