import styles from './layout.module.scss';
import Head from 'next/head'
import Header from '../header';

const Layout = ({title="KHOST", children}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
      </footer>
    </>
  );
};

export default Layout;