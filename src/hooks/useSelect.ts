import { useCallback, useState } from 'react'

type IOption = { label: string; value: string }

type IOpts = {
  defaultTitle?: string
}

export const useSelect = (
  values: IOption[],
  selectedValue?: IOption | null,
  { defaultTitle }: IOpts = {},
) => {
  const [selected, setSelected] = useState(selectedValue)
  const onChange = useCallback((option: IOption | null) => {
    if (option === null) return
    setSelected(option)
  }, [])
  return {
    options: defaultTitle
      ? [{ label: defaultTitle, value: '' }, ...values]
      : values,
    value: selected,
    onChange,
  }
}
