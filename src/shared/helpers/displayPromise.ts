import toast from "react-hot-toast"

interface DisplayPromiseI {
  promise: Promise<unknown>
  loading: string
  success: string
  error: string
}

export const displayPromise = ({
  promise,
  loading,
  success,
  error,
}: DisplayPromiseI): void => {
  toast.promise(promise, {
    loading,
    success,
    error,
  })
}
