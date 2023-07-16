import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import css from './Contacts.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/operations';
import { Loader } from '../../components/Loader/Loader';
import { selectorLoading } from 'redux/selector';
import { selectLoggedIn } from 'redux/Auth/authSelector';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorLoading);
  const isLoggedIn = useSelector(selectLoggedIn);
  useEffect(() => {
    isLoggedIn && dispatch(fetchContactsThunk());
  }, [dispatch, isLoggedIn]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />

      {isLoading ? <Loader /> : <ContactList />}
    </div>
  );
};
export default Contacts;
