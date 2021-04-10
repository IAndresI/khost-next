import styles from './world.module.scss';
const World = () => {
  return (
    <section className={styles.world}>
      <div className="title title--white">
        <div className="title__image-container">
          <div className="title__image"></div>
          <span className="title__line"></span>
          <span className="title__line title__line--left"></span>
        </div>
        <div className="title__main">Get our services from world wide</div>
        <div className="title__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since
        </div>
      </div>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.map}>
            <img src="/images/map/map.png" alt="map" className={styles.image}/>
            <div className={`${styles.dot} animation-left`}>
              <div className={`${styles.country} ${styles.green}`}>Washington</div>
            </div>
            <div className={`${styles.dot} ${styles.newyork} animation-left`}>
              <div className={styles.country}>New York</div>
            </div>
            <div className={`${styles.dot} ${styles.brazil} animation-bottom`}>
              <div className={styles.country}>Brazil</div>
            </div>
            <div className={`${styles.dot} ${styles.russia} animation-top`}>
              <div className={styles.country}>Russia</div>
            </div>
            <div className={`${styles.dot} ${styles.london} animation-top`}>
              <div className={`${styles.country} ${styles.green}`}>London</div>
            </div>
            <div className={`${styles.dot} ${styles.middle} animation-right`}>
              <div className={styles.country}>Middle East</div>
            </div>
            <div className={`${styles.dot} ${styles.afrika} animation-bottom`}>
              <div className={styles.country}>Afrika</div>
            </div>
            <div className={`${styles.dot} ${styles.singapore} animation-right`}>
              <div className={`${styles.country} ${styles.green}`}>Singapore</div>
            </div>
            <div className={`${styles.dot} ${styles.australia} animation-bottom`}>
              <div className={`${styles.country} ${styles.green}`}>Australia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default World;