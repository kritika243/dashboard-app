import styles from './Expences.module.scss'
import person1 from '../../assets/png/person1.png'
import person2 from '../../assets/png/person2.png'
import person3 from '../../assets/png/person3.png'
import addIcon from '../../assets/png/addIcon.png'

import { BarChart, Bar, ResponsiveContainer } from 'recharts'

export default function Expences() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]
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
            <ResponsiveContainer width='100%' minHeight='9vh'>
              <BarChart width={150} height={40} data={data}>
                <Bar dataKey='uv' fill='rgba(21, 122, 255, 0.2)' />
              </BarChart>
            </ResponsiveContainer>
          </section>
        </div>
      </main>
    </>
  )
}
