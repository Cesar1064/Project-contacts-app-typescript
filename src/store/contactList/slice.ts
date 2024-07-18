import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface ContactApiResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface Contact extends ContactApiResponse {
  isFavorite: boolean;
}

interface State {
  data: Contact[];
}

const DEFAULT_STATE: State = {
  data: [],
};

const loadInitialState = (): State => {
  const persistenceData = localStorage.getItem('reduxState');
  return persistenceData
    ? JSON.parse(persistenceData).contactList
    : DEFAULT_STATE;
};

const initialState: State = loadInitialState();

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async () => {
    const fetchPage = async (page: number) => {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      const data: { data: ContactApiResponse[] } = await response.json();
      return data.data;
    };

    const [page1Data, page2Data] = await Promise.all([
      fetchPage(1),
      fetchPage(2),
    ]);
    const allData = [...page1Data, ...page2Data];

    return allData;
  }
);

export const contactListSlice = createSlice({
  name: 'contactList',
  initialState,
  reducers: {
    deleteContactById: (state, action: PayloadAction<number>) => {
      const contactId = action.payload;
      state.data = state.data.filter(contact => contact.id !== contactId);
    },
    addToFavorites: (state, action: PayloadAction<number>) => {
      const contactId = action.payload;
      const index = state.data.findIndex(i => i.id === contactId);
      if (index > -1) {
        state.data[index].isFavorite = true;
      }
    },
    removeToFavorites: (state, action: PayloadAction<number>) => {
      const contactId = action.payload;
      const index = state.data.findIndex(i => i.id === contactId);
      if (index > -1) {
        state.data[index].isFavorite = false;
      }
    },
    addUsers: (state, action: PayloadAction<Contact>) => {
      state.data.push({ ...action.payload });
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.data = action.payload.map(contact => ({
        ...contact,
        isFavorite: false,
      }));
    });
  },
});

export const {
  deleteContactById,
  addToFavorites,
  removeToFavorites,
  addUsers,
} = contactListSlice.actions;

export default contactListSlice.reducer;
