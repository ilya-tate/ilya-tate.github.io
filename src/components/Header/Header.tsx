import Link from "next/link";
import styles from "./Header.module.css";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/">Ilya Tate&apos;s Devsite</Link>
      </h1>
      {children}
    </header>
  );
}
