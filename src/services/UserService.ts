import { api } from "api"
import { AxiosResponse } from "axios"
import { UserI } from "shared/models"

export default class AuthService {
  static async getUsers(): Promise<AxiosResponse<UserI[]>> {
    return api.get<UserI[]>("/users")
  }
}
