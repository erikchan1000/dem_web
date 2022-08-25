import {clients} from '../constants'
import styles from '../style.js'

export const Clients = () => (
  <section className={`${styles.flexCenter} myy-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain hover:opacity-50 duration-300 ease-out"/>
        </div>
      ))}
    </div>
  </section>
)
