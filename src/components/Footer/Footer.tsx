import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li><a href="mailto:mail@ilyatate.com">mail@ilyatate.com</a></li>
        <li>
          <a href="https://www.linkedin.com/in/ilya-tate-7b9099204">LinkedIn</a>
        </li>
        <li><a href="https://github.com/ilya-tate/">GitHub</a></li>
      </ul>
    </footer>
  );
}
