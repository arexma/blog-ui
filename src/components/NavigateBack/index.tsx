import styles from './NavigateBack.module.scss';

export const NavigateBack = () => {
  return (
    <div className={styles.NavigateBack}>
      <button>&#xf013; Settings</button>
      <a href="/">
        <button>&laquo; Back</button>
      </a>
    </div>
  );
};
