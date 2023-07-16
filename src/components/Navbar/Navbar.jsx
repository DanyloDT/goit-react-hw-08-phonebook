import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import css from './Navbar.module.css';
import { logoutThunk } from 'redux/Auth/authOperations';
import { selectLoggedIn, selectUser } from 'redux/Auth/authSelector';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <header className={css.header}>
      <div className={css.container}>
        <NavLink className={css.logo} to="/">
          <span>Phonebook</span>
        </NavLink>

        <nav>
          {isLoggedIn && (
            <NavLink
              className={css.navLink}
              activeClassName={css.active}
              to="/contacts"
            >
              Contacts
            </NavLink>
          )}
        </nav>
        <div className={css.authMenu}>
          {isLoggedIn && <h1 className={css.title}>Hello {user.name}</h1>}
          {!isLoggedIn && (
            <button className={css.button} onClick={() => navigate('/login')}>
              Log In
            </button>
          )}
          {!isLoggedIn && (
            <button className={css.button} onClick={() => navigate('/signup')}>
              Sign Up
            </button>
          )}
          {isLoggedIn && (
            <button
              className={css.button}
              onClick={() =>
                dispatch(logoutThunk())
                  .unwrap()
                  .then(() => navigate('/login'))
              }
            >
              Exit
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
