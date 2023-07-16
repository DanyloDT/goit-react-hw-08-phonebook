import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from 'redux/Auth/authOperations';

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input
            name="email"
            value={email}
            onChange={handleChangeInput}
            type="email"
            placeholder="Enter your email..."
          />
        </label>
        <label>
          <span>Password</span>
          <input
            name="password"
            value={password}
            onChange={handleChangeInput}
            type="password"
            placeholder="Enter your password..."
          />
        </label>
        <button>Log In</button>
        <hr />
        <h2>
          If you dont have account go to
          <Link to="/signup">Sing Up</Link>
        </h2>
      </form>
    </div>
  );
};

export default LogIn;
