import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Contact Manager App</h1>
      <p className={styles.description}>
        This app allows you to manage your contacts securely and efficiently.
        Sign up, log in, and start organizing your contacts today!
      </p>
    </div>
  );
};

export default HomePage;
