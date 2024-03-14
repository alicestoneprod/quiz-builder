import { emailRegex } from "shared/constants/regs"

export const isEmail = (email: string): boolean => {
  return emailRegex.test(email)
}
