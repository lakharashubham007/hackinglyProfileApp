// import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="https://www.hackingly.in/_next/static/media/G.c726709e.webp" alt="Hackingly Logo" />
      </div>
      <nav>
        {/* <Link href="/events">Events</Link>
        <Link href="/organize">Organize</Link>
        <Link href="/support">Support</Link> */}
        <div className={styles.profile}>
          <img src="https://media.licdn.com/dms/image/D4D03AQEga_9GeIhmFg/profile-displayphoto-shrink_400_400/0/1718673084190?e=1726099200&v=beta&t=IKrRPowio8r-2bK6mRF98JPdGSrf_5OTSIhiLUeYs14" alt="Profile" />
          <span>SL</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
