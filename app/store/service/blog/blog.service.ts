import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
interface Blog   {
  data :  [
        {
            "id": string,
            "attributes": {
                "blog1": string
                "createdAt": string
                "updatedAt": string
                "publishedAt": string
            }
        } 
    ],
  meta :  {
        "pagination": {
            "page": number,
            "pageSize": number,
            "pageCount": number,
            "total": number
        }
    }
}

export const blogApi = createApi({
  reducerPath: 'blogApi', // Tên field trong Redux state
  tagTypes: ['Blog'], // Những kiểu tag cho phép dùng trong blogApi
  keepUnusedDataFor: 10, // Giữ data trong 10s sẽ xóa (mặc định 60s)
  baseQuery: fetchBaseQuery({
    mode : 'cors',
    baseUrl: 'https://strapi-cms-600q.onrender.com/api/',
     prepareHeaders(headers) {
      const token = 'ef991b0cd4cd35c3deb9d1f9c969e56ee60a801cd492577b4d6b124b76522dc0a77ed7e4877ad580740173549df073e3ca40ab3be8c0069b18f8150081d7fd2678b3b867083d0602a6f1873e6a9e6c2de67c4fe6e1f15dd2f81fa202ae979e68d05df5d3a7bb4541a1ce7af5cd83f6fdffee42450d8670681609fbff8100b668'
      headers.set('Authorization', `Bearer ${token}`);
      return headers
    }
  }),
  endpoints: (build) => ({ 
    getBlogs : build.query<any,any>({
      query:()=>{
        return `blogs?populate=*`  
      },
    //   providesTags(result) {
    //     if (result) {
    //       const final = [
    //         ...result.map(({ id }) => ({ type: 'Blog' as const, id})),
    //         { type: 'Blog' as const, id: 'LIST' }
    //       ]
    //       return final
    //     }
       
    //     return [{ type: 'Blog', id: 'LIST' }]
    //   }
    }),
    getDetailBlog: build.query<any, any>({
      query: (id) => ({
        url: `blogs/${id}?populate=*`,
      }),
    }),
    
  })

})

export const {useGetBlogsQuery,useGetDetailBlogQuery} = blogApi
