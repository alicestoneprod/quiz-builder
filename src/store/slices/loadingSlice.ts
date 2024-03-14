import { createSlice } from "@reduxjs/toolkit"

interface LoadingI {
  status: boolean
}

export const loadingSlice = createSlice({
  name: "user",
  initialState: {
    status: false,
  } as LoadingI,
  reducers: {
    setIsNotLoading: (state: LoadingI) => {
      state.status = false
    },
    setIsLoading: (state: LoadingI) => {
      state.status = true
    },
  },
})

export const { setIsNotLoading, setIsLoading } = loadingSlice.actions

export default loadingSlice.reducer
