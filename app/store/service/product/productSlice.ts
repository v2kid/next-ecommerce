import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { productApi } from "./product.service"

interface ProductState {
    ProductId: string
  }
  const initialState: ProductState = {
    ProductId: ''
  }
  
  const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      startEditProduct: (state, action) => {
        state.ProductId = action.payload
      },
      cancelEditProduct: (state) => {
        state.ProductId = ''
      },
    },
    extraReducers: (builder) => {
      builder.addMatcher(productApi.endpoints.updateProduct.matchFulfilled, (state, action) => {
        state.ProductId = ''
      })
    }
  })
  
const productReducer = productSlice.reducer
export const { cancelEditProduct, startEditProduct } = productSlice.actions
export default productReducer