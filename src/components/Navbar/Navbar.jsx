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
      {/* <NavLink className={css.logo} to="/">
        <span>Phonebook</span>
      </NavLink> */}
      <h1 className={css.title}>Hello {user.name}</h1>
      <nav className={css.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
      <div>
        {!isLoggedIn && (
          <button onClick={() => navigate('/login')}>Log In</button>
        )}
        {!isLoggedIn && (
          <button onClick={() => navigate('/signup')}>Sign Up</button>
        )}
        {isLoggedIn && (
          <button
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
    </header>
  );
};

export default Navbar;
