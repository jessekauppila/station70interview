import Image from 'next/image';
import styles from './page.module.css';
//import Image1 from './image1.webp';

// const handleClick = () => {
//   console.log('clicked');
// };

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <img
            src="https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/f_auto/mls-sea/cft8sh9v0et9je6vmt49"
            alt="soccer player 1"
            width={180}
          />

          <img
            src="https://images.seattletimes.com/wp-content/uploads/2024/03/03022024_goal_220809.jpg?d=780x520"
            alt="soccer player 2"
            width={180}
          />

          <img
            src="https://www.sounderatheart.com/content/images/size/w1304/2024/08/53724783328_f012226658_o--1-.jpg"
            alt="soccer player 3"
            width={180}
          />
        </div>

        <button>Click me</button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
