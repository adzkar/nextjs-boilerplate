import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Home } from '../src/containers';

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sample App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Home /> */}
    </div>
  );
}
