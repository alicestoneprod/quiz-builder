import toast from "react-hot-toast"

interface Message {
  message: string
}

interface Data {
  data: Message
}

export interface Error {
  response?: Data
  message?: string
}

export const displayError = (e: Error): void => {
  toast.error(e?.response?.data?.message || e?.message || "Unknown error")
}
