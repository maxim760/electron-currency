import React from 'react'
import styles from './button.module.css'

type ButtonProps = {
  children: React.ReactNode
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <button className={[className, styles.btn].join(' ')} {...props}>
      {children}
    </button>
  )
}
