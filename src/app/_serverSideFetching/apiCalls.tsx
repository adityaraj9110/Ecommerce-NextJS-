"use server";
import {
  ApiResponseType,
  DataType,
} from "@/shared/utils/DataTypes/ResponsedataType";
import { apiProvideOptimised } from "@/shared/utils/apiClasses/optimisedProviderClass";

export const getData = async (
  currentPageNumber: number,
  offset: number
): Promise<ApiResponseType<DataType>> => {
  return apiProvideOptimised.getAllProductsOptimised(currentPageNumber, offset);
};

export const getAllDataByIds = async (
  cartItems: string[]
): Promise<DataType[]> => {
  return apiProvideOptimised.getProductsByIdsOptimised(cartItems);
};

export const getDataById = async (id: string): Promise<DataType> => {
  return apiProvideOptimised.getProductByIdOptimised(id);
};



