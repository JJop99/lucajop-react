// pages/NotFound.js
import styles from '../styles/NotFound.module.sass'; // Se utilizzi CSS Modules

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Pagina non trovata</h1>
      <p className={styles.message}>
        La pagina che stai cercando non esiste.
      </p>
      <a href="/" className={styles.link}>
        Torna alla Home
      </a>
    </div>
  );
};

export default Custom404;
