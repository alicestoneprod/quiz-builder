import { UserI } from "shared/models/UserI"

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: UserI
}
