export default class ApiServiceOptimised {
  private baseURL = "https://dummyjson.com";

  private async makeRequest<T>(
    method: "get" | "post" | "put" | "patch" | "delete",
    endpoint: string,
    data?: T,
    header?: Record<string, any>
  ): Promise<T> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...header,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async get<T>(
    endpoint: string,
    header?: Record<string, string>
  ): Promise<T> {
    return this.makeRequest<T>("get", endpoint, undefined, header);
  }

  public async post<T>(
    endpoint: string,
    data?: any,
    header?: Record<string, string>
  ): Promise<T> {
    return this.makeRequest<T>("post", endpoint, data, header);
  }

  public async put<T>(
    endpoint: string,
    data?: any,
    header?: Record<string, string>
  ): Promise<T> {
    return this.makeRequest<T>("put", endpoint, data, header);
  }

  public async patch<T>(
    endpoint: string,
    data?: any,
    header?: Record<string, string>
  ): Promise<T> {
    return this.makeRequest<T>("patch", endpoint, data, header);
  }

  public async delete<T>(
    endpoint: string,
    data?: any,
    header?: Record<string, string>
  ): Promise<T> {
    return this.makeRequest<T>("delete", endpoint, data, header);
  }
}
