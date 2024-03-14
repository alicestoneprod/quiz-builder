import toast from "react-hot-toast"

export interface Error {
  response?: Data
  message?: string
}

interface Data {
  data: Message
}

interface Message {
  message: string
}

export const displayError: (e: Error) => void = (e: Error): void => {
  toast.error(e?.response?.data?.message || e?.message || "Unknown error")
}
