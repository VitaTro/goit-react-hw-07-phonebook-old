import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// використовуємо бібліотеку axios, бо це є одна з найкращих бібліотек JS i Raect
// для подачі запитання HTTP
axios.defaults.baseURL = 'https://664b6f7335bbda10987cf0ae.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});
//   try {
//     dispatch(fetchingInProgress());

//     const response = await axios.get('/contacts');
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
