import Head from 'next/head';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main className={styles.main}>
        <h1>Contact Us</h1>
        <p>Phone number: (123) 456-7890</p>
        <p>Why don't skeletons fight each other? They don't have the guts.</p>
      </main>
    </div>
  );
}