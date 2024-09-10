import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <span className={styles.username}>Welcome, {user.name}</span>
      <button className={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
