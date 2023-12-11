import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from 'next-auth'

export const authApi = createApi({
  reducerPath: 'authApi', // Tên field trong Redux state
  tagTypes: ['Auth'], // Những kiểu tag cho phép dùng trong blogApi
  keepUnusedDataFor: 10, // Giữ data trong 10s sẽ xóa (mặc định 60s)
  baseQuery: fetchBaseQuery({
    mode : 'cors',
    baseUrl: 'https://back-end-next14.onrender.com',
  }),
  endpoints: (build) => ({ 
    signIn: build.mutation({
        query: (body) => ({
          url: '/auth/login',
          method: 'POST',
          body
        })
      }),
   
  })
})


export const {useSignInMutation} = authApi
