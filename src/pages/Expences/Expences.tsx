import styles from './Expences.module.scss'
import person1 from '../../assets/png/person1.png'
import person2 from '../../assets/png/person2.png'
import person3 from '../../assets/png/person3.png'
import addIcon from '../../assets/png/addIcon.png'

export default function Expences() {
  return (
    <>
      <main className={styles.expences}>
        <div className={styles.expences_card}>
          <section className={styles.expences_overview}>
            <div className={styles.expences_header}>
              <p className={styles.expences_title}>Expences</p>
              <div className={styles.expences_actions}>
                <div className={styles.people}>
                  <img src={person1} alt='person 1' />
                  <img src={person2} alt='person 2' />
                  <img src={person3} alt='person 3' />
                </div>
                <button>
                  <img src={addIcon} alt='add more' />
                </button>
              </div>
            </div>
            <p className={styles.date}>01 - 31 Jan, 2022</p>
          </section>
        </div>
      </main>
    </>
  )
}
