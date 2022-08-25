import React from 'react'
import {apple, bill, google} from '../assets'
import styles, {layout} from '../style.js'

export const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w=[100%] h-[100%] relative z-[5]'/>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full pink__gradient"/>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] `}>
        Invoicing is a big part of any business. We’ve built a simple, easy to use billing system that allows you to easily manage your invoices and payments.
      </p>
    </div>

  </section>
)