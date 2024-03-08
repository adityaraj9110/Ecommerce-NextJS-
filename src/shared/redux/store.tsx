import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./reducers/CartReducers";
import { PageReducer } from "./reducers/PageReducers";
import { RegisterReducer } from "./reducers/RegisterReducer";
import { AuthReducer } from "./reducers/AuthReducer";
import { OffsetReducer } from "./reducers/OffsetReducer";
import { LoaderReducer } from "./reducers/LoaderReducer";

export const store = configureStore({
  reducer:{
    cartReducer:CartReducer,
    pageReducer:PageReducer,
    registerReducer:RegisterReducer,
    authReducer:AuthReducer,
    offsetReducer:OffsetReducer,
    loaderReducer:LoaderReducer
  }
});
