import styles from './header.module.scss';
import Image from 'next/image';
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__inner">
          <a href="#" className="link header__link">
            <Image src="/images/header/logo.png" layout="fixed" width={150} height={50} alt="logo image" className="header__logo"/>
          </a>
          <div className="header__container">
            <nav className="header__nav nav">
              <button className="header__nav-mini">
                <span className="header__line"></span>
                <span className="header__line"></span>
                <span className="header__line"></span>
              </button>
              <ul className="list nav__list">
                <li className="nav__item"><a href="#" className="link nav__link">Home</a></li>
                <li className="nav__item"><a href="#" className="link nav__link">Features</a></li>
                <li className="nav__item"><a href="#" className="link nav__link">Pricing</a></li>
                <li className="nav__item"><a href="#" className="link nav__link">Services</a></li>
                <li className="nav__item"><a href="#" className="link nav__link">FAQ</a></li>
                <li className="nav__item"><a href="#" className="link nav__link">Testimonial</a></li>
                <li className="nav__item"><a href="#" className="link nav__link">Contact</a></li>
              </ul>
            </nav>
            <button className="header__button">sign up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;