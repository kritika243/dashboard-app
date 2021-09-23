import { useState } from 'react'
import styles from './Expences.module.scss'
import person1 from '../../assets/png/person1.png'
import person2 from '../../assets/png/person2.png'
import person3 from '../../assets/png/person3.png'
import addIcon from '../../assets/png/addIcon.png'
import optionsIcon from '../../assets/png/menuIcon.png'
import cartIcon from '../../assets/svg/cartIcon.svg'
import transportIcon from '../../assets/svg/transportIcon.svg'
import houseIcon from '../../assets/svg/houseIcon.svg'

import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts'

export default function Expences() {
  const [activeIndex, setActiveIndex] = useState(0)
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
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
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
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ]

  const todayExpenses = [
    {
      id: 1,
      expense: 'Grocery',
      time: '3:20 pm',
      location: 'New Delhi',
      price: 326.8,
      icon: cartIcon,
      iconBackgroundColor: '#FFE05D',
    },
    {
      id: 2,
      expense: 'Transportation',
      time: '8:12 am',
      location: 'New Delhi',
      price: 150.0,
      icon: transportIcon,
      iconBackgroundColor: '#7A57D1',
    },
    {
      id: 3,
      expense: 'Housing',
      time: '6:30 pm',
      location: 'New Delhi',
      price: 750.75,
      icon: houseIcon,
      iconBackgroundColor: '#4FC1E9',
    },
  ]
  const previousExpenses = [
    {
      id: 1,
      expense: 'Food and Drink',
      time: '5:30 pm',
      location: 'New Delhi',
      price: 156.0,
      icon: cartIcon,
      iconBackgroundColor: '#DC3434',
    },
    {
      id: 2,
      expense: 'Entertainment',
      time: '7:20 pm',
      location: 'New Delhi',
      price: 140,
      icon: transportIcon,
      iconBackgroundColor: '#4BA83D',
    },
  ]

  const spentCategories = [
    {
      id: 1,
      category: 'Food and Drinks',
      price: 872.4,
    },
    {
      id: 2,
      category: 'Shopping',
      price: 1378.2,
    },
    {
      id: 3,
      category: 'Housing',
      price: 928.5,
    },
    {
      id: 4,
      category: 'Transportation',
      price: 420.7,
    },
    {
      id: 5,
      category: 'Vehicle',
      price: 520,
    },
  ]

  const mouseOverHandler = (data: any, index: number) => setActiveIndex(index)
  return (
    <>
      <main className={styles.expences}>
        <div className={styles.expences_card}>
          <section className={styles.expences_overview}>
            <div className={styles.expences_header}>
              <p className={styles.expences_title}>Expences</p>
              <div className={styles.expences_actions}>
                <div className={styles.people}>
                  <img
                    className={styles.person_one}
                    src={person1}
                    alt='person 1'
                  />
                  <img
                    className={styles.person_two}
                    src={person2}
                    alt='person 2'
                  />
                  <img
                    className={styles.person_three}
                    src={person3}
                    alt='person 3'
                  />
                </div>
                <button>
                  <img
                    className={styles.add_icon}
                    src={addIcon}
                    alt='add more'
                  />
                </button>
              </div>
            </div>
            <p className={styles.date}>01 - 31 Jan, 2021</p>
            <ResponsiveContainer width='100%' height='10%'>
              <BarChart data={data}>
                <Bar
                  dataKey='uv'
                  fill='rgba(21, 122, 255, 0.2)'
                  onMouseOver={mouseOverHandler}
                >
                  {data.map((entry, index) => (
                    <Cell
                      cursor='pointer'
                      fill={
                        index === activeIndex
                          ? 'rgba(21, 122, 255)'
                          : 'rgba(21, 122, 255, 0.2)'
                      }
                      key={index}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className={styles.expences_overview_header}>
              <p className={styles.expences_overview_title}>Today</p>
              <button>
                <img
                  className={styles.expense_option}
                  src={optionsIcon}
                  alt='options'
                />
              </button>
            </div>
            <ul>
              {todayExpenses.map((expense) => (
                <li className={styles.expense_item} key={expense.id}>
                  <div className={styles.expense_item_left}>
                    <div
                      style={{ backgroundColor: expense.iconBackgroundColor }}
                      className={styles.expense_item_div}
                    >
                      <img src={expense.icon} alt={expense.expense} />
                    </div>
                    <div className={styles.expense_item_details}>
                      <p className={styles.expense_item_title}>
                        {expense.expense}
                      </p>
                      <p className={styles.expense_item_time}>
                        {expense.time} • {expense.location}
                      </p>
                    </div>
                  </div>
                  <p className={styles.expense_item_price}>
                    {expense.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
            <div className={styles.expences_overview_header}>
              <p className={styles.expences_overview_title}>
                Monday, 15 Feb 2021
              </p>
              <button>
                <img
                  className={styles.expense_option}
                  src={optionsIcon}
                  alt='options'
                />
              </button>
            </div>
            <ul>
              {previousExpenses.map((expense) => (
                <li className={styles.expense_item} key={expense.id}>
                  <div className={styles.expense_item_left}>
                    <div
                      style={{ backgroundColor: expense.iconBackgroundColor }}
                      className={styles.expense_item_div}
                    >
                      <img src={cartIcon} alt={expense.expense} />
                    </div>
                    <div className={styles.expense_item_details}>
                      <p className={styles.expenseItemTitle}>
                        {expense.expense}
                      </p>
                      <p className={styles.expense_item_time}>
                        {expense.time} • {expense.location}
                      </p>
                    </div>
                  </div>
                  <p className={styles.expense_item_price}>
                    {expense.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.money_overview}>
            <p className={styles.money_overview_title}>
              Where'd your money go?
            </p>

            <ul>
              {spentCategories.map((category) => (
                <li key={category.id}>
                  <div className={styles.spent_category}>
                    <p className={styles.spent_category_name}>
                      {category.category}
                    </p>
                    <p className={styles.spent_category_price}>
                      {category.price.toFixed(2)}
                    </p>
                  </div>
                  <div className={styles.spent_category_bar}>
                    <div
                      style={{
                        width: `${
                          (category.price /
                            spentCategories.reduce(
                              (acc, current) => acc + current.price,
                              0
                            )) *
                          100
                        }%`,
                      }}
                      className={styles.spent_category_colored_bar}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}
