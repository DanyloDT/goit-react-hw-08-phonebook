import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from 'pages/Home/Home';
import PrivateRoute from 'hoc/PrivateRoute';
import PublicRoute from 'hoc/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refreshThunk } from 'redux/Auth/authOperations';
import { selectRefresh } from 'redux/Auth/authSelector';
import { Loader } from 'components/Loader/Loader';
import css from './App.module.css';

const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const SignUp = lazy(() => import('pages/SignUp/SignUp'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefresh);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LogIn />
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={<h1 className={css.title}>Page is not Found ...</h1>}
          />
        </Route>
      </Routes>
    </div>
  );
};
