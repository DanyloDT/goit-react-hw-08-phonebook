import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <ul className={css.authMenu}>
      <li>
        <NavLink className={css.button} to="/login">
          Log In
        </NavLink>
      </li>
      <li>
        <NavLink className={css.button} to="/signup">
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
