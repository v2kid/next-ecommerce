import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export interface User {
  _id:string
  name : string
  email : string
  password : string
  roles : [string]
}
export const userApi = createApi({
  reducerPath: 'userApi', // Tên field trong Redux state
  tagTypes: ['User'], // Những kiểu tag cho phép dùng trong blogApi
  keepUnusedDataFor: 10, // Giữ data trong 10s sẽ xóa (mặc định 60s)
  baseQuery: fetchBaseQuery({
    mode : 'cors',
    baseUrl: 'https://back-end-next14.onrender.com/',
    // baseUrl: 'http://localhost:3001/',
     prepareHeaders(headers) {
      const token = localStorage.getItem('token')
      headers.set('Authorization', `Bearer ${token}`);
      return headers
    }
  }),
  endpoints: (build) => ({ 
    getUsers : build.query<User[],any>({
      query:(keyword:any)=>{
        return `users/list?keyword=${keyword}`  
      },
      providesTags(result) {
        if (result) {
          const final = [
            ...result.map(({ _id }) => ({ type: 'User' as const, _id })),
            { type: 'User' as const, id: 'LIST' }
          ]
          return final
        }
       
        return [{ type: 'User', id: 'LIST' }]
      }
    }),
    getUser : build.query<User,any>({
      query:(id)=>{
        return `users/id?id=${id}`
      },
      // transformResponse: (response: any) => transformResponse(response),
    }),
    addUser : build.mutation<User, any>({
      query:(body) => {
        return {
          url: 'users',
          method: 'POST',
          body
        }
      },
      invalidatesTags: (_result, error, _body) => (error ? [] : [{ type: 'User', id: 'LIST' }])
    }),
    deleteUser : build.mutation<any,any>({
      query:(id)=> {
        return {
          url : `users/id?id=${id}`,
          method : 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, _id) => [{ type: 'User', id: 'LIST' }]
    }),
    updateUser: build.mutation<User, { id: string; body: Omit<User,'_id'> }>({
      query(data) {
        return {
          url: `users/${data.id}`,
          method: 'PUT',
          body: data.body
        }
      },
      invalidatesTags: (_result, error, _data) => (error ? [] : [{ type: 'User', id: 'LIST' }])
    }),
  })

})
const transformResponse = (response: any): User => {
  // Exclude _id from the response
  const { _id, ...userWithoutId } = response;
  return userWithoutId as User;
};
export const {useGetUsersQuery, useGetUserQuery, useAddUserMutation, useDeleteUserMutation, useUpdateUserMutation} = userApi
