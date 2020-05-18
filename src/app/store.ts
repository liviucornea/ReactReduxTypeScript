import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import currentToDoReducer from '../features/todo/currentToDoSlice';
import todosReducer from '../features/todo/todosSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
      user: userReducer,
      currentToDo: currentToDoReducer,
      todos: todosReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
