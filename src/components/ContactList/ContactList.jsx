import { deleteContact } from 'components/redux/contactsSlice';
import { getContacts, getFilter } from 'components/redux/state';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };

  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => {
          return (
            <li key={contact.id}>
              {contact.name} : {contact.number}{' '}
              <button id={contact.id} onClick={handleDelete}>
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
