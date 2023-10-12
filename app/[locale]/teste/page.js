import styles from "../../styles/teste.module.scss";

export default function Teste() {
  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>next.js</h1>
      <p className={styles.p}>Dynamic without limits</p>
      <span className={styles.span}>
        very announcement from the 2022 edition of Next.js Conf.
      </span>
    </div>
  );
}
