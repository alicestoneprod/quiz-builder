import { configureStore } from "@reduxjs/toolkit"
import userSlice from "store/slices/userSlice"
import loadingSlice from "./slices/loadingSlice"

export const store = configureStore({
  reducer: {
    user: userSlice,
    loading: loadingSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
