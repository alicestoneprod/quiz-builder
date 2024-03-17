import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import AuthService from "services/AuthService"
import { UserI } from "shared/models/UserI"
import { displayError, displaySuccess } from "shared/helpers"
import axios from "axios"
import { isEmpty } from "lodash"

interface UserSliceI {
  user: UserI
  isAuth: boolean
  loading: boolean
}

export interface LoginPayload {
  email: string
  password: string
}

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }: LoginPayload): Promise<UserI> => {
    try {
      const response = await AuthService.login(email, password)
      localStorage.setItem("token", response.data.accessToken)
      displaySuccess("Вы успешно авторизовались!")
      return response.data.user
    } catch (e) {
      displayError(e as Error)
    }
  },
)

export const userSignup = createAsyncThunk(
  "user/signup",
  async ({ email, password }: LoginPayload): Promise<UserI> => {
    try {
      const response = await AuthService.signup(email, password)
      localStorage.setItem("token", response.data.accessToken)
      displaySuccess("Вы успешно зарегистрировались!")
      return response.data.user
    } catch (e) {
      displayError(e as Error)
    }
  },
)

export const userLogout = createAsyncThunk("user/logout", async (): Promise<void> => {
  try {
    await AuthService.logout()
    localStorage.removeItemItem("token")
  } catch (e) {
    displayError(e as Error)
  }
})

export const checkAuth = createAsyncThunk("user/checkAuth", async (): Promise<UserI> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/refresh`, {
      withCredentials: true,
    })
    localStorage.setItem("token", response.data.accessToken)
    return response.data.user
  } catch (e) {
    displaySuccess("Проверка авторизации прошла успешно")
  }
})

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isAuth: false,
    loading: false,
  } as UserSliceI,
  reducers: {
    setAuth: (state: UserSliceI, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    setUser: (state: UserSliceI, action: PayloadAction<UserI>) => {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      const { payload } = action
      state.isAuth = !isEmpty(payload)
      state.user = !payload ? ({} as UserI) : payload
    })
    builder.addCase(userSignup.fulfilled, (state, action) => {
      const { payload } = action
      state.isAuth = !isEmpty(payload)
      state.user = !payload ? ({} as UserI) : payload
    })
    builder.addCase(userLogout.fulfilled, (state) => {
      state.isAuth = false
      state.user = {} as UserI
    })
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      const { payload } = action
      state.isAuth = !isEmpty(payload)
      state.user = !payload ? ({} as UserI) : payload
    })
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled") || action.type.endsWith("/rejected"),
        (state) => {
          state.loading = false
        },
      )
  },
})

export const { setAuth, setUser } = userSlice.actions

export default userSlice.reducer
