import toast from "react-hot-toast"

export const displaySuccess = (message: string): void => {
  toast.success(message)
}
