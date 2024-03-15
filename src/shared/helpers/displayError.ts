import toast from "react-hot-toast"

export interface Error {
  response?: Data
  message?: string
}

interface Message {
  message: string
}

interface Data {
  data: Message
}

export const displayError = (e: Error): void => {
  toast.error(e?.response?.data?.message || e?.message || "Unknown error")
}
