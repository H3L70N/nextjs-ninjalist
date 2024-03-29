import styles from '@/styles/Home.module.css'
import Head from 'next/head';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name= 'keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title} >HomePage</h1>
        <p className={styles.text} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fuga
          numquam ipsum earum dicta explicabo impedit dignissimos dolore? Quo
          quibusdam qui voluptatibus voluptas quos error.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fuga
          numquam ipsum earum dicta explicabo impedit dignissimos dolore? Quo
          quibusdam qui voluptatibus voluptas quos error.
        </p>

        <Link href="/ninjas" legacyBehavior>
          <a className={styles.btn} >See Ninja Listing</a>
        </Link>

      </div>
    </>
  );
}
