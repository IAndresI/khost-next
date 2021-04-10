import {useEffect} from 'react';
import styles from './preview.module.scss';
import Particle from '../particle';

const Preview = () => {

  useEffect(() => {
    function particle({
      lifeTime = 10000,
      creationInterval = 400,
      maximumWidth = 50,
      additionalClass,
      bottomPadding = 0
    }) {
      const section = document.querySelector(`.${styles.figureContainer}`),
        parent = document.querySelector(`.${styles.preview}`),
        colors = ["#2854aa", "#0a98b1", "#a1284d", "#8c43ff", "#9a3a63", "#5c46cd", "219174"],
        type = ["p", "t", "c"],
        figure = document.createElement("span"),
        figureColor = colors[Math.floor(Math.random() * colors.length)],
        figureType = type[Math.floor(Math.random() * type.length)],
        figureSize = (Math.random() * maximumWidth);
      section.style.width = parent.offsetWidth + "px";
      section.style.height = parent.offsetHeight + "px";
      section.style.overflow = "hidden";

      if (additionalClass) figure.classList.add(additionalClass);
      let figureTop = Math.random() * innerHeight;
      if (figureTop >= parent.offsetHeight - bottomPadding) figureTop = parent.offsetHeight - bottomPadding;
      figure.style.position = "absolute";
      figure.style.width = figure.style.height = figureSize + "px";
      figure.style.left = Math.random() * document.documentElement.offsetWidth + "px";
      figure.style.top = figureTop + "px";
      figure.style.backgroundColor = figureColor;
      switch (figureType) {
        case "p":
          figure.classList.add(`${styles.p}`)
          break;
        case "c":
          figure.classList.add(`${styles.c}`)
          break;
        case "t":
          figure.classList.add(`${styles.t}`)
          break;
        default:
          figure.classList.add(`${styles.c}`)
          break;
      }
      if (Math.random() < 0.4) figure.style.boxShadow = `0 0 10px 20px ${figureColor}`;

      section.append(figure);
      setTimeout(() => {
        figure.remove();
      }, lifeTime);
      setTimeout(function () {
        particle({
          lifeTime: lifeTime,
          additionalClass: styles.figure,
          bottomPadding: 150
        });
      }, creationInterval);
    }
    
    particle({
      additionalClass: styles.figure,
      bottomPadding: 150
    });


    const resizeForParticles = () => {
      section.style.width = parent.offsetWidth + "px";
      section.style.height = parent.offsetHeight + "px";
      section.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeForParticles);
    return () => window.removeEventListener("resize", resizeForParticles)
  }, [])
  
  return (
    <section className={styles.preview}>
      <div className={styles.figureContainer}></div>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.container}>
            <div className={styles.title}>Find your best domain name and create a Site</div>
            <div className={styles.text}>
              Up to 50% Off Domain and Hosting, Starting from $ 2.50/Month, Free SSL Certificate, Money Back Gurantee.
            </div>
            <div className={styles.formContainer}>
              <form action="#" className={styles.form}>
                <input type="text" className={styles.input} placeholder="Enter your name here" />
                <select className={styles.select}>
                  <option value="" selected>.com</option>
                  <option value="">.net</option>
                  <option value="">.info</option>
                  <option value="">.store</option>
                  <option value="">.mobi</option>
                  <option value="">.biz</option>
                </select>
                <button className={styles.submit} type="submit">Search</button>
              </form>
            </div>
          </div>
          <ul className={`${styles.productList} list`}>
            <li className={styles.productItem}>
              <div className={styles.name}>.com</div>
              <div className={styles.price}>$10.5</div>
              <div className={styles.image}></div>
            </li>
            <li className={styles.productItem}>
              <div className={`${styles.name} ${styles.info}`}>.info</div>
              <div className={styles.price}>$3.5</div>
              <div className={`${styles.image} ${styles.info}`}></div>
            </li>
            <li className={styles.productItem}>
              <div className={`${styles.name} ${styles.net}`}>.net</div>
              <div className={styles.price}>$2.75</div>
              <div className={`${styles.image} ${styles.net}`}></div>
            </li>
            <li className={styles.productItem}>
              <div className={`${styles.name} ${styles.store}`}>.store</div>
              <div className={styles.price}>$6.5</div>
              <div className={`${styles.image} ${styles.store}`}></div>
            </li>
            <li className={styles.productItem}>
              <div className={`${styles.name} ${styles.mobi}`}>.mobi</div>
              <div className={styles.price}>$7.5</div>
              <div className={`${styles.image} ${styles.mobi}`}></div>
            </li>
            <li className={styles.productItem}>
              <div className={`${styles.name} ${styles.biz}`}>.biz</div>
              <div className={styles.price}>$2.5</div>
              <div className={`${styles.image} ${styles.biz}`}></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Preview;