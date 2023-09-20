import styles from './NavigateBack.module.scss';
import { useNavigate } from 'react-router-dom';

export const NavigateBack = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.NavigateBack}>
      <button>&#xf013; Settings</button>
      <button onClick={() => navigate('/')}>&laquo; Back</button>
    </div>
  );
};
