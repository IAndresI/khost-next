import styles from './header.module.scss';
import Image from 'next/image';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <a href="#" className={styles.link}>
            <Image src="/images/header/logo.png" layout="fixed" width={150} height={50} alt="logo image" className={styles.logo}/>
          </a>
          <div className={styles.container}>
            <nav className={`${styles.nav} ${styles.navNav}`}>
              <button className={styles.navMini}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
              </button>
              <ul className={`${styles.list} ${styles.navList}`}>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>Home</a></li>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>Features</a></li>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>Pricing</a></li>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>Services</a></li>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>FAQ</a></li>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>Testimonial</a></li>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>Contact</a></li>
              </ul>
            </nav>
            <button className={styles.button}>sign up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;