import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/state';

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
  return <div>React homework template</div>;
};
