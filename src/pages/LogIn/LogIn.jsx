import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from 'redux/Auth/authOperations';
import css from './LogIn.module.css';

const initialState = {
  email: '',
  password: '',
};

const LogIn = () => {
  const [credentials, setCredentials] = useState(initialState);
  const { email, password } = credentials;
  const dispatch = useDispatch();

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk(credentials))
      .unwrap()
      .then(() => {});
    setCredentials(initialState);
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <span className={css.span}>Email</span>
          <input
            className={css.input}
            name="email"
            value={email}
            onChange={handleChangeInput}
            type="email"
            placeholder="Enter your email..."
          />
        </label>
        <label className={css.label}>
          <span className={css.span}>Password</span>
          <input
            className={css.input}
            name="password"
            value={password}
            onChange={handleChangeInput}
            type="password"
            placeholder="Enter your password..."
          />
        </label>
        <button className={css.button}>Log In</button>

        <h2 className={css.title}>
          If you don't have account yet, you can simply
          <Link className={css.link} to="/signup">
            Sign Up.
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default LogIn;
