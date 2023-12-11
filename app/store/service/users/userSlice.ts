import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { userApi } from "./user.service"

interface UserState {
    UserId: string
  }
  const initialState: UserState = {
    UserId: ''
  }
  
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      startEditUser: (state, action) => {
        state.UserId = action.payload
      },
      cancelEditUser: (state) => {
        state.UserId = ''
      },
    },
    // extraReducers: (builder) => {
    //   builder.addMatcher(userApi.endpoints..matchFulfilled, (state, action) => {
    //     state.UserId = ''
    //   })
    // }
  })
  
const userReducer = userSlice.reducer
export const { startEditUser, cancelEditUser } = userSlice.actions
export default userReducer