import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpThunk } from 'redux/Auth/authOperations';

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            name="name"
            value={name}
            onChange={handleChangeInput}
            type="text"
            placeholder="Enter your name..."
          />
        </label>
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

        <button>Sign Up</button>
        <hr />
        <h2>
          If you already have account lets to
          <Link to="/login">Log In</Link>
        </h2>
      </form>
    </div>
  );
};

export default SignUp;
