import { getContacts } from 'components/redux/state';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

export const ContactAdd = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isInBase = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (!isInBase) {
      dispatch(addContact(name, number));
      form.reset();
    } else {
      alert(`${name} is use. Try another name.`);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user-name">Name</label>
          <div>
            <input
              type="text"
              name="name"
              pattern="/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)$/"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="number">Number</label>
          <div>
            <input
              type="tel"
              name="number"
              pattern="/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
        </div>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
