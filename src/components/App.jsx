import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ContactAdd } from './ContactAdd/ContactAdd';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { getContacts } from './redux/state';
const Key = 'Contacts';

export const App = () => {
  const contacts = useSelector(getContacts);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem(Key, JSON.stringify(contacts));
    } else {
      isMounted.current = true;
    }
  }, [contacts]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactAdd />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
