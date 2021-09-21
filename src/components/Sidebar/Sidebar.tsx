import styles from './Sidebar.module.scss'
import samanthaImage from '../../assets/png/samantha.png'
import { Link, useLocation } from 'react-router-dom'

const sidebarNavLinks = [
  'dashboard',
  'expences',
  'wallets',
  'summary',
  'accounts',
  'settings',
]

export default function Sidebar() {
  const loacation = useLocation()
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebar_content}>
          <div className={styles.profile_details}>
            <div className={styles.profile_image_div}>
              <img src={samanthaImage} alt='profile-picture' />
              <p className={styles.notifications}>3</p>
            </div>
            <p className={styles.user_name}>Lisa</p>
            <p className={styles.user_email}>hi.lisa@email.com</p>
          </div>
          <nav className={styles.sidebar_nav}>
            <ul>
              {sidebarNavLinks.map((sidebarNavLink) => (
                <li className={styles.sidebar_nav_item}>
                  <Link
                    className={
                      loacation.pathname === `/${sidebarNavLink}`
                        ? styles.sidebar_nav_link_active
                        : styles.sidebar_nav_link
                    }
                    to={`/${sidebarNavLink}`}
                  >
                    {sidebarNavLink.charAt(0).toUpperCase() +
                      sidebarNavLink.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}
