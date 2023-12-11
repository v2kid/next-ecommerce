import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export interface Product {
  _id: string;
  title: string;
  description: string;
  price: any;
  gender: string;
  weight: any;
  image: string[];
  category: string;
}

export const productApi = createApi({
  reducerPath: "productApi", // Tên field trong Redux state
  tagTypes: ["Product"], // Những kiểu tag cho phép dùng trong blogApi
  keepUnusedDataFor: 10, // Giữ data trong 10s sẽ xóa (mặc định 60s)
  baseQuery: fetchBaseQuery({
    mode : 'cors',
    // baseUrl: "http://localhost:3001",
      baseUrl: 'https://back-end-next14.onrender.com',
         prepareHeaders(headers) {
          const token = Cookies.get('token')
      headers.set('Authorization', `Bearer ${token}`);
      return headers
    }
  }),
  endpoints: (build) => ({
    getProducts: build.query<Product[], any>({
      query: ({ keyword, category, gender, page = 1 }: any) => ({
        url: `/product?gender=${gender}&keyword=${keyword}&category=${category}&page=${page}&perpage=12`,
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems, arg,) => {
        const {page} = arg.arg
        if (page !== 1) {
          return [...currentCache, ...newItems];
        } else {
          return newItems
        }
      },
      forceRefetch({ currentArg, previousArg, state, endpointState }) {
        return currentArg !== previousArg
      },
      providesTags(result) {
        if (result) {
          const final = [
            ...result.map(({ _id }) => ({ type: "Product" as const, _id })),
            { type: "Product" as const, id: "LIST" },
          ];
          return final;
        }
        return [{ type: "Product", id: "LIST" }];
      },
    }),
    getProductsforadmin: build.query<Product[], any>({
      query: ({ keyword, category, gender, page = 1 }: any) => ({
        url: `/product?gender=${gender}&keyword=${keyword}&category=${category}&page=${page}&perpage=100`,
      }),
      providesTags(result) {
        if (result) {
          const final = [
            ...result.map(({ _id }) => ({ type: "Product" as const, _id })),
            { type: "Product" as const, id: "LIST" },
          ];
          return final;
        }
        return [{ type: "Product", id: "LIST" }];
      },
    }),
    addProduct: build.mutation<Product, Omit<Product, "_id">>({
      query(body) {
        try {
          return {
            url: "product",
            method: "POST",
            body,
          };
        } catch (error: any) {
          throw new error.message();
        }
      },
      invalidatesTags: (_result, error, _body) =>
        error ? [] : [{ type: "Product", id: "LIST" }],
    }),
    deleteProduct: build.mutation<{}, any>({
      query(id) {
        return {
          url: `product/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (_result, _error, _id) => [
        { type: "Product", id: "LIST" },
      ],
    }),
    getDetail: build.query<Omit<Product, "_id">, any>({
      query: (id) => ({
        url: `product/${id}`,
      }),
    }),
    updateProduct: build.mutation<
      Product,
      { id: string; body: Omit<Product, "_id"> }
    >({
      query(data) {
        return {
          url: `product/${data.id}`,
          method: "PUT",
          body: data.body,
        };
      },
      // Trong trường hợp này thì getPosts sẽ chạy lại
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useGetDetailQuery,
  useUpdateProductMutation,
  useGetProductsforadminQuery
} = productApi;
