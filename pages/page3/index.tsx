import React from 'react'
// Sass => That gives lots of power to CSS which means you can code more effectively and more maintainable. 
import styles from './index.module.scss';

const index = () => {
  return (
    <div>
        <h1 className={styles.mainHeader}>
            Main Header <br/>
            <span>Hello Everyone!</span>
        </h1>
    </div>
  )
}

export default index