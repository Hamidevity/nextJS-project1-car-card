import Link from 'next/link';
import styles from './layout.module.css';

function layout({children}) {
  return (
   <>
     <header className={styles.header}>
        <Link href='/'>
        <h2>hamidCar</h2>
        <p>Choose an buy your car</p>
        </Link>
     </header>
     <div className={styles.container}>{children}</div>
    <footer className={styles.footer}>
      <a href='https://google.com' target='_blank'>Hamidstart</a>   Next js project from iran &copy;
    </footer>
   </>
  )
}

export default layout