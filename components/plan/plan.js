import {useState} from 'react'
import styles from './plan.module.scss';

const Plan = () => {
  const [plan, setPlan] = useState("");


    return (
        <section className={styles.plan}>
          <div className="container">
            <div className='title'>
              <div className="title__image-container">
                <div className="title__image"></div>
                <span className="title__line"></span>
                <span className="title__line title__line--left"></span>
              </div>
              <div className="title__main">Choose the best hosting plan</div>
              <div className="title__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since
              </div>
            </div>
            <div className={styles.inner}>
              <div className={styles.buttonContainer}>
                <span className={`${styles.activeSpan} ${plan === "yearly" ? styles.activeSpanRight : null}`}></span>
                <button 
                  className={`${styles.button} ${!plan ? styles.active : null}`} 
                  data-side="left"
                  onClick={() => setPlan("")}>Monthly</button>
                <button 
                  className={`${styles.button} ${plan === "yearly" ? styles.active : null}`}
                  data-side="right"
                  onClick={() => setPlan("yearly")}>Yearly</button>
              </div>
              <ul className={`${styles.list} list`}>
                <li className={`${styles.tarif} ${plan ? styles.yearly : null}`}>
                  <div className={styles.spot}></div>
                  <div className={styles.title}>Free Trial</div>
                  <div className={styles.text}>Lite choose</div>
                  <div className={styles.typeContainer}>
                    <div className={styles.type}>Comfort</div>
                  </div>
                  <div className={styles.description}>
                    {
                      plan != "yearly" ?
                      (<div className={`${styles.price} ${styles.mounthly}`}>$<span className={styles.counter}>0.00</span></div>)
                      :
                      (<div className={`${styles.price} ${styles.yearly}`}>$<span className={styles.counter}>0.00</span></div>)
                    }
                    <ul className={styles.descriptionList}>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>10GB Storage Space</li>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>50GB Bandwidth</li>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>10 Free Sub-Domains</li>
                      <li className={`${styles.descriptionItem} ${styles.disable} icon-check-circle-o`}>
                        100 E-mail Accounts</li>
                      <li className={`${styles.descriptionItem} ${styles.disable} icon-check-circle-o`}>
                        Control Panel &FTP
                      </li>
                      <li className={`${styles.descriptionItem} ${styles.disable} icon-check-circle-o`}>
                        Unlimited Support
                      </li>
                    </ul>
                  </div>
                  <a href="#" className={`link ${styles.link}`}>Try Now</a>
                </li>
                <li className={`${styles.tarif} ${plan ? styles.yearly : null} ${styles.startup}`}>
                  <div className={styles.spot}></div>
                  <div className={styles.title}>Startup</div>
                  <div className={styles.text}>Experienced choose</div>
                  <div className={styles.typeContainer}>
                    <div className={styles.type}>Standard</div>
                  </div>
                  <div className={styles.description}>
                    {
                      plan != "yearly" ?
                      (<div className={`${styles.price} ${styles.mounthly}`}>$<span className={styles.counter}>12.00</span></div>)
                      :
                      (<div className={`${styles.price} ${styles.yearly}`}>$<span className={styles.counter}>20.00</span></div>)
                    }
                    <ul className={styles.descriptionList}>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>10GB Storage Space</li>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>50GB Bandwidth</li>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>10 Free Sub-Domains</li>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>
                        100 E-mail Accounts</li>
                      <li className={`${styles.descriptionItem} ${styles.disable} icon-check-circle-o`}>
                        Control Panel &FTP
                      </li>
                      <li className={`${styles.descriptionItem} ${styles.disable} icon-check-circle-o`}>
                        Unlimited Support
                      </li>
                    </ul>
                  </div>
                  <a href="#" className={`link ${styles.link}`}>Try Now</a>
                </li>
                <li className={`${styles.tarif} ${plan ? styles.yearly : null} ${styles.popular}`}>
                  <div className={styles.spot}></div>
                  <div className={styles.title}>Popular</div>
                  <div className={styles.text}>Professional choose</div>
                  <div className={styles.typeContainer}>
                    <div className={styles.type}>Featured Item</div>
                  </div>
                  <div className={styles.description}>
                    {
                      plan != "yearly" ?
                      (<div className={`${styles.price} ${styles.mounthly}`}>$<span className={styles.counter}>25.00</span></div>)
                      :
                      (<div className={`${styles.price} ${styles.yearly}`}>$<span className={styles.counter}>40.00</span></div>)
                    }
                    <ul className={styles.descriptionList}>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>10GB Storage Space</li>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>50GB Bandwidth</li>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>10 Free Sub-Domains</li>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>
                        100 E-mail Accounts</li>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>
                        Control Panel &FTP
                      </li>
                      <li className={`${styles.descriptionItem} ${styles.disable} icon-check-circle-o`}>
                        Unlimited Support
                      </li>
                    </ul>
                  </div>
                  <a href="#" className={`link ${styles.link}`}>Try Now</a>
                </li>
                <li className={`${styles.tarif} ${plan ? styles.yearly : null} ${styles.premium}`}>
                  <div className={styles.spot}></div>
                  <div className={styles.title}>Premium</div>
                  <div className={styles.text}>Expret choose</div>
                  <div className={styles.typeContainer}>
                    <div className={styles.type}>Premium</div>
                  </div>
                  <div className={styles.description}>
                    {
                      plan != "yearly" ?
                      (<div className={`${styles.price} ${styles.mounthly}`}>$<span className={styles.counter}>50.00</span></div>)
                      :
                      (<div className={`${styles.price} ${styles.yearly}`}>$<span className={styles.counter}>80.00</span></div>)
                    }
                    <ul className={styles.descriptionList}>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>10GB Storage Space</li>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>50GB Bandwidth</li>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>10 Free Sub-Domains</li>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>
                        100 E-mail Accounts</li>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>
                        Control Panel &FTP
                      </li>
                      <li className={`${styles.descriptionItem} icon-check-circle-o`}>
                        Unlimited Support
                      </li>
                    </ul>
                  </div>
                  <a href="#" className={`link ${styles.link}`}>Try Now</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
    );
};

export default Plan;