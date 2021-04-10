import styles from './particle.module.scss';

const Particle = ({name}) => {
  return (<span className={`${styles.figure} ${name}`}></span>)
};

export default Particle;