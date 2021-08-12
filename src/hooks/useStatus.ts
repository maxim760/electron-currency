import { useState, useCallback } from 'react'
import { STATUS } from '../types/common'

type IStatus = {
  status: STATUS
  message?: string
}

export type ISetStatusFn = (
  status: STATUS,
  message?: string | undefined,
) => void
export type IUpdateStatusMsgFn = (message: string) => void

export const useStatus = (defaultStatus = STATUS.NEVER) => {
  const [status, setStatus] = useState<IStatus>({ status: defaultStatus })
  const setNewStatus: ISetStatusFn = useCallback(
    (status: STATUS, message?: string) => {
      setStatus({ status, message })
    },
    [setStatus],
  )
  const updateMessage: IUpdateStatusMsgFn = useCallback(
    (message: string) => {
      setStatus((prev) => ({ ...prev, message }))
    },
    [setStatus],
  )
  return {
    statusMessage: status.message,
    setStatus: setNewStatus,
    updateMessage,
    isLoading: status.status === STATUS.LOADING,
    isNone: status.status === STATUS.NEVER,
    isSuccess: status.status === STATUS.SUCCESS,
    isError: status.status === STATUS.ERROR,
  }
}
