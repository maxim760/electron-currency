import React from 'react'
import styles from './loader.module.css'

type LoaderProps = {
  className?: string
}

// https://loading.io/css/
export const Loader: React.FC<LoaderProps> = ({ children, className = '' }) => {
  return (
    <div className={[className, styles.wrapper].join(' ')}>
      <div className={styles.roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {children}
    </div>
  )
}
