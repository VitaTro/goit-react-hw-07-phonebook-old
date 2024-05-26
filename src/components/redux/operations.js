import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// взагалі цей файл треба для того, щоб тут створити певні операції, а також обробки цих операцій

// в даному випадку треба створити "сховище" всіх контактів
// додавання контаків
// видалення контактів

// використовуємо бібліотеку axios, бо це є одна з найкращих бібліотек JS i Raect
// для подачі запитання HTTP
axios.defaults.baseURL = 'https://664b6f7335bbda10987cf0ae.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // Wykorzystamy symbol podkreślenia jako nazwę pierwszego parametru,
  // ponieważ w tej operacji nie jest nam potrzebny
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // Przy pomyślnym zapytaniu zwracamy promise z danymi
      return response.data;
    } catch (e) {
      // Przy błędzie zapytania zwracamy promise,
      // który zostanie odrzucony z tekstem błędu
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, thunkAPI) => {
    try {
      // const response = await axios.get('/contacts');
      // return response.data;
      const { name, number } = newContact;
      const response = await axios.post('/contacts', {
        name: name,
        number: number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
//   try {
//     dispatch(fetchingInProgress());

//     const response = await axios.get('/contacts');
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
