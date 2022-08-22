import React from 'react'
import styles, {layout} from '../style.js'
import Button from './Button'
import {features} from '../constants'

export const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden'/> we'll handle the money.</h2>
        <p></p>
      </div>
    </section>
  )
}
