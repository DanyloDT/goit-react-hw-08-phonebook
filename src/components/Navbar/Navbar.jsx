import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import css from './Navbar.module.css';

import { selectLoggedIn } from 'redux/Auth/authSelector';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

const Navbar = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <header className={css.header}>
      <div className={css.container}>
        <NavLink className={css.logo} to="/">
          <span>Phonebook</span>
        </NavLink>
        {isLoggedIn && (
          <nav>
            <NavLink className={css.navLink} to="/contacts">
              Contacts
            </NavLink>
          </nav>
        )}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default Navbar;
