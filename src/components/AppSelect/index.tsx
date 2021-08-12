import React from 'react'
import Select, { NamedProps } from 'react-select'
import styles from './select.module.css'
import { useBoolean } from '../../hooks/useBoolean'

type SelectProps = {
  label: string
} & NamedProps

export const AppSelect: React.FC<SelectProps> = ({
  label,
  className = '',
  ...props
}) => {
  const { flag: isOpen, toggle, setTrue: open, setFalse: close } = useBoolean()
  return (
    <div className={[styles.select, className].join(' ')}>
      <div onClick={toggle} className={styles.title}>
        {label}
      </div>
      <Select
        className={styles.selectEl}
        menuIsOpen={isOpen}
        onMenuOpen={open}
        onMenuClose={close}
        {...props}
      />
    </div>
  )
}
