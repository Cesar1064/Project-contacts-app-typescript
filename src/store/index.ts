import { configureStore } from '@reduxjs/toolkit';
import contactListReducers from './contactList/slice';

const persistanceLocalStorage =
  (store: any) => (next: any) => (action: any) => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('reduxState', JSON.stringify(state));
    return result;
  };

export const store = configureStore({
  reducer: {
    contactList: contactListReducers,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(persistanceLocalStorage),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
