import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Link href="/task1" className={styles.card}>
          <h2>Task 1</h2>
          <p>wallet app</p>
        </Link>

        <Link href="/task2" className={styles.card}>
          <h2>Task 2</h2>
          <p>Current time</p>
        </Link>

        <Link
          href="/task3"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Task 3</h2>
          <p>Green Background Color</p>
        </Link>

        <Link href="/task4" className={styles.card}>
          <h2>Task 4</h2>
          <p>Consecutive characters</p>
        </Link>
        <Link href="/task5" className={styles.card}>
          <h2>Task 5</h2>
          <p>Array Sum pairs</p>
        </Link>
      </div>
    </main>
  );
}
