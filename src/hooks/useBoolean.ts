import { useCallback, useState } from 'react'

export const useBoolean = (initial: boolean = false) => {
  const [flag, setFlag] = useState(initial)
  const toggle = useCallback(() => {
    setFlag((prev) => !prev)
  }, [])
  const setTrue = useCallback(() => {
    setFlag(true)
  }, [])
  const setFalse = useCallback(() => {
    setFlag(false)
  }, [])
  return { flag, toggle, setTrue, setFalse }
}
