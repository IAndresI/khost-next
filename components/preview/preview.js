import styles from './preview.module.scss';
const Preview = () => {
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