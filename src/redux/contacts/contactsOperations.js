import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchContactsApi, addContactApi, deleteContactApi } from '../../services/contactsApi';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await fetchContactsApi();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, thunkApi) => {
    try {
      const { data } = await addContactApi(newContact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkApi) => {
    try {
      await deleteContactApi(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
