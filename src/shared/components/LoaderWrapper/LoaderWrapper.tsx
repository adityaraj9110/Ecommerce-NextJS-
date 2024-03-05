import styles from "./loaderWrapper.module.css";

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      {children}
      <h4>Loading...</h4>
      <p>Hope this will not take too much time :)</p>
    </div>
  );
};

export default LoaderWrapper;
