
import { ApiResponseType, DataType } from "../DataTypes/ResponsedataType";
import ApiServiceOptimised from "./optimisedServieClass";

class ApiProviderOptimised extends ApiServiceOptimised {
  private cacheData = new Map<string, any>();

  public async getAllProductsOptimised(
    skip: number,
    offset: number
  ): Promise<ApiResponseType<DataType>> {
    const cacheKey = `${skip}_${offset}`;
    if (this.cacheData.has(cacheKey)) return this.cacheData.get(cacheKey);
    else {
      const dataResponse = this.get<ApiResponseType<DataType>>(
        `/products?limit=${offset}&skip=${skip}`
      );
      this.cacheData.set(cacheKey, dataResponse);
      return dataResponse;
    }
  }

  public async getProductByIdOptimised(id: string): Promise<DataType> {
    return this.get<DataType>(`/products/${id}`);
  }

  public async getProductsByIdsOptimised(ids: string[]): Promise<DataType[]> {
    const promises = ids.map((id) => this.getProductByIdOptimised(id));
    const products = await Promise.all(promises);
    return products;
  }
}

export const apiProvideOptimised = new ApiProviderOptimised();
