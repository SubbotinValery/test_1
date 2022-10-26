import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../Types/types";

export const productApi = createApi({
  reducerPath: "fake/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (build) => ({
    getProduct: build.query<IProduct, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductQuery } = productApi;
