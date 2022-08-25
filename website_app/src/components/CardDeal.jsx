import {card} from '../assets'
import styles, {layout} from '../style.js'
import {Button} from './Button'

export const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden"/> in a few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] ,t-5`}>
        We’ve built a simple, easy to use card deal system that allows you to easily find a better card deal in a few easy steps.
      </p>
      <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]'/>
    </div>
  </section>
)
