import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/authSelector';
import { logoutThunk } from 'redux/Auth/authOperations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  return (
    <div className={css.authMenu}>
      <h1 className={css.title}>Hello {user.name}</h1>

      <button className={css.button} onClick={() => dispatch(logoutThunk())}>
        Exit
      </button>
    </div>
  );
};

export default UserMenu;
