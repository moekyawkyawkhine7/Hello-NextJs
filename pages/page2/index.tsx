import React from 'react'
// css module
// you cannot use like this index.css because it is only work for _app.txs as a global file.
// if you import index.css in this file, you will be alarmed some warning because NextJs already know that this files is a global file.
// import './index.module.css'; // if you want to use this kind of style, you need to set up some configuration about this.
import styles from './index.module.css'; 

const index = () => {
  return (
    <div>
        <h1>Header1</h1>
        <h2 className={styles.heading2}>Header2</h2>
    </div>
  )
}

export default index