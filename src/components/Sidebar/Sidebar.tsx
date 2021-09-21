import styles from './Sidebar.module.scss'
import samanthaImage from '../../assets/png/samantha.png'

export default function Sidebar() {
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
        </div>
      </aside>
    </>
  )
}
