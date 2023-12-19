'use client'

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { userApi } from './service/users/user.service'
import productReducer from './service/product/productSlice'
import userReducer from './service/users/userSlice'
import { authApi } from './service/auth/auth.service'
import { productApi } from './service/product/product.service'
import { blogApi } from './service/blog/blog.service'
import { rtkQueryErrorLogger } from '@/middleware'

export const store =()=>{
return configureStore({
  reducer: {
    user : userReducer,
    product : productReducer,
    [productApi.reducerPath] : productApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath] : authApi.reducer,
    [blogApi.reducerPath] : blogApi.reducer,
  },
  // Thêm api middleware để enable các tính năng như caching, invalidation, polling của rtk-query
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    rtkQueryErrorLogger,
    blogApi.middleware,
    productApi.middleware,
    userApi.middleware,
    authApi.middleware
  )
})
}

// Optional, nhưng bắt buộc nếu dùng tính năng refetchOnFocus/refetchOnReconnect
setupListeners(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
export type AppStore = ReturnType<typeof store >

