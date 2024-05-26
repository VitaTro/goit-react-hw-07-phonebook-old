import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './App.module.css';
import { ContactAdd } from './ContactAdd/ContactAdd';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from './redux/operations';
import { getError, getIsLoading } from './redux/state';

// const Key = 'Contacts';

export const App = () => {
  // const contacts = useSelector(getContacts);
  // const isMounted = useRef(false);

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    //   if (isMounted.current) {
    //     localStorage.setItem(Key, JSON.stringify(contacts));
    //   } else {
    //     isMounted.current = true;
    //   }
    // }, [contacts]
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.primary}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactAdd />
      <h2 className={css.header}>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Please wait, is loading...</p>}
      <ContactList />
    </div>
  );
};
