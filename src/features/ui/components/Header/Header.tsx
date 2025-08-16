import styles from './Header.module.css'
import logo from '@img/logo.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <img src={logo} alt="Company Logo" className={styles.logo} />

        {/* Навигация */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="/about" className={styles.navLink}>О компании</a>
            </li>
            <li>
              <a href="/pogliano" className={styles.navLink}>Продукция</a>
            </li>
            <li>
              <a href="/contacts" className={styles.navLink}>Контакты</a>
            </li>
          </ul>
        </nav>

        {/* Мобильное меню (бургер) */}
        <div className="md:hidden">
          <button className={styles.burger}>
            <svg className={styles.burgerIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
