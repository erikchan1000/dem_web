import React from 'react'
import styles, {layout} from '../style.js'
import {Button} from './Button'
import {features} from '../constants'

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : 
"mb-0"} feature-card`}>
    <div>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
    </div>
  </div>
)

export const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden'/> we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

        <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg}`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}
