import styles from './technology.module.scss';
const Technology = () => {
  return (
    <section className={styles.technology}>
      <div className="container">
        <div className="title">
          <div className="title__image-container">
            <div className="title__image"></div>
            <span className="title__line"></span>
            <span className="title__line title__line--left"></span>
          </div>
          <div className="title__main">The latest hosting server technology</div>
          <div className="title__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since
          </div>
        </div>
        <div className={styles.inner}>
          <ul className={`${styles.list} list`}>
            <li className={styles.item}>
              <span className={`${styles.spot} ${styles.green}`}></span>
              <div className={styles.image}></div>
              <div className={styles.title}>Easy to Setup</div>
              <div className={styles.text}>
                Lorem Ipsum is simply dummy and typesetting industry.
              </div>
            </li>
            <li className={styles.item}>
              <span className={styles.spot}></span>
              <div className={`${styles.image} ${styles.fast}`}></div>
              <div className={styles.title}>Fast Performance</div>
              <div className={styles.text}>
                Lorem Ipsum is simply dummy and typesetting industry.
              </div>
            </li>
            <li className={styles.item}>
              <span className={`${styles.spot} ${styles.blue}`}></span>
              <div className={`${styles.image} ${styles.privacy}`}></div>
              <div className={styles.title}>Privacy Protected</div>
              <div className={styles.text}>
                Lorem Ipsum is simply dummy and typesetting industry.
              </div>
            </li>
            <li className={styles.item}>
              <span className={`${styles.spot} ${styles.purple}`}></span>
              <div className={`${styles.image} ${styles.mounthly}`}></div>
              <div className={styles.title}>Monthly Backup</div>
              <div className={styles.text}>
                Lorem Ipsum is simply dummy and typesetting industry.
              </div>
            </li>
            <li className={styles.item}>
              <span className={`${styles.spot} ${styles.pink}`}></span>
              <div className={`${styles.image} ${styles.free}`}></div>
              <div className={styles.title}>Free SSL Certificate</div>
              <div className={styles.text}>
                Lorem Ipsum is simply dummy and typesetting industry.
              </div>
            </li>
            <li className={styles.item}>
              <span className={`${styles.spot} ${styles.yellow}`}></span>
              <div className={`${styles.image} ${styles.boost}`}></div>
              <div className={styles.title}>Boost Option</div>
              <div className={styles.text}>
                Lorem Ipsum is simply dummy and typesetting industry.
              </div>
            </li>
            <li className={styles.item}>
              <span className={`${styles.spot} ${styles.purple}`}></span>
              <div className={`${styles.image} ${styles.multiple}`}></div>
              <div className={styles.title}>Multiple Network</div>
              <div className={styles.text}>
                Lorem Ipsum is simply dummy and typesetting industry.
              </div>
            </li>
            <li className={styles.item}>
              <span className={`${styles.spot} ${styles.red}`}></span>
              <div className={`${styles.image} ${styles.unlimited}`}></div>
              <div className={styles.title}>Unlimited Database</div>
              <div className={styles.text}>
                Lorem Ipsum is simply dummy and typesetting industry.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Technology;