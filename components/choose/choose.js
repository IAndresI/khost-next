import styles from './choose.module.scss';
const Choose = () => {
  return (
    <section className="choose">
      <div className="title">
        <div className="title__image-container">
          <div className="title__image"></div>
          <span className="title__line"></span>
          <span className="title__line title__line--left"></span>
        </div>
        <div className="title__main">
          Why they choose <a className="link title__special" href="#">KHOST</a>
        </div>
        <div className="title__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since
        </div>
      </div>
      <div className="container">
        <div className={styles.item}>
          <div className={styles.description}>
            <div className={styles.name}>online support</div>
            <div className={styles.title}>24/7 online Castomer support</div>
            <div className={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when.
            </div>
          </div>
          <img src="/images/choose/online-customer.png" alt="choose image" className={styles.image} />
        </div>
        <div className={styles.item}>
          <div className={styles.description}>
            <div className={`${styles.name} ${styles.yellow}`}>cloud hosting</div>
            <div className={styles.title}>Complete cloud hosting Solution</div>
            <div className={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when.
            </div>
          </div>
          <img src="/images/choose/complete.png" alt="choose image" className={styles.image} />
        </div>
        <div className={styles.item}>
          <div className={styles.description}>
            <div className={`${styles.name} ${styles.pink}`}>dedicated hosting</div>
            <div className={styles.title}>We are provide dedicated Hosting</div>
            <div className={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when.
            </div>
          </div>
          <img src="/images/choose/hosting.png" alt="choose image" className={styles.image} />
        </div>
        <div className={styles.item}>
          <div className={styles.description}>
            <div className={`${styles.name} ${styles.green}`}>privacy protected</div>
            <div className={styles.title}>Stay protected Advanced firewall</div>
            <div className={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when.
            </div>
          </div>
          <img src="/images/choose/protect.png" alt="choose image" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default Choose;