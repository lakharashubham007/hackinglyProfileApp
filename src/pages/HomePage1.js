// import Head from 'next/head';
import Header from '../components/Header/Header';
import ProfileBanner from '../components/ProfileBanner/ProfileBanner';
import ProfileInfo from '../components/ProfileInfo/ProfileInfo';
// import styles from '../app/globals.css';
import styles from './Homepage1.module.css';
import Experience from '../components/Experience/Experience';
import Achievements from '../components/Achievements/Achievements';
// import Profile from '@/components/Profile/Profile';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className={styles.container1}>
      {/* <Head>
        <title>Hackingly Profile Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Header />

      <main className={styles.container}>
        <ProfileBanner />
        <ProfileInfo />
        <Experience />
        <Achievements />
        <Footer />
      </main>
    </div>
  );
}
