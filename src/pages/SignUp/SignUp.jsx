import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpThunk } from 'redux/Auth/authOperations';
import css from './SignUp.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const SignUp = () => {
  const [credentials, setCredentials] = useState(initialState);
  const { name, email, password } = credentials;
  const dispatch = useDispatch();

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUpThunk(credentials));
    setCredentials('');
  };
  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <span className={css.span}>Name</span>
          <input
            className={css.input}
            name="name"
            value={name}
            onChange={handleChangeInput}
            type="text"
            placeholder="Enter your name..."
          />
        </label>
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

        <button className={css.button}>Sign Up</button>

        <h2 className={css.title}>
          If you have already got an account,
          <Link className={css.link} to="/login">
            Log In
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default SignUp;
